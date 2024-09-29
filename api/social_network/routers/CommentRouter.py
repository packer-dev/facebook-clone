from fastapi import APIRouter, UploadFile, File, Form
from social_network.services.CommentServices import (
    get_comment_by_id_post,
    send_comment,
    delete_comment,
)
from social_network.models import CommentPayload, Comment, User, ContentComment
from typing import Optional
import json

router = APIRouter(
    prefix="/api/social-network/v1/comment",
)


@router.get("/id")
async def get_comment_by_id_post_api(post_id: str, limit: int = 10, offset: int = 0):
    return await get_comment_by_id_post(
        post_id=post_id, limit=limit, offset=offset, parent=""
    )


@router.post("")
async def sent_comment_api(
    post_id: str = Form(...),
    comment: str = Form(...),
    media_new: Optional[UploadFile] = File(None),  # Set default to None
    media_old: Optional[str] = Form(None),  # Set default to None):
):
    comment = json.loads(comment)
    user = User(
        id=comment["user"]["id"],
        name=comment["user"]["name"],
        email=comment["user"]["email"],
        password=comment["user"]["password"],
        avatar=comment["user"]["avatar"],
        cover=comment["user"]["cover"],
        last_time_active=comment["user"]["last_time_active"],
        time_created=comment["user"]["time_created"],
        bio=comment["user"]["bio"],
        favorites=comment["user"]["favorites"],
        is_dark=comment["user"]["is_dark"],
        description=comment["user"]["description"],
    )
    content = ContentComment(
        id=comment["content"]["id"],
        text=comment["content"]["text"],
        type=comment["content"]["type"],
    )
    comment = Comment(
        id=comment["id"],
        user=user,
        content=content,
        time_created=comment["time_created"],
        last_time_update=comment["last_time_update"],
        level=comment["level"],
        parent=comment["parent"],
    )
    comment_payload = CommentPayload(
        post_id=post_id, comment=comment, media_new=media_new, media_old=media_old
    )
    return await send_comment(comment_payload)


@router.delete("")
async def sent_comment_api(comment_id: str, post_id: str):
    return await delete_comment(post_id, comment_id)
