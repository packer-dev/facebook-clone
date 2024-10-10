from social_network.models import Notification
from social_network.res import user as resUser


def get(notification: Notification):
    return {
        "id": notification.id,
        "type": notification.type,
        "user": resUser.get(notification.user),
        "sender": resUser.get(notification.sender),
        "time_created": notification.time_created,
    }
