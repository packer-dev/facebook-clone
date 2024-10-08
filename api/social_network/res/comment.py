from social_network.models import Comment
from social_network.res import user
from utils import get_latest_user


def get(comment: Comment):
    return {
        "id": comment.id,
        "user": user.get(comment.user),
        "content": comment.content,
        "time_created": comment.time_created,
        "level": comment.level,
        "parent": comment.parent,
    }


def dict(comment: any):
    return {
        "id": comment["id"],
        "user": user.dict(comment["user"]),
        "content": comment["content"],
        "time_created": comment["time_created"],
        "level": comment["level"],
        "parent": comment["parent"],
    }


def dict(comment: any, users: any):
    return {
        "id": comment["id"],
        "user": get_latest_user(users, comment["user"]["id"]),
        "content": comment["content"],
        "time_created": comment["time_created"],
        "level": comment["level"],
        "parent": comment["parent"],
    }
