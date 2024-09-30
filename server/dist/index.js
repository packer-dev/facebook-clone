"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const socketIo = require("socket.io")(server, {
    cors: {
        origin: "*",
    },
});
socketIo.on("connection", (socket) => {
    socket.on("send-message", (data) => {
        socketIo.emit(`receive-message-${data === null || data === void 0 ? void 0 : data.groupId}`, JSON.stringify(data));
    });
    socket.on("send-feel-post", (data) => {
        socketIo.emit(`receive-feel-post-${data === null || data === void 0 ? void 0 : data.postId}`, JSON.stringify(data));
    });
    socket.on("send-comment", (data) => {
        socketIo.emit(`receive-comment-${data === null || data === void 0 ? void 0 : data.postId}`, JSON.stringify(data));
    });
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});
server.listen(process.env.PORT || 4444, () => {
    console.log("Server running port 4444");
});
//# sourceMappingURL=index.js.map