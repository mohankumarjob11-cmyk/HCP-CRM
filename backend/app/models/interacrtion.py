from sqlalchemy import Column, Integer, String
from app.database import Base

class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)

    hcp_name = Column(String)
    interaction_type = Column(String)

    date = Column(String)
    time = Column(String)

    topics = Column(String)

    materials = Column(String)

    samples = Column(String)

    sentiment = Column(String)

    outcomes = Column(String)

    follow_up = Column(String)