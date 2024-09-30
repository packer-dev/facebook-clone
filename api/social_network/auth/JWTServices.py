from fastapi import Depends, HTTPException
import jwt
from firebase_admin import db
from datetime import datetime, timezone, timedelta
from social_network.models import User
import os
from dotenv import load_dotenv
from social_network.res import user as resUser
from fastapi.security import OAuth2PasswordBearer

load_dotenv()
secret_key = os.getenv("SECRET_KEY")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def generate_token(user_id: str, name: str):
    payload = {
        "user_id": user_id,
        "name": name,
        "iat": datetime.now(tz=timezone.utc),
        "exp": datetime.now(tz=timezone.utc) + timedelta(days=0, seconds=3600),
    }
    token = jwt.encode(
        payload,
        secret_key,
        algorithm="HS256",
    )
    return token


async def check_token_expired(token: str):
    try:
        decoded = jwt.decode(token, secret_key, algorithms=["HS256"])
        if "user_id" not in decoded:
            return False

        ref = db.reference("social-network")
        users = ref.child("users").get()
        users = users if users is not None else []
        users = [user for user in users if user["id"] == decoded["user_id"]]
        user = users[0] if len(users) == 1 else None
        if user is None:
            return False

        return {
            user: resUser.dict(user) if user is not None else False,
            token: generate_token(user["id"], user["name"]),
        }
    except jwt.ExpiredSignatureError:
        return False
    except jwt.InvalidTokenError:
        return False


async def get_user_from_token(params: str = Depends(oauth2_scheme)):
    token = params
    response = await check_token_expired(token=token)
    if response == False:
        raise HTTPException(
            status_code=401,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": ""},
        )
