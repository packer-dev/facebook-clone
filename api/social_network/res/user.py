from social_network.models import User


def get(user: User):
    return {
        "id": user.id,
        "name": user.name,
        "avatar": user.avatar,
        "email": user.email,
        "cover": user.cover,
    }


def dict(user: any):
    return {
        "id": user["id"],
        "name": user["name"],
        "avatar": user["avatar"],
        "email": user["email"],
        "cover": user["cover"],
    }
