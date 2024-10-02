from social_network.models import Post
from social_network.res import user


def get(post: Post):
    return {
        "id": post.id,
        "user": user.get(post.user),
        "time_created": post.time_created,
        "content": post.content,
        "type": post.type,
        "background": post.background,
        "answer_question": post.answer_question,
        "local": post.local,
        "activity": post.activity,
        "tags": post.tags,
        "share_id": post.share_id,
        "is_share_memory": post.is_share_memory,
    }


def dict(post: any):
    response = {
        "id": post["id"],
        "user": user.dict(post["user"]),
        "time_created": post["time_created"],
        "content": post["content"],
        "type": post["type"],
        "background": post["background"] if "background" in post else None,
        "answer_question": (
            post["answer_question"] if "answer_question" in post else None
        ),
        "local": post["local"] if "local" in post else None,
        "activity": post["activity"] if "activity" in post else None,
        "tags": [user.dict(item) for item in (post["tags"] if "tags" in post else [])],
        "share_id": post["share_id"] if "share_id" in post else "",
        "is_share_memory": (
            post["is_share_memory"] if "is_share_memory" in post else False
        ),
    }

    return {key: value for key, value in response.items() if value is not None}
