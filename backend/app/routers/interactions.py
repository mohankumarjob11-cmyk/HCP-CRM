from fastapi import APIRouter
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models.interacrtion import Interaction

router = APIRouter(
    prefix="/interactions",
    tags=["Interactions"]
)

database = []

@router.post("/")
def save_interaction(data: dict):

    db: Session = SessionLocal()

    interaction = Interaction(
        hcp_name=data.get("hcpName"),
        interaction_type=data.get("interactionType"),
        date=data.get("date"),
        time=data.get("time"),
        topics=data.get("topics"),
        materials=",".join(data.get("materials", [])),
        samples=",".join(data.get("samples", [])),
        sentiment=data.get("sentiment"),
        outcomes=data.get("outcomes"),
        follow_up=data.get("followUp"),
    )

    db.add(interaction)
    db.commit()
    db.refresh(interaction)
    db.close()

    return {
        "success": True,
        "id": interaction.id
    }
@router.get("/")
def get_interactions(
    doctor_name: str | None = None,
    interaction_type: str | None = None,
):
    db: Session = SessionLocal()

    query = db.query(Interaction)

    if doctor_name:
        query = query.filter(
            Interaction.hcp_name.ilike(f"%{doctor_name}%")
        )

    if interaction_type:
        query = query.filter(
            Interaction.interaction_type == interaction_type
        )

    interactions = query.all()

    db.close()

    return interactions