# Flask backend that serves React frontend for deployment
from flask import Flask, send_from_directory, send_file
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

# Get the path to the React build directory
frontend_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'frontend', 'dist')

app = Flask(__name__, static_folder=frontend_dir, static_url_path='/')
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///friends.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# Serve React App
@app.route('/')
def serve_react_app():
    return send_from_directory(app.static_folder, 'index.html')

# Catch all other routes and serve React app (for client-side routing)
@app.route('/<path:path>')
def serve_react_routes(path):
    # If the path is for an API endpoint, let it pass through to Flask routes
    if path.startswith('api/'):
        return None  # This will let Flask handle the API routes normally
    
    # For all other paths, serve the React app
    if os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    # Import models and routes after app setup
    from models import Friend
    from routes import *
    
    # Create database tables
    with app.app_context():
        db.create_all()
    
    app.run(debug=True)
