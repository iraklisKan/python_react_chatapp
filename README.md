# Python React Chat App

A full-stack chat application built with Python Flask backend and React frontend.

## Backend (Flask)

### Features
- RESTful API for managing friends
- CRUD operations (Create, Read, Update, Delete)
- SQLite database with SQLAlchemy ORM
- Auto-generated avatar images
- CORS enabled for frontend integration

### API Endpoints
- `GET /api/friends` - Get all friends
- `POST /api/friends` - Create a new friend
- `PUT/PATCH /api/friends/update/<id>` - Update a friend
- `DELETE /api/friends/<id>` - Delete a friend
- `GET /api/debug/routes` - Debug: List all routes

### Quick Start
1. Navigate to the backend directory
2. Run the application:
   ```bash
   # Option 1: Use the batch file
   .\run.bat
   
   # Option 2: Manual activation
   .\venv\Scripts\Activate.ps1
   python app.py
   ```
3. Server runs on `http://127.0.0.1:5000`

### Tech Stack
- **Flask** - Web framework
- **SQLAlchemy** - ORM for database operations
- **Flask-CORS** - Cross-origin resource sharing
- **SQLite** - Database

## Frontend (React)
*Coming soon...*

## Project Structure
```
chatapp_py_react/
├── backend/
│   ├── app.py          # Flask application entry point
│   ├── models.py       # Database models
│   ├── routes.py       # API routes
│   ├── run.bat         # Easy run script
│   └── venv/           # Virtual environment (not tracked)
├── frontend/           # React frontend (coming soon)
└── .gitignore         # Git ignore rules
```

## Development Notes
- Virtual environment is used for Python dependencies
- Database files are automatically created
- Debug mode is enabled for development
- Auto-reload is enabled when files change
