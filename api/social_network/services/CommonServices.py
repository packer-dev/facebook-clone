from fastapi import HTTPException
from social_network.models import FileDTO
from upload.app import (
    upload_media_cloudinary,
    delete_media_cloudinary,
    upload_base64_cloudinary,
)
from typing import List
from uuid import uuid4


async def upload_media(file_dto: FileDTO):
    try:
        contents = await file_dto.file.read()
        result = await upload_media_cloudinary(contents, file_dto.folder)
        media_url = result["secure_url"]
        return {"filename": file_dto.file.filename, "url": media_url}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


async def upload_media_base64(base64: str, folder: str):
    try:
        result = await upload_base64_cloudinary(base64, folder)
        media_url = result["secure_url"]
        return {"filename": f"{str(uuid4())}.jpg", "url": media_url}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


async def delete_media(folder: List[str]):
    try:
        return await delete_media_cloudinary(folder)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


async def update_image_base64(base64: str, folder: str):
    return await upload_base64_cloudinary(base64, folder)
