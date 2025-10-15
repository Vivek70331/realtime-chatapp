# Realtime Chat App

A simple **real-time chat application** using **Node.js, Express, Socket.io** for the backend and **React** for the frontend. Users can enter their name and send messages in a shared room. Messages are instantly broadcast to all connected users.

---

## Features

- Real-time messaging using WebSockets (Socket.io)
- Users can enter their name to join
- Broadcast messages to all connected clients
- System messages when a user joins or leaves
- Scrollable chat history in the session
- Timestamps for messages
- Highlight local user's messages

---

## Tech Stack

- **Backend:** Node.js, Express, Socket.io  
- **Frontend:** React, Socket.io-client  
- **Package Management:** npm  

---

## Folder Structure

```
realtime-chat/
├─ server/           # Node.js + Express + Socket.io backend
│  ├─ index.js
│  └─ package.json
├─ client/           # React frontend
│  ├─ src/
│  │  ├─ App.js
│  │  └─ index.css
│  └─ package.json
└─ README.md
```
---

## Installation

1. Clone the repository:
git clone https://github.com/<your-username>/realtime-chat.git
cd realtime-chat

2. Install server dependencies:
cd server
npm install

3. Install client dependencies:
cd ../client
npm install

---

## Running the App

### Option 1: Run backend and frontend separately

- Start backend:
cd server
npm start
Server will run on **http://localhost:5000**

- Start frontend:
cd ../client
npm start
React app will open on **http://localhost:3000**

### Option 2: Run both with a single command (optional)

1. In the **root folder**, create a `package.json` with npm workspace support:

{
  "name": "realtime-chat",
  "private": true,
  "workspaces": ["server", "client"],
  "scripts": {
    "start": "concurrently \"npm:server\" \"npm:client\"",
    "server": "npm --prefix server start",
    "client": "npm --prefix client start"
  },
  "devDependencies": {
    "concurrently": "^8.2.0"
  }
}

2. Install concurrently:
npm install

3. Start both:
npm start

---

## Testing

1. Open **multiple browser windows/tabs** at http://localhost:3000
2. Enter different names
3. Send messages — all connected users will see messages **instantly**
4. Closing a tab will broadcast a “user left the chat” message

---

## Dependencies

**Server:**
- express
- socket.io

**Client:**
- react
- react-dom
- socket.io-client
- react-scripts

---

## Notes

- Messages are **not persisted** — they are lost on refresh
- Default ports: **5000** for server, **3000** for client
- You can customize the frontend styles in `client/src/index.css`

---

## License

This project is open-source under the MIT License.

