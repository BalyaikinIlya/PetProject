import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:8081",
  },
});

io.on("connection", (socket) => {
  console.log(`${socket.id}  connected`);
  let token = socket.handshake.auth.token;
  socket.on("disconnect", () => {
    console.log(`${socket.id}  disconnected`);
  });

  socket.on("newMessage", (msg) => {
    io.emit("broadcastMessage", `server: ${msg}`);
  });
});

httpServer.listen(3000, () => {
  console.log("listening on *:3000");
});
