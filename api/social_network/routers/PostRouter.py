from fastapi import APIRouter, Form, UploadFile, File, Depends
from social_network.services.PostServices import (
    get_post_by_id_user,
    create_post,
    edit_post,
    delete_post,
    get_post_by_id,
    get_user_feel_by_post,
    send_user_feel_by_post,
    get_media,
    model_post,
)
from social_network.models import (
    PostPayload,
    Media,
)
from social_network.auth.JWTServices import get_user_from_token
from typing import List, Optional, Union
import json

router = APIRouter(
    prefix="/api/social-network/v1", dependencies=[Depends(get_user_from_token)]
)


@router.get("/post")
async def get_post_by_id_user_api(
    user_id: str, is_profile: str, offset: int, limit: int
):
    return await get_post_by_id_user(user_id, is_profile, offset, limit)


@router.post("/post")
async def create_post_api(
    post: str = Form(...),
    media_new: List[Union[UploadFile, None]] = File(None),  # Set default to None
):

    post_payload = PostPayload(media_new=media_new, post=model_post(post), media_old=[])
    return await create_post(post_payload)


@router.put("/post")
async def edit_post_api(
    post: str = Form(...),
    media_new: List[Union[UploadFile, None]] = File(None),  # Set default to None
    media_old: Optional[str] = Form(None),  # Set default to None
):
    media_olds = []

    if media_old is not None:
        media_olds = json.loads(media_old)
        media_olds = [
            Media(
                id=media_old["id"],
                url=media_old["url"],
                status=media_old["status"],
                type=media_old["type"],
                folder=media_old["folder"],
            )
            for media_old in media_olds
        ]

    post_payload = PostPayload(
        media_new=media_new, post=model_post(post), media_old=media_olds
    )
    return await edit_post(post_payload)


@router.delete("/post")
async def delete_post_api(post_id: str):
    return await delete_post(post_id)


@router.get("/post/id")
async def get_post_by_id_api(post_id: str):
    return await get_post_by_id(post_id)


@router.get("/feel")
async def get_feel_by_post_api(post_id: str):
    return await get_user_feel_by_post(post_id)


@router.post("/feel")
async def send_feel_by_post_api(post_id: str, user_id: str, type: int):
    return await send_user_feel_by_post(post_id, user_id, type)


@router.get("/post/media")
async def get_media_api(user_id: str, type: int, limit: int, offset: int):
    return await get_media(user_id, type, limit, offset)
