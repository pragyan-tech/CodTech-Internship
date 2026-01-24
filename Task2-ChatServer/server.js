const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log(`✅ User Connected: ${socket.id}`);

    socket.on('joinRoom', (room) => {
        socket.join(room);
        console.log(`👤 User ${socket.id} joined room: ${room}`);
        
        socket.to(room).emit('message', {
            user: 'System',
            text: `User ${socket.id} has joined the ${room} room.`
        });
    });

    socket.on('chatMessage', ({ room, message }) => {
        console.log(`📩 Message to [${room}]: ${message}`);
        
        io.to(room).emit('message', {
            user: socket.id,
            text: message
        });
    });

    socket.on('disconnect', () => {
        console.log('❌ User Disconnected');
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🚀 Chat Server running on http://localhost:${PORT}`);
});