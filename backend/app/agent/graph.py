from pydantic import BaseModel, Field
from langchain_groq import ChatGroq

from app.config import GROQ_API_KEY, GROQ_MODEL


class Interaction(BaseModel):
    doctor_name: str = Field(description="Doctor name")
    interaction_type: str = Field(description="Meeting, Call, Email")
    date: str = Field(description="Date in YYYY-MM-DD format")
    time: str = Field(description="Time in 24-hour HH:MM format")
    topics: str
    materials: list[str]
    samples: list[str]
    sentiment: str
    outcomes: str
    follow_up: str


llm = ChatGroq(
    model=GROQ_MODEL,
    groq_api_key=GROQ_API_KEY,
    temperature=0,
)

structured_llm = llm.with_structured_output(Interaction)


def process_interaction(message: str):
    prompt = f"""
You are an AI CRM assistant.

Extract the following fields from the HCP interaction.

IMPORTANT:
- Return date in YYYY-MM-DD format.
- Return time in 24-hour HH:MM format.

Example:
date: 2026-07-15
time: 10:30

Interaction:
{message}
"""

    result = structured_llm.invoke(prompt)

    return result.model_dump()