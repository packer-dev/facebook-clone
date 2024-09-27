from social_network.models import Message
from social_network.res import user


def get(message: Message):
    return {
        "id": message.id,
        "content": message.content,
        "user": user.get(message.user),
        "time_created": message.time_created,
    }


def dict(message: Message):
    return {
        "id": message["id"],
        "content": message["content"],
        "user": user.dict(message["user"]),
        "time_created": message["time_created"],
    }
