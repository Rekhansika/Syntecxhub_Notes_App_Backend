# Syntecxhub_Notes_App_Backend

# Notes App Backend

## Features
- User Registration & Login (JWT Authentication)
- Create, Read, Update, Archive Notes
- Notes tied to specific users
- Only owner can access their notes
- Soft delete using isArchived flag
- Mongoose populate for fetching user with note

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

## Installation

1. Clone repository
2. Run npm install
3. Create .env file
4. Run npm run dev

## API Endpoints

Auth:
POST /api/auth/register
POST /api/auth/login

Notes:
POST /api/notes
GET /api/notes
GET /api/notes/:id
PUT /api/notes/:id
PATCH /api/notes/:id/archive