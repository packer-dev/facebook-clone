from firebase_admin import db
from utils import new_value, check_datetime_less_than_24
from social_network.services.CommonServices import upload_media_base64, delete_media
from social_network.models import Story
from uuid import uuid4
from datetime import datetime
from social_network.res import story as resStory
import os


async def get_story_by_user(user_id):
    ref = db.reference("social-network")

    story_group = new_value(ref.child("stories").get(), {})
    relationships = new_value(ref.child("relationships").get(), [])

    relationships = [
        relationship["user2"]
        for relationship in relationships
        if relationship["user1"] == user_id and relationship["status"] == 3
    ]
    relationships = [user_id] + relationships
    new_story_group = {}

    for relationship in relationships:
        if relationship in story_group:
            new_stories = sorted(
                story_group[relationship], key=lambda x: x["time_created"], reverse=True
            )
            new_story_group[relationship] = new_stories
            filter_stories = []
            for story in new_stories:
                if check_datetime_less_than_24(story["time_created"]) == True:
                    filter_stories.append(resStory.dict(story))
                else:
                    break
            new_story_group[relationship] = filter_stories

    sorted_all = []
    for key, value in new_story_group.items():
        sorted_all = sorted_all + value

    sorted_all = sorted(sorted_all, key=lambda x: x["time_created"], reverse=True)

    response_story_group = {}

    for item in sorted_all:
        if item["user"]["id"] not in response_story_group:
            response_story_group[item["user"]["id"]] = new_story_group[
                item["user"]["id"]
            ]

    response = []

    for key, value in response_story_group.items():
        response.append(value)

    return response


async def get_story_profile_by_user_id(user_id, limit, offset):
    ref = db.reference("social-network")

    stories = new_value(ref.child("stories").get(), {})
    stories = stories[user_id] if user_id in stories else []
    sorted_data = sorted(stories, key=lambda x: x["time_created"], reverse=True)
    sorted_data = sorted_data[offset : limit * (1 if offset == 0 else offset)]
    return {"list": sorted_data, "total": len(stories)}


async def add_story(user_id: str, story: Story, media: str):
    result = await upload_media_base64(media, "FacebookNative/Stories")

    ref = db.reference("social-network")

    stories = new_value(ref.child("stories").get(), {})

    story.id = str(uuid4())
    story.time_created = str(datetime.now())
    story.url = result["url"]

    list_story = stories[user_id] if user_id in stories else []
    stories[user_id] = [story.model_dump()] + list_story
    ref.child("stories").set(stories)

    return story


async def delete_story(user_id: str, story_id: str):
    ref = db.reference("social-network")

    stories = new_value(ref.child("stories").get(), {})

    if user_id not in stories:
        return None

    story = [item for item in stories[user_id] if item["id"] == story_id]
    story = story[0] if len(story) == 1 else None

    if story is not None:
        url = story["url"]
        public_id = os.path.splitext(
            url[url.find("FacebookNative/Stories/") : len(url)]
        )[0]
        await delete_media([public_id])
        stories[user_id] = [item for item in stories[user_id] if item["id"] != story_id]
        ref.child("stories").set(stories)
    return None
