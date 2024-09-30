from fastapi import APIRouter, UploadFile, File, Form, Depends
from social_network.services.CommonServices import (
    upload_media,
    delete_media,
    update_image_base64,
)
from social_network.models import FileDTO
from typing import List
from social_network.auth.JWTServices import get_user_from_token

router = APIRouter(
    prefix="/api/social-network/v1", dependencies=[Depends(get_user_from_token)]
)


@router.post("/upload/media")
async def upload_media_api(folder: str = Form(...), file: UploadFile = File(...)):
    file_dto = FileDTO(file=file, folder=folder)
    return await upload_media(file_dto)


@router.post("/upload/base64")
async def upload_base64_api(folder: str = Form(...), base64: str = Form(...)):
    return await update_image_base64(base64, folder)


@router.delete("/delete/media")
async def delete_media_api(folder: List[str]):
    return await delete_media(folder)
