from fastapi import APIRouter
from app.schemas.chat import ChatRequest
from app.agent.graph import process_interaction

router = APIRouter(prefix="/ai", tags=["AI"])

@router.post("/chat")
async def chat(request: ChatRequest):
    return process_interaction(request.message)