from firebase_admin import db
from utils import (
    new_value,
    update_item,
    upload_media_db,
    get_info_user,
    find_index,
    create_date,
)
import uuid
from social_network.models import (
    PostPayload,
    Background,
    Activity,
    Local,
    AnswerQuestion,
    Feel,
    Post,
    ContentPost,
    User,
)
import os
from social_network.services.CommonServices import delete_media
from social_network.services.AuthServices import get_friend_main
from social_network.services.CommentServices import (
    get_comment_by_id_post_off,
)
from datetime import datetime
from social_network.res import (
    post as resPost,
    feel as resFeel,
)
import json


def update_user_post(users, post):
    post["user"] = get_info_user(users, post["user"]["id"])
    return post


async def get_post_by_id_user(
    user_id: str, mode: str, offset: int = 0, limit: int = 10
):
    ref = db.reference("social-network")

    posts = ref.child("posts").get()
    relationships = ref.child("relationships").get()
    feel_post = ref.child("feel-post").get()
    users = new_value(ref.child("users").get(), [])
    media_post = new_value(ref.child("medias").child("posts").get(), {})
    comments = new_value(ref.child("comments").get(), [])

    if posts is None and relationships is None:
        return []

    response = []
    if mode == "false":
        relationships = [
            relationship["user2"]
            for relationship in relationships
            if relationship["user1"] == user_id and relationship["status"] == 3
        ]

        for relationship in relationships:
            filter_post = [post for post in posts if post["user"]["id"] == relationship]
            response = response + filter_post

    if mode == "true":
        response = [post for post in posts if post["user"]["id"] == user_id]

    if mode == "memory":
        for post in posts:
            post_date = create_date(post["time_created"])
            current_date = create_date(str(datetime.now()))
            if (
                post_date["day"] == current_date["day"]
                and post_date["month"] == current_date["month"]
            ):
                response.append(post)

    # Assuming each item has a datetime field in ISO format
    sorted_data = sorted(response, key=lambda x: x["time_created"], reverse=True)

    sorted_data = [
        {
            "post": resPost.dict(update_user_post(users, post)),
            "medias": new_value(media_post.get(post["id"]), []),
            "feel": [
                resFeel.dict(item)
                for item in (
                    feel_post[post["id"]]
                    if feel_post is not None and post["id"] in feel_post
                    else []
                )
            ],
            "comments": get_comment_by_id_post_off(
                post_id=post["id"], comments=comments, users=users
            ),
        }
        for post in sorted_data
    ]
    total = len(sorted_data)

    if mode != "memory":
        sorted_data = sorted_data[offset : limit * (1 if offset == 0 else offset)]

    return {"total": (total), "list": sorted_data}


async def create_post(post_payload: PostPayload):
    try:
        ref = db.reference("social-network")
        users = ref.child("users").get()

        post = post_payload.post.model_dump()
        media_new = post_payload.media_new

        post["id"] = str(uuid.uuid4())
        post["time_created"] = str(datetime.now())
        posts = ref.child("posts").get()

        media_list = []

        if media_new is not None and len(media_new) > 0:
            media_list = await upload_media_db(media_new)

        if posts is None:
            ref.child("posts").set([post])
        else:
            posts = [post] + posts
            ref.child("posts").set(posts)

        ref.child("medias").child("posts").child(post["id"]).set(media_list)

        return {
            "post": update_user_post(users, post),
            "medias": media_list,
            "feel": [],
            "comments": {"total": 0, "list": []},
        }

    except OSError as err:
        print("OS error:", err)


