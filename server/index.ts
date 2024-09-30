import { Socket } from "socket.io";
import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

const socketIo = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

socketIo.on("connection", (socket: Socket) => {
  socket.on("send-message", (data) => {
    socketIo.emit(`receive-message-${data?.groupId}`, JSON.stringify(data));
  });

  socket.on("send-feel-post", (data) => {
    socketIo.emit(`receive-feel-post-${data?.postId}`, JSON.stringify(data));
  });

  socket.on("send-comment", (data) => {
    socketIo.emit(`receive-comment-${data?.postId}`, JSON.stringify(data));
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(process.env.PORT || 4444, () => {
  console.log("Server running port 4444");
});
