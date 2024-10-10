from fastapi import APIRouter, Depends
from social_network.services.NotificationServices import (
    get_notification_by_user,
    add_notification,
    mark_read_notification,
)
from social_network.models import Notification
from social_network.auth.JWTServices import get_user_from_token

router = APIRouter(
    prefix="/api/social-network/v1/notification",
    # dependencies=[Depends(get_user_from_token)],
)


@router.get("")
async def get_notification_by_user_api(user_id: str):
    return await get_notification_by_user(user_id)


@router.post("")
async def add_notification_api(notification: Notification):
    return await add_notification(notification)


@router.get("/mark")
async def mark_read_notification_api(user_id: str):
    return await mark_read_notification(user_id)
