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

# Create database tables
with app.app_context():
    db.create_all()

# Import routes AFTER app and db are set up to avoid circular imports
from routes import *

if __name__ == "__main__":
    app.run(debug=True)
