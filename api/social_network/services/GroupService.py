from firebase_admin import db
from utils import new_value, get_info_user, update_item, find_index
from social_network.models import Group, FileDTO
from social_network.services.CommonServices import delete_media, upload_media
import os
from datetime import datetime
from social_network.res import group as resGroup, message as resMessage


async def get_group_by_id(group_id):
    ref = db.reference("social-network")
    groups = new_value(ref.child("groups").get(), [])
    groups = [group for group in groups if group["id"] == group_id]
    group = groups[0] if len(groups) == 1 else None
    if group is None:
        return {"group": None, "messages": []}
    messages = new_value(ref.child("messages").child(group_id).get(), [])
    return {
        "group": resGroup.dict(group),
        "messages": [resMessage.dict(message) for message in messages],
    }


async def update_group(group: Group):
    ref = db.reference("social-network")
    groups = new_value(ref.child("groups").get(), [])
    group.last_time_update = str(datetime.now())
    groups = update_item(groups, group.model_dump())

    ref.child("groups").set(groups)
    return group


async def get_messages_by_group(group_id: str):
    ref = db.reference("social-network")
    messages = new_value(ref.child("messages").child(group_id).get(), [])
    users = new_value(ref.child("users").get(), [])

    for message in messages:
        message["user"] = get_info_user(users, message["user"]["id"])
    return [resMessage.dict(item) for item in messages]


async def upload_image_group(file, group_id, folder, emoji, name):
    ref = db.reference("social-network")
    groups = new_value(ref.child("groups").get(), [])
    group_index = find_index(groups, group_id)

    if group_index == -1:
        return None
    url = groups[group_index]["image"] if "image" in groups[group_index] else ""
    if url != "":
        public_id = os.path.splitext(
            url[url.find(f"FacebookNative/{(folder)}/") : len(url)]
        )[0]
        await delete_media([public_id])

    if file is not None:
        file_dto = FileDTO(file=file, folder=f"FacebookNative/{folder}/")

        response = await upload_media(file_dto)
        if "url" not in response:
            return None
        groups[group_index]["image"] = response["url"]

    groups[group_index]["data"]["emoji"] = emoji
    groups[group_index]["name"] = name

    ref.child("groups").set(groups)

    return groups[group_index]


async def upload_info_group(group: Group):
    ref = db.reference("social-network")
    groups = new_value(ref.child("groups").get(), [])
    for index, item in enumerate(groups):
        if group.id == item["id"]:
            groups[index] = group.model_dump()
            break
    ref.child("groups").set(groups)
    return True
