from social_network.models import Feel
from social_network.res import user


def get(feel: Feel):
    return {
        "id": feel.id,
        "user": user.get(feel.user),
        "type": feel.type,
    }


def dict(feel: any):
    return {
        "id": feel["id"],
        "user": user.dict(feel["user"]),
        "type": feel["type"],
    }
