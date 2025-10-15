const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] }
});

app.get('/', (req, res) => {
  res.send('Socket.io server running');
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join', (name) => {
    socket.data.name = name || 'Anonymous';
    socket.broadcast.emit('message', {
      system: true,
      text: `${socket.data.name} joined the chat`
    });
  });

  socket.on('message', (text) => {
    const payload = {
      name: socket.data.name || 'Anonymous',
      text,
      id: socket.id,
      time: Date.now()
    };
    io.emit('message', payload);
  });

  socket.on('disconnect', () => {
    io.emit('message', {
      system: true,
      text: `${socket.data.name || 'A user'} left the chat`
    });
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