async def edit_post(post_payload: PostPayload):
    ref = db.reference("social-network")

    users = ref.child("users").get()
    post = post_payload.post.model_dump()
    media_new = post_payload.media_new
    media_old = [child.model_dump() for child in post_payload.media_old]

    media_list = media_old

    get_media_old = ref.child("medias").child("posts").child(post["id"]).get()
    get_media_old = new_value(get_media_old, [])

    delete_public_ids = []

    for item in get_media_old:
        check = [child for child in media_old if child["id"] == item["id"]]
        if len(check) == 0:
            folder = item["folder"]
            url = item["url"]
            public_id = os.path.splitext(
                url[url.find(f"FacebookNative/{(folder)}/") : len(url)]
            )[0]
            delete_public_ids.append(public_id)
    if len(delete_public_ids) > 0:
        await delete_media(delete_public_ids)

    if media_new is not None:
        media_new = await upload_media_db(media_new)
        media_list = media_list + media_new

    posts = new_value(ref.child("posts").get(), [])
    posts = update_item(posts, post)

    ref.child("medias").child("posts").child(post["id"]).set(media_list)
    ref.child("posts").set(posts)

    return {
        "post": update_user_post(users, post),
        "medias": media_list,
        "feel": [],
        "comments": [],
    }


async def delete_post(post_id: str):
    ref = db.reference("social-network")

    posts = new_value(ref.child("posts").get(), [])
    users = new_value(ref.child("users").get(), [])
    medias = new_value(ref.child("medias").child("posts").child(post_id).get(), [])
    public_ids = []
    if len(medias) > 0:
        for media in medias:
            url = media["url"]
            folder = media["folder"]
            public_id = os.path.splitext(
                url[url.find(f"FacebookNative/{(folder)}/") : len(url)]
            )[0]
            public_ids.append(public_id)

    comments = new_value(ref.child("comments").child(post_id).get(), [])
    for comment in comments:
        if comment["content"]["type"] == 3:
            url = json.loads(comment["content"]["text"])
            url = url["url"]
            public_id = os.path.splitext(
                url[url.find("FacebookNative/Comments/") : len(url)]
            )[0]
            public_ids.append(public_id)

    if len(public_ids) > 0:
        await delete_media(public_ids)

    post = [item for item in posts if item["id"] == post_id]
    posts = [item for item in posts if item["id"] != post_id]
    post = post[0] if len(post) == 1 else None
    if post is not None:
        index = find_index(users, post["user"]["id"])
        if index != -1:
            if post["type"] == 2 and users[index]["avatar"] == medias[0]["url"]:
                users[index][
                    "avatar"
                ] = "https://res.cloudinary.com/ensonet-dev/image/upload/v1641124176/default-avatar_leprc2.png"
            if post["type"] == 3 and users[index]["cover"] == medias[0]["url"]:
                users[index][
                    "cover"
                ] = "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMDktYWRqLTA1LmpwZw.jpg"

    ref.child("medias").child("posts").child(post_id).set({})
    ref.child("users").set(users)
    ref.child("comments").child(post_id).set({})
    ref.child("posts").set(posts)
    return True


async def get_post_by_id(post_id: str):
    ref = db.reference("social-network")
    posts = new_value(ref.child("posts").get(), [])
    users = new_value(ref.child("users").get(), [])
    posts = [post for post in posts if post["id"] == post_id]
    response = posts[0] if len(posts) == 1 else None
    if response is None:
        return None
    feels = new_value(ref.child("feel-post").child(post_id).get(), [])
    comments = new_value(ref.child("comments").get(), [])
    return {
        "post": resPost.dict(post=response),
        "medias": new_value(
            ref.child("medias").child("posts").child(response["id"]).get(), []
        ),
        "feel": [resFeel.dict(item) for item in feels],
        "comments": get_comment_by_id_post_off(
            post_id=post_id, comments=comments, users=users
        ),
    }


async def get_user_feel_by_post(post_id: str):
    ref = db.reference("social-network")
    feels = new_value(ref.child("feel-post").child(post_id).get(), [])
    users = new_value(ref.child("users").get(), [])
    response = []
    for feel in feels:
        user = [item for item in users if item["id"] == feel]
        user = None if len(user) == 0 else user[0]
        if user is not None:
            response.append(user)

    return response


