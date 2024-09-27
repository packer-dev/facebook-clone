from social_network.models import Group
from social_network.res import message, member


def get(group: Group):
    return {
        "id": group.id,
        "name": group.name,
        "members": [member.get(item) for item in group.members],
        "last_message": message.get(group.last_message),
        "data": group.data,
        "time_created": group.time_created,
        "last_time_update": group.last_time_update,
        "image": group.image,
        "seen": group.seen,
        "multiple": group.multiple,
    }


def dict(group: Group):
    return {
        "id": group["id"],
        "name": group["name"],
        "members": [member.dict(item) for item in group["members"]],
        "last_message": message.dict(group["last_message"]),
        "data": group["data"],
        "time_created": group["time_created"],
        "last_time_update": group["last_time_update"],
        "image": group["image"],
        "seen": group["seen"],
        "multiple": group["multiple"],
    }
