<<<<<<< HEAD
# AI-First HCP CRM

An AI-powered Healthcare Professional (HCP) Customer Relationship Management (CRM) system that enables pharmaceutical sales representatives to log, manage, and analyze doctor interactions using Artificial Intelligence. The application combines a conversational AI interface with a structured interaction form to reduce manual data entry and improve productivity.

---

# Features

- 🤖 AI-assisted interaction logging
- 💬 Conversational chat interface
- 🎤 Voice note summarization
- 📝 Automatic interaction form population
- ✏️ Editable AI-generated fields
- 😊 AI-based sentiment analysis
- 📅 Automatic date and time extraction
- 🔍 Search previous interactions
- 💾 Save interactions to PostgreSQL
- ⚡ FastAPI REST API backend
- 🔄 Redux state management

---

# Technology Stack

## Frontend

- React.js
- Redux Toolkit
- Tailwind CSS
- Vite

## Backend

- FastAPI
- LangChain
- LangGraph
- Groq API (Llama 3.3 70B)
- PostgreSQL

---

# Project Workflow

```
Sales Representative
        │
        ▼
Describe Meeting / Voice Note
        │
        ▼
LangGraph AI Agent
        │
        ▼
Extract Structured Information
        │
        ▼
Populate Interaction Form
        │
        ▼
User Reviews & Edits
        │
        ▼
Save Interaction
        │
        ▼
PostgreSQL Database
```

---

# LangGraph AI Agent

The application uses a **LangGraph AI Agent** to intelligently process Healthcare Professional (HCP) interactions.

The agent receives natural language input from the sales representative, analyzes the conversation using a Large Language Model (LLM), extracts structured information, and coordinates different CRM tools to automate interaction logging.

## Responsibilities

- Understand natural language meeting descriptions
- Extract doctor and meeting details
- Detect meeting sentiment
- Populate the interaction form automatically
- Support voice note summarization
- Allow user verification and editing
- Store validated interactions in PostgreSQL

---

# LangGraph Tools

The LangGraph AI Agent uses the following tools for sales-related activities.

---

## 1. Log Interaction Tool (Required)

### Purpose

Captures interaction details from conversational chat or voice notes and converts them into structured CRM records.

### Functions

- Accepts natural language meeting descriptions
- Extracts doctor name
- Extracts interaction type
- Extracts meeting date and time
- Identifies discussion topics
- Detects materials shared
- Identifies samples distributed
- Performs sentiment analysis
- Suggests outcomes
- Suggests follow-up actions
- Automatically populates the interaction form

---

## 2. Edit Interaction Tool (Required)

### Purpose

Allows users to modify AI-generated interaction details before saving them to the CRM.

### Functions

- Edit HCP Name
- Edit Interaction Type
- Edit Date & Time
- Edit Topics Discussed
- Edit Materials Shared
- Edit Samples Distributed
- Edit Sentiment
- Edit Outcomes
- Edit Follow-up Actions
- Save corrected interaction

This ensures users always have complete control over the final CRM data.

---

## 3. Voice Note Summarization Tool

### Purpose

Converts spoken meeting notes into structured CRM information.

### Functions

- Capture voice input
- Speech-to-text conversion
- Send transcript to AI
- Extract meeting information
- Auto-populate the interaction form

---

## 4. Sentiment Analysis Tool

### Purpose

Analyzes the overall tone of the interaction.

### Functions

Automatically classifies interactions as:

- Positive
- Neutral
- Negative

Users can edit the detected sentiment before saving.

---

## 5. Search Interaction Tool

### Purpose

Allows sales representatives to retrieve previously logged interactions.

### Functions

- Search by HCP name
- Search by interaction type
- Search by product
- Search by meeting date
- View complete interaction history

---

# AI Data Extraction

The AI automatically extracts the following information:

- Doctor Name
- Interaction Type
- Meeting Date
- Meeting Time
- Discussion Topics
- Materials Shared
- Samples Distributed
- Sentiment
- Outcomes
- Follow-up Actions

---

# Database

The application uses **PostgreSQL** to store interaction records.

Each record contains:

- HCP Name
- Interaction Type
- Date
- Time
- Topics Discussed
- Materials Shared
- Samples Distributed
- Sentiment
- Outcomes
- Follow-up Actions
- Created Timestamp

---

# API Endpoints

## AI Interaction

```
POST /ai/chat
```

Receives a natural language interaction and returns structured meeting data.

---

## Save Interaction

```
POST /interactions
```

Stores the verified interaction in PostgreSQL.

---

## Search Interaction

```
GET /interactions
```

Returns previously logged interactions.

---

# Future Enhancements

- Calendar integration
- Automatic reminders
- Dashboard analytics
- Product recommendation engine
- Doctor visit scheduling
- Multi-language support
- Mobile application
- Email integration
- Offline interaction logging

---

# Project Outcome

The AI-First HCP CRM simplifies interaction logging by combining conversational AI, structured data extraction, and editable CRM forms. Using LangGraph, FastAPI, Groq LLM, React, Redux, and PostgreSQL, the system reduces manual effort, improves data accuracy, and enhances sales representative productivity while ensuring that users can review and modify AI-generated information before saving.

---

# Developed Using

- React.js
- Redux Toolkit
- Tailwind CSS
- FastAPI
- LangGraph
- LangChain
- Groq API
- PostgreSQL
- Vite
=======
# AI-First HCP CRM

