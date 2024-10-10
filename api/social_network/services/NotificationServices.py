from firebase_admin import db
from utils import new_value, find_index
from social_network.models import Notification
import uuid
from datetime import datetime


async def get_notification_by_user(user_id: str, limit: int = 10, offset: int = 0):
    ref = db.reference("social-network")
    notifications = new_value(ref.child("notifications").child(user_id).get(), [])
    notifications = sorted(
        notifications, key=lambda x: x["last_update_time"], reverse=True
    )
    return {
        "list": notifications[offset : limit * (1 if offset == 0 else offset)],
        "total": len(notifications),
    }


async def mark_read_notification(user_id: str):
    ref = db.reference("social-network")
    notifications = new_value(ref.child("notifications").child(user_id).get(), [])
    for index, item in enumerate(notifications):
        notifications[index]["is_read"] = True
    ref.child("notifications").child(user_id).set(notifications)

    return True


async def add_notification(notification: Notification):
    ref = db.reference("social-network")
    notifications = new_value(
        ref.child("notifications").child(notification.user.id).get(), []
    )

    check = [item for item in notifications if item["main_id"] == notification.main_id]
    check = check[0] if len(check) > 0 else None

    if check:
        notification.id = check["id"]
    else:
        notification.id = str(uuid.uuid4())

    notification.time_created = str(datetime.now())
    notification.last_time_update = str(datetime.now())
    notifications = [notification.model_dump()] + notifications
    ref.child("notifications").child(notification.user.id).set(notifications)

    return notification
