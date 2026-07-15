from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.ai import router as ai_router
from app.routers.interactions import router as interaction_router
from app.database import Base, engine
from app.models.interacrtion import Interaction

app = FastAPI(title="AI HCP CRM")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
Base.metadata.create_all(bind=engine)
app.include_router(ai_router)
app.include_router(interaction_router)

@app.get("/")
def home():
    return {"message": "Backend Running"}