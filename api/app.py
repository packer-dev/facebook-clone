from fastapi import FastAPI, HTTPException, UploadFile, File
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from typing import List
import firebase_admin
from firebase_admin import credentials, db
from pydantic import BaseModel
from chatgpt.app import router as chatGPTRouter
from components.app import router as componentRouter
from props.app import router as propRouter
from contents.app import router as contentRouter
from custom.app import router as customRouter
from data.app import router as dataRouter
from social_network.app import router as socialNetworkRouter
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

firebase_config = {
    "type": os.getenv("FIREBASE_TYPE", ""),
    "project_id": os.getenv("FIREBASE_PROJECT_ID", ""),
    "private_key_id": os.getenv("FIREBASE_PRIVATE_KEY_ID", ""),
    "private_key": os.getenv("FIREBASE_PRIVATE_KEY", "").replace("\\n", "\n"),
    "client_email": os.getenv("FIREBASE_CLIENT_EMAIL", ""),
    "client_id": os.getenv("FIREBASE_CLIENT_ID", ""),
    "auth_uri": os.getenv("FIREBASE_AUTH_URI", ""),
    "token_uri": os.getenv("FIREBASE_TOKEN_URI", ""),
    "auth_provider_x509_cert_url": os.getenv(
        "FIREBASE_AUTH_PROVIDER_X509_CERT_URL", ""
    ),
    "client_x509_cert_url": os.getenv("FIREBASE_CLIENT_X509_CERT_URL", ""),
    "universe_domain": os.getenv("FIREBASE_UNIVERSE_DOMAIN", ""),
}

cred = credentials.Certificate(firebase_config)
firebase_admin.initialize_app(
    cred,
    {
        "databaseURL": "https://api-firebase-830a2-default-rtdb.asia-southeast1.firebasedatabase.app"
    },
)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ComponentDeleteMulti(BaseModel):
    idList: List[str]


app.include_router(chatGPTRouter)
app.include_router(componentRouter)
app.include_router(contentRouter)
app.include_router(propRouter)
app.include_router(customRouter)
app.include_router(dataRouter)
app.include_router(socialNetworkRouter)
