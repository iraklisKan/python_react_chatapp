# Python React Friends App

A full-stack friends management application built with Python Flask backend and React frontend with Chakra UI.

## 🚀 Features

### Backend (Flask)
- RESTful API for managing friends
- CRUD operations (Create, Read, Update, Delete)
- SQLite database with SQLAlchemy ORM
- Auto-generated avatar images using DiceBear API
- CORS enabled for frontend integration
- Debug routes for development

### Frontend (React)
- Modern React 19.1.1 with Vite
- Beautiful UI with Chakra UI components
- Responsive grid layout for friend cards
- Modal forms for creating and editing friends
- Toast notifications for user feedback
- Auto-generated avatars based on gender
- Real-time updates and error handling

## 📊 Demo

The app allows you to:
- ✅ View all your friends in a beautiful grid layout
- ✅ Add new friends with name, role, description, and gender
- ✅ Edit existing friend information
- ✅ Delete friends from your list
- ✅ Automatic avatar generation based on gender selection
- ✅ Responsive design that works on all devices

## 🛠️ Tech Stack

### Backend
- **Python 3.13.2** - Programming language
- **Flask 3.1.0** - Web framework
- **SQLAlchemy 3.1.1** - ORM for database operations
- **Flask-CORS 5.0.0** - Cross-origin resource sharing
- **SQLite** - Lightweight database

### Frontend
- **React 19.1.1** - UI library
- **Vite 7.1.3** - Build tool and dev server
- **Chakra UI 2.10.9** - Component library
- **React Icons** - Icon library

## 📁 Project Structure
```
python_react_chatapp/
├── backend/
│   ├── app.py              # Flask application entry point
│   ├── models.py           # Friend database model
│   ├── routes.py           # API routes and endpoints
│   ├── requirements.txt    # Python dependencies
│   ├── run.bat            # Easy run script for Windows
│   ├── venv/              # Virtual environment (not tracked)
│   └── instance/          # Database files (auto-generated)
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Nvabar.jsx        # Navigation bar with add friend
│   │   │   ├── UserGrid.jsx      # Grid layout for friend cards
│   │   │   ├── UserCard.jsx      # Individual friend card
│   │   │   ├── CreateUserModal.jsx # Add new friend modal
│   │   │   └── EditModal.jsx     # Edit friend modal
│   │   ├── App.jsx               # Main app component
│   │   └── main.jsx              # App entry point
│   ├── package.json              # Node.js dependencies
│   └── vite.config.js           # Vite configuration
├── .gitignore                    # Git ignore rules
└── README.md                     # This file
```

## 🚀 Quick Start

### Prerequisites
- Python 3.13+ installed
- Node.js 18+ installed
- Git installed

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Run the application:
   ```bash
   # Option 1: Use the batch file (Windows)
   .\run.bat
   
   # Option 2: Manual activation
   .\venv\Scripts\Activate.ps1
   python app.py
   ```

3. Backend server runs on `http://127.0.0.1:5000`

### Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies and start the dev server:
   ```bash
   npm install
   npm run dev
   ```

3. Frontend server runs on `http://localhost:3001` (or another port if 3000 is occupied)

### Access the Application
- Open your browser and go to `http://localhost:3001`
- The frontend will communicate with the backend API automatically

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/friends` | Get all friends |
| POST | `/api/friends` | Create a new friend |
| PUT | `/api/friends/update/<id>` | Update an existing friend |
| DELETE | `/api/friends/<id>` | Delete a friend |
| GET | `/api/debug/routes` | List all available routes (debug) |

### Request/Response Examples

#### Create a Friend (POST `/api/friends`)
```json
{
  "name": "John Doe",
  "role": "Software Engineer", 
  "description": "Full-stack developer who loves coding",
  "gender": "male"
}
```

#### Response
```json
{
  "id": 1,
  "name": "John Doe",
  "role": "Software Engineer",
  "description": "Full-stack developer who loves coding", 
  "gender": "male",
  "imgUrl": "https://api.dicebear.com/6.x/avataaars/svg?seed=John+Doe&gender=male"
}
```

## 🎨 Features in Detail

### Auto-Generated Avatars
- Uses DiceBear API for consistent, beautiful avatars
- Automatically generates based on name and gender
- Different avatar styles for male/female selections

### Responsive Design
- Mobile-first approach
- Adapts to different screen sizes
- Beautiful grid layout that scales

### User Experience
- Toast notifications for all actions
- Loading states during API calls
- Error handling with user-friendly messages
- Smooth modals and transitions

## 🔧 Development

### Running in Development Mode
Both servers support hot reload:
- **Backend**: Flask debug mode automatically restarts on file changes
- **Frontend**: Vite dev server with instant hot module replacement

### Environment Configuration
- Backend runs on port 5000
- Frontend runs on port 3001 (configurable)
- CORS is configured to allow frontend-backend communication

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test both backend and frontend
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.
