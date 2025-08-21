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

### 📁 Project Structure
```
python_react_chatapp/
├── backend/                    # Flask backend
│   ├── app.py                 # Flask application entry point
│   ├── models.py              # Friend database model (SQLAlchemy)
│   ├── routes.py              # API routes and endpoints
│   ├── requirements.txt       # Python dependencies
│   ├── run.bat               # Easy run script for Windows
│   ├── venv/                 # Virtual environment (auto-created)
│   └── instance/             # SQLite database files (auto-generated)
│       └── friends.db        # SQLite database
├── frontend/                  # React frontend
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Nvabar.jsx           # Navigation bar with add friend button
│   │   │   ├── UserGrid.jsx         # Grid layout for displaying friends
│   │   │   ├── UserCard.jsx         # Individual friend card component
│   │   │   ├── CreateUserModal.jsx  # Modal for adding new friends
│   │   │   └── EditModal.jsx        # Modal for editing friend info
│   │   ├── App.jsx           # Main application component
│   │   ├── main.jsx          # React app entry point
│   │   └── index.css         # Global styles
│   ├── package.json          # Node.js dependencies and scripts
│   ├── vite.config.js        # Vite build configuration
│   └── dist/                 # Production build output (auto-generated)
├── .gitignore                # Git ignore rules
└── README.md                 # Project documentation (this file)
```

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- **Python 3.11+** - [Download here](https://www.python.org/downloads/)
- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/downloads/)

### 📥 Clone the Repository
```bash
git clone https://github.com/iraklisKan/python_react_chatapp.git
cd python_react_chatapp
```

### 🐍 Backend Setup (Flask)

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Create and activate a virtual environment:**
   
   **Windows (PowerShell):**
   ```powershell
   python -m venv venv
   .\venv\Scripts\Activate.ps1
   ```
   
   **Windows (Command Prompt):**
   ```cmd
   python -m venv venv
   venv\Scripts\activate
   ```
   
   **macOS/Linux:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Start the Flask server:**
   ```bash
   # Option 1: Direct command
   python app.py
   
   # Option 2: Use the batch file (Windows only)
   .\run.bat
   ```

5. **Verify backend is running:**
   - Backend server runs on `http://127.0.0.1:5000`
   - You should see: "Flask server running on http://127.0.0.1:5000"
   - Test API: Visit `http://127.0.0.1:5000/api/friends` in your browser

### ⚛️ Frontend Setup (React)

1. **Open a NEW terminal window/tab** and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

3. **Start the React development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   - Frontend runs on `http://localhost:3000` (or the port shown in terminal)
   - Open your browser and go to the displayed URL
   - The app should load with the "My Friends 🚀" header

### ✅ Verification Steps

**Both servers should be running simultaneously:**
1. **Backend**: `http://127.0.0.1:5000` (Flask API)
2. **Frontend**: `http://localhost:3000` (React app)

**Test the full application:**
1. Open `http://localhost:3000` in your browser
2. Click "Add Friend +" button
3. Fill out the form and submit
4. Verify the friend appears in the grid
5. Try editing and deleting friends

### 🔧 Troubleshooting

**Common Issues:**

**Backend Issues:**
- **"Module not found" error**: Make sure virtual environment is activated and dependencies are installed
- **Port 5000 already in use**: Change port in `backend/app.py` line with `app.run(port=5001)`
- **Database issues**: Delete `backend/instance/friends.db` to reset the database

**Frontend Issues:**
- **"npm command not found"**: Install Node.js from the official website
- **Port 3000 in use**: Vite will automatically suggest an alternative port
- **API connection failed**: Ensure backend is running on port 5000

**General:**
- **CORS errors**: Make sure both servers are running and check the BASE_URL in `frontend/src/App.jsx`
- **Virtual environment issues**: Deactivate and recreate: `deactivate`, then repeat setup steps

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

## 🔧 Development Guide

### 💻 Development Mode Features
Both servers support hot reload for efficient development:
- **Backend**: Flask debug mode automatically restarts when you modify Python files
- **Frontend**: Vite dev server provides instant Hot Module Replacement (HMR)

### 🛠️ Making Changes

**Backend Development:**
1. Modify files in the `backend/` directory
2. Flask will automatically reload when you save changes
3. API changes will be immediately available

**Frontend Development:**
1. Modify files in the `frontend/src/` directory
2. Changes appear instantly in the browser (no refresh needed)
3. Component state is preserved during hot reloads

### 📝 Adding New Features

**To add a new API endpoint:**
1. Add the route in `backend/routes.py`
2. Update the Friend model in `backend/models.py` if needed
3. Test the endpoint using browser or Postman

**To add a new React component:**
1. Create the component in `frontend/src/components/`
2. Import and use it in the appropriate parent component
3. Hot reload will show changes immediately

### 🧪 Testing the Application

**Manual Testing Checklist:**
- [ ] Backend API responds at `http://127.0.0.1:5000/api/friends`
- [ ] Frontend loads at `http://localhost:3000`
- [ ] Can add a new friend
- [ ] Can edit friend information
- [ ] Can delete a friend
- [ ] Avatar images load correctly
- [ ] Toast notifications appear for actions
- [ ] Responsive design works on mobile

### 🔍 Debugging Tips

**Backend Debugging:**
- Check terminal output for Flask error messages
- Use `print()` statements for debugging
- Access debug routes: `http://127.0.0.1:5000/api/debug/routes`

**Frontend Debugging:**
- Open browser Developer Tools (F12)
- Check Console tab for JavaScript errors
- Check Network tab for API call failures

### 📦 Dependencies

**Backend Dependencies (requirements.txt):**
- `Flask==3.1.1` - Web framework
- `Flask-SQLAlchemy==3.1.1` - Database ORM
- `Flask-CORS==6.0.1` - Cross-origin requests

**Frontend Dependencies (package.json):**
- `react==19.1.1` - UI library
- `@chakra-ui/react==2.10.9` - Component library
- `vite==7.1.3` - Build tool and dev server

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### 🍴 Fork and Clone
1. Fork this repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/python_react_chatapp.git
   ```

### 🔧 Development Workflow
1. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following the project structure
3. Test your changes thoroughly:
   - Run both backend and frontend
   - Test all CRUD operations
   - Verify responsive design

4. Commit your changes:
   ```bash
   git add .
   git commit -m "Add: your feature description"
   ```

5. Push to your fork and create a Pull Request

### 📋 Contribution Guidelines
- Follow existing code style and structure
- Add comments for complex logic
- Test your changes before submitting
- Update documentation if needed
- Make sure both servers start without errors

### 🐛 Reporting Issues
If you find a bug or have a suggestion:
1. Check if the issue already exists
2. Create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Your environment (OS, Python version, Node version)

## 📄 License

This project is open source and available under the **MIT License**.

### MIT License Summary
- ✅ Use commercially
- ✅ Modify and distribute
- ✅ Use privately
- ⚠️ Include license and copyright notice
- ❌ No warranty provided

---

## 🆘 Need Help?

**Quick Links:**
- 📧 **Issues**: [GitHub Issues](https://github.com/iraklisKan/python_react_chatapp/issues)
- 📖 **Documentation**: This README file
- 🔧 **API Testing**: `http://127.0.0.1:5000/api/debug/routes`

**Common Commands Reference:**
```bash
# Start backend
cd backend
.\venv\Scripts\Activate.ps1  # Windows
python app.py

# Start frontend  
cd frontend
npm install
npm run dev

# Reset database
# Delete backend/instance/friends.db and restart backend
```

**Happy Coding! 🚀**
