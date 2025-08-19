# TODO: UPDATE THIS FILE FOR DEPLOYMENT
from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///friends.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

if __name__ == "__main__":
    # Import models and routes after app setup
    from models import Friend
    from routes import *
    
    # Create database tables
    with app.app_context():
        db.create_all()
    
    app.run(debug=True)
