# Real-Time Chat Server 

A pure backend Service built with **Node.js** and **Socket.io** that handles real-time message broadcasting and rooms.

## 🛠️ Tech Stack
- **Node.js** (Runtime)
- **Express.js** (Server Framework)
- **Socket.io** (WebSocket Engine)

## ⚙️ How it Works
1. **Connection:** Clients connect via WebSockets.
2. **Events:**
   - `joinRoom`: Adds a socket to a specific channel.
   - `chatMessage`: Broadcasts a message to that specific channel.
3. **Logging:** The server logs all activity to the console.

## 🚀 How to Run

1. **Navigate to the folder:**
   ```bash
   cd CodTech-Internship/Task2-ChatServer

2. **Install Dependencies:**
   ```bash
   npm install

3. **Start the Server:**
   ```bash
   npm start