async def send_user_feel_by_post(post_id: str, user_id: str, type: int):
    ref = db.reference("social-network")
    feels = new_value(ref.child("feel-post").child(post_id).get(), [])
    users = new_value(ref.child("users").get(), [])
    index = -1
    user = [item for item in users if item["id"] == user_id]
    user = user[0] if len(user) == 1 else None
    new_feel = {"id": str(uuid.uuid4()), "type": type, "user": user}
    for pos in range(len(feels)):
        if feels[pos]["user"]["id"] == user_id:
            index = pos
    is_add = new_feel
    if index == -1:
        feels.append(new_feel)
    else:
        if feels[index]["type"] == type:
            feels = [feel for feel in feels if feel["user"]["id"] != user_id]
            is_add = None
        else:
            feels[index]["type"] = type
            is_add = feels[index]
    ref.child("feel-post").child(post_id).set(feels)

    return is_add


async def get_media(user_id, type, limit=9, offset=0):
    ref = db.reference("social-network")

    posts = new_value(ref.child("posts").get(), [])
    if len(posts) == 0:
        return []

    response = []

    if type == 0:
        response = await get_friend_main(user_id, 3)

    else:
        response = []
        posts = [post for post in posts if post["user"]["id"] == user_id]
        sorted_data = sorted(posts, key=lambda x: x["time_created"], reverse=True)
        for post in sorted_data:
            medias = new_value(
                ref.child("medias").child("posts").child(post["id"]).get(), []
            )
            for media in medias:
                if media["type"] == type:
                    response.append(
                        {
                            "post_id": post["id"],
                            "user_id": post["user"]["id"],
                            "media": media,
                        }
                    )

    return {
        "list": response[offset : limit * (1 if offset == 0 else offset)],
        "total": len(response),
    }


def model_post(post: Post):
    post = json.loads(post)

    content = ContentPost(
        id=post["content"]["id"],
        text=post["content"]["text"] if "text" in post["content"] else "",
        data=post["content"]["data"] if "data" in post["content"] else "",
        type=post["content"]["type"],
    )

    background = (
        None
        if post["background"] is None
        else Background(
            id=post.get("background", "").get("id"),
            value=post.get("background", "").get("value"),
            key=post.get("background", "").get("key"),
            type=post.get("background", "").get("type"),
        )
    )

    activity = (
        None
        if post["activity"] is None
        else Activity(
            id=post.get("activity", "").get("id"),
            data=post.get("activity", "").get("data"),
            label=post.get("activity", "").get("label"),
            name=post.get("activity", "").get("name"),
            idActivity=post.get("activity", "").get("idActivity"),
        )
    )

    feel = (
        None
        if post["feel"] is None
        else Feel(
            id=post.get("feel", "").get("id"),
            data=post.get("feel", "").get("data"),
            label=post.get("feel", "").get("label"),
        )
    )

    answer_question = (
        None
        if post["answer_question"] is None
        else AnswerQuestion(
            id=post.get("answer_question", "").get("id"),
            content=post.get("answer_question", "").get("content"),
            value=post.get("answer_question", "").get("value"),
        )
    )

    local = (
        None
        if post["local"] is None
        else Local(
            id=post.get("local", "").get("id"), name=post.get("local", "").get("name")
        )
    )

    user = User(
        id=post["user"]["id"],
        name=post["user"]["name"],
        email=post["user"]["email"],
        password=post["user"]["password"],
        avatar=post["user"]["avatar"],
        cover=post["user"]["cover"],
        last_time_active=post["user"]["last_time_active"],
        time_created=post["user"]["time_created"],
        bio=post["user"]["bio"],
        favorites=post["user"]["favorites"],
        is_dark=post["user"]["is_dark"],
        description=post["user"]["description"],
    )

    post = Post(
        id=post["id"],
        user=user,
        content=content,
        time_created=post["time_created"],
        last_time_update=post["last_time_update"],
        type=post["type"],
        tags=post["tags"],
        feel=feel,
        background=background,
        answer_question=answer_question,
        local=local,
        activity=activity,
        is_share_memory=post["is_share_memory"],
        share_id=post["share_id"],
    )

    return post
