from social_network.res import user
from social_network.models import User, Story


def get(story: Story):
    return {
        "id": story.id,
        "music": story.music,
        "url": story.url,
        "user": user.get(story.user),
        "time_created": story.time_created,
        "type": story.type,
    }


def dict(story: any):
    return {
        "id": story["id"],
        "music": story["music"],
        "url": story["url"],
        "user": user.dict(story["user"]),
        "time_created": story["time_created"],
        "type": story["type"],
    }
