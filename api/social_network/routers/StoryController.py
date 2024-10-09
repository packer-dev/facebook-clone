from fastapi import APIRouter, Depends, Form
from social_network.auth.JWTServices import get_user_from_token
from social_network.services.StoryServices import (
    get_story_by_user,
    add_story,
    delete_story,
)
import json
from social_network.models import Story, User

router = APIRouter(
    prefix="/api/social-network/v1/story",
)


@router.get("")
async def get_story_by_user_api(user_id: str):
    return await get_story_by_user(user_id)


@router.post("")
async def add_story_api(
    user_id: str = Form(...),
    story: str = Form(...),
    media: str = Form(...),
):
    story = json.loads(story)

    user = User(
        id=story["user"]["id"],
        name=story["user"]["name"],
        email=story["user"]["email"],
        password=story["user"]["password"],
        avatar=story["user"]["avatar"],
        cover=story["user"]["cover"],
        last_time_active=story["user"]["last_time_active"],
        bio=story["user"]["bio"],
        description=story["user"]["description"],
        favorites=story["user"]["favorites"],
        is_dark=story["user"]["is_dark"],
        time_created=story["user"]["time_created"],
    )

    story = Story(
        id=story["id"],
        type=story["type"],
        music=story["music"],
        time_created=story["time_created"],
        user=user,
        url=story["url"],
    )
    return await add_story(user_id=user_id, story=story, media=media)


@router.delete("")
async def delete_story_api(user_id: str, story_id: str):
    return await delete_story(user_id=user_id, story_id=story_id)
