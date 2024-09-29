from firebase_admin import db
from social_network.models import CommentPayload, FileDTO
from utils import new_value, find_index
from social_network.services.CommonServices import upload_media, delete_media
from social_network.res import (
    comment as resComment,
)
import json, os, uuid


async def get_comment_by_id_post(
    post_id: str, limit: int = 10, offset: int = 0, parent: str = ""
):
    ref = db.reference("social-network")
    comments = new_value(ref.child("comments").child(post_id).get(), [])
    filter_comment = []
    if parent == "":
        filter_comment = [item for item in comments if item["level"] == 1]
    else:
        filter_comment = [
            item for item in comments if item["level"] == 2 and item["parent"] == parent
        ]
    limit_data = comments[offset : limit * (1 if offset == 0 else offset)]

    return {
        "total": len(filter_comment),
        "list": [
            {
                "item": resComment.dict(item),
                "child": [
                    resComment.dict(child)
                    for child in filter_comment
                    if child["level"] == 2 and child["parent"] == item["id"]
                ],
            }
            for item in limit_data
        ],
    }


def get_comment_by_id_post_off(post_id, comments):
    comments = new_value(comments[post_id] if post_id in comments else [], [])
    filter_comment = [item for item in comments if item["level"] == 1]
    limit_data = filter_comment[0:5]
    return {
        "total": len(filter_comment),
        "list": [
            {
                "item": resComment.dict(item),
                "child": [
                    resComment.dict(child)
                    for child in comments
                    if child["level"] == 2 and child["parent"] == item["id"]
                ],
            }
            for item in limit_data
        ],
    }


async def send_comment(comment_payload: CommentPayload):
    ref = db.reference("social-network")

    comment_payload = comment_payload.model_dump()
    comment = comment_payload["comment"]
    post_id = comment_payload["post_id"]
    media_new = comment_payload["media_new"]
    media_old = comment_payload["media_old"]

    comments = ref.child("comments").child(post_id).get()
    comments = new_value(comments, [])

    is_edit = comment["id"]

    if comment["content"]["type"] == 3 and media_new is not None:
        file_dto = FileDTO(file=media_new, folder="/FacebookNative/Comments")
        result = await upload_media(file_dto)
        content = json.loads(comment["content"]["text"])
        content["url"] = result["url"]
        comment["content"]["text"] = json.dumps(content, separators=(",", ":"))
        if media_old is not None:
            public_id = os.path.splitext(
                media_old[media_old.find("FacebookNative/Comments/") : len(media_old)]
            )[0]

            await delete_media([public_id])

    if is_edit == "":
        comment["id"] = str(uuid.uuid4())
        comments = [comment] + comments
    else:
        index = find_index(comments, comment["id"])
        if index != -1:
            comments[index] = comment

    ref.child("comments").child(post_id).set(comments)

    return comment


async def delete_comment(post_id: str, comment_id: str):
    ref = db.reference("social-network")

    comments = new_value(ref.child("comments").child(post_id).get(), [])
    comment = [item for item in comments if item["id"] == comment_id]
    comment = comment[0] if len(comment) == 1 else None
    if comment is None:
        return False

    if comment["content"]["type"] == 3:
        result = json.loads(comment["content"]["text"])
        url = result["url"]
        public_id = os.path.splitext(
            url[url.find("FacebookNative/Comments/") : len(url)]
        )[0]

        await delete_media([public_id])
    comments = [item for item in comments if item["id"] != comment_id]
    ref.child("comments").child(post_id).set(comments)

    return True
