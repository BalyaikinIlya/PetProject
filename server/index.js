import { createServer } from "http";
import { Server } from "socket.io";
import { uuidv4 } from './utils.js';
const m = (name, text, id) => ({ name, text, id });
const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:8081",
  },
});

io.on("connection", (socket) => {
  console.log(`${socket.id}  connected`);

  socket.on("userJoined", (data, cb) => {
    cb({ userId: socket.id });
    socket.emit("createSystemMessage", {
      id: uuidv4(),
      text: `Добро пожаловать ${data.name}`,
      time: new Date(),
      userId: socket.id,
      system: true,
    });
  });

  socket.on("newMessage", (data, cb) => {
    console.info(data);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id}  disconnected`);
  });
});

httpServer.listen(3000, () => {
  console.log("listening on *:3000");
});
