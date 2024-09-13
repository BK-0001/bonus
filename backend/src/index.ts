import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "http://localhost:5173" } });

server.listen(3000, () => {
  console.log("listening at http://localhost:3000");
});

io.on("connection", (socket) => {
  console.log("client is connected");

  socket.on("message", (message) => {
    socket.broadcast.emit("message", message);
  });
});