An AI-powered Healthcare Professional (HCP) Customer Relationship Management (CRM) system that enables pharmaceutical sales representatives to log, manage, and analyze doctor interactions using Artificial Intelligence. The application combines a conversational AI interface with a structured interaction form to reduce manual data entry and improve productivity.

---

# Features

- 🤖 AI-assisted interaction logging
- 💬 Conversational chat interface
- 🎤 Voice note summarization
- 📝 Automatic interaction form population
- ✏️ Editable AI-generated fields
- 😊 AI-based sentiment analysis
- 📅 Automatic date and time extraction
- 🔍 Search previous interactions
- 💾 Save interactions to PostgreSQL
- ⚡ FastAPI REST API backend
- 🔄 Redux state management

---

# Technology Stack

## Frontend

- React.js
- Redux Toolkit
- Tailwind CSS
- Vite

## Backend

- FastAPI
- LangChain
- LangGraph
- Groq API (Llama 3.3 70B)
- PostgreSQL

---

# Project Workflow

```
Sales Representative
        │
        ▼
Describe Meeting / Voice Note
        │
        ▼
LangGraph AI Agent
        │
        ▼
Extract Structured Information
        │
        ▼
Populate Interaction Form
        │
        ▼
User Reviews & Edits
        │
        ▼
Save Interaction
        │
        ▼
PostgreSQL Database
```

---

# LangGraph AI Agent

The application uses a **LangGraph AI Agent** to intelligently process Healthcare Professional (HCP) interactions.

The agent receives natural language input from the sales representative, analyzes the conversation using a Large Language Model (LLM), extracts structured information, and coordinates different CRM tools to automate interaction logging.

## Responsibilities

- Understand natural language meeting descriptions
- Extract doctor and meeting details
- Detect meeting sentiment
- Populate the interaction form automatically
- Support voice note summarization
- Allow user verification and editing
- Store validated interactions in PostgreSQL

---

# LangGraph Tools

The LangGraph AI Agent uses the following tools for sales-related activities.

---

## 1. Log Interaction Tool (Required)

### Purpose

Captures interaction details from conversational chat or voice notes and converts them into structured CRM records.

### Functions

- Accepts natural language meeting descriptions
- Extracts doctor name
- Extracts interaction type
- Extracts meeting date and time
- Identifies discussion topics
- Detects materials shared
- Identifies samples distributed
- Performs sentiment analysis
- Suggests outcomes
- Suggests follow-up actions
- Automatically populates the interaction form

---

## 2. Edit Interaction Tool (Required)

### Purpose

Allows users to modify AI-generated interaction details before saving them to the CRM.

### Functions

- Edit HCP Name
- Edit Interaction Type
- Edit Date & Time
- Edit Topics Discussed
- Edit Materials Shared
- Edit Samples Distributed
- Edit Sentiment
- Edit Outcomes
- Edit Follow-up Actions
- Save corrected interaction

This ensures users always have complete control over the final CRM data.

---

## 3. Voice Note Summarization Tool

### Purpose

Converts spoken meeting notes into structured CRM information.

### Functions

- Capture voice input
- Speech-to-text conversion
- Send transcript to AI
- Extract meeting information
- Auto-populate the interaction form

---

## 4. Sentiment Analysis Tool

### Purpose

Analyzes the overall tone of the interaction.

### Functions

Automatically classifies interactions as:

- Positive
- Neutral
- Negative

Users can edit the detected sentiment before saving.

---

## 5. Search Interaction Tool

### Purpose

Allows sales representatives to retrieve previously logged interactions.

### Functions

- Search by HCP name
- Search by interaction type
- Search by product
- Search by meeting date
- View complete interaction history

---

# AI Data Extraction

The AI automatically extracts the following information:

- Doctor Name
- Interaction Type
- Meeting Date
- Meeting Time
- Discussion Topics
- Materials Shared
- Samples Distributed
- Sentiment
- Outcomes
- Follow-up Actions

---

# Database

The application uses **PostgreSQL** to store interaction records.

Each record contains:

- HCP Name
- Interaction Type
- Date
- Time
- Topics Discussed
- Materials Shared
- Samples Distributed
- Sentiment
- Outcomes
- Follow-up Actions
- Created Timestamp

---

# API Endpoints

## AI Interaction

```
POST /ai/chat
```

Receives a natural language interaction and returns structured meeting data.

---

## Save Interaction

```
POST /interactions
```

Stores the verified interaction in PostgreSQL.

---

## Search Interaction

```
GET /interactions
```

Returns previously logged interactions.

---

# Future Enhancements

- Calendar integration
- Automatic reminders
- Dashboard analytics
- Product recommendation engine
- Doctor visit scheduling
- Multi-language support
- Mobile application
- Email integration
- Offline interaction logging

---

# Project Outcome

The AI-First HCP CRM simplifies interaction logging by combining conversational AI, structured data extraction, and editable CRM forms. Using LangGraph, FastAPI, Groq LLM, React, Redux, and PostgreSQL, the system reduces manual effort, improves data accuracy, and enhances sales representative productivity while ensuring that users can review and modify AI-generated information before saving.

---

# Developed Using

- React.js
- Redux Toolkit
- Tailwind CSS
- FastAPI
- LangGraph
- LangChain
- Groq API
- PostgreSQL
- Vite
>>>>>>> 316d663860a515034c3ee62a9f70470cc5368c8a
