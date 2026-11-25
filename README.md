# Quick-Chat 

1
# QuickChat

A real-time chat application built with the MERN stack. Users can sign up, log in, manage their profile and chat instantly with other registered users, with live online status powered by Socket.IO.

## Features

- User signup and login with JWT-based authentication
- Protected API routes using Express middleware
- Real-time message delivery with Socket.IO (no page refresh)
- Live online-user status
- Profile management with image uploads via Cloudinary
- React (Vite) interface styled with Tailwind CSS

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React, Vite, Tailwind CSS, Axios, Socket.IO Client |
| Backend | Node.js, Express.js, Socket.IO |
| Database | MongoDB Atlas (Mongoose) |
| Auth | JSON Web Tokens (JWT) |
| Media | Cloudinary |

## Project Structure

```
Quick-Chat/
├── client/     # React + Vite frontend
└── server/     # Express + Socket.IO backend
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- A MongoDB Atlas cluster (or a local MongoDB instance)
- A Cloudinary account

### 1. Clone the repository

```bash
git clone https://github.com/SrijanDwivedi600/Quick-Chat.git
cd Quick-Chat
```

### 2. Set up the server

```bash
cd server
npm install
```

Create a `.env` file inside `server/` (see `.env.example`):

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the server:

```bash
npm run server
```

### 3. Set up the client

```bash
cd client
npm install
```

Create a `.env` file inside `client/`:

```env
VITE_BACKEND_URL=http://localhost:5000
```

Start the client:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## How It Works

1. On login, the server verifies the user and returns a JWT, which the client sends with every protected request.
2. Messages are saved in MongoDB and pushed to the receiver instantly over a persistent Socket.IO connection.
3. The server keeps track of connected users and broadcasts the online-user list whenever someone connects or disconnects.
4. Profile pictures are uploaded to Cloudinary, and only the returned URL is stored in the database.

## Author

**Srijan Dwivedi**
[GitHub](https://github.com/SrijanDwivedi600) | [LinkedIn](https://www.linkedin.com/in/srijan-dwivedi-618228380/)
