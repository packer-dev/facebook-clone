from fastapi import APIRouter, Form, Depends
from social_network.models import LoginDTO, User, RelationshipPayload
from social_network.services.AuthServices import (
    login,
    register,
    get_user_by_id,
    get_friends,
    update_user_service,
    get_suggest_friend,
    relationship_request,
    upload_media_profile_user,
    relationship_check,
    get_friend_main,
    search_user,
)
from fastapi import Form, UploadFile, File
from typing import List, Optional
from social_network.auth.JWTServices import (
    generate_token,
    check_token_expired,
    get_user_from_token,
)

router = APIRouter(prefix="/api/social-network/v1")


@router.post("/login")
async def login_api(dto: LoginDTO):
    return await login(dto)


@router.post("/register")
async def register_api(dto: User):
    return await register(dto)


@router.put("/user", dependencies=[Depends(get_user_from_token)])
async def register_api(dto: User):
    return await update_user_service(dto)


@router.get("/user/id", dependencies=[Depends(get_user_from_token)])
async def get_user_by_id_api(user_id: str):
    return await get_user_by_id(user_id)


@router.post("/friends", dependencies=[Depends(get_user_from_token)])
async def get_friends_api(user_id: str, selected: List[str] = None):
    return await get_friends(user_id, selected)


@router.get("/suggest-friend", dependencies=[Depends(get_user_from_token)])
async def get_suggest_friend_api(user_id: str):
    return await get_suggest_friend(user_id)


@router.post("/relationship", dependencies=[Depends(get_user_from_token)])
async def relationship_api(relationship_payload: RelationshipPayload):
    return await relationship_request(relationship_payload)


@router.get("/relationship", dependencies=[Depends(get_user_from_token)])
async def relationship_api(user1: str, user2: str):
    return await relationship_check(user1, user2)


@router.get("/users", dependencies=[Depends(get_user_from_token)])
async def relationship_api(user_id: str, status: int):
    return await get_friend_main(user_id, status)


@router.post("/upload-profile", dependencies=[Depends(get_user_from_token)])
async def upload_media_profile_user_api(
    folder: str = Form(...),
    file: UploadFile = File(None),
    is_cover: str = Form(...),
    user_id: str = Form(...),
):
    return await upload_media_profile_user(
        folder=folder, file=file, is_cover=is_cover, user_id=user_id
    )


@router.get("/user/search", dependencies=[Depends(get_user_from_token)])
async def search_user_api(search: str, limit: Optional[int], offset: Optional[int]):
    return await search_user(search=search, limit=limit, offset=offset)


@router.post("/jwt/create-token")
async def create_token_api(user_id: str = Form(...), name: str = Form(...)):
    return generate_token(user_id=user_id, name=name)


@router.get("/jwt/check-token-expired")
async def check_token_expired_api(token: str):
    return await check_token_expired(token)
