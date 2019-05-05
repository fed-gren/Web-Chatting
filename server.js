const express = require('express');
const path = require('path');
const socket = require('socket.io');

const {log} = console;

const PORT = 3000;
const PUBLIC_PATH = `public`;

//App setup
const app = express();
const server = app.listen(PORT, () => {
  log(`listening to requests on port ${PORT}`);
});

//Static files
app.use(express.static(`${PUBLIC_PATH}`));

//Routing
app.get('/chat', (req, res) => {
  res.sendFile(path.join(`${__dirname}/${PUBLIC_PATH}/chat.html`));
})

//Socket setup
const io = socket(server);

io.on("connection", socket => {
  log(`made socket connection : ${socket.id}`);
  socket.on("disconnect", () => {
    log("user disconnected");
  });

  socket.on("chat", (data) => {
    io.sockets.emit("chat", data);
  });
});