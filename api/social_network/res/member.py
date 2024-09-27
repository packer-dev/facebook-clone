from social_network.models import Member
from social_network.res import user


def get(member: Member):
    return {
        "id": member.id,
        "user": user.get(member.user),
        "is_owner": member.is_owner,
        "nickname": member.nickname,
    }


def dict(member: any):
    return {
        "id": member["id"],
        "user": user.dict(member["user"]),
        "is_owner": member["is_owner"],
        "nickname": member["nickname"],
    }
