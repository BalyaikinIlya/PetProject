import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:8081",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("createMessage", (data) => {
    socket.emit("newMessage", {
      text: data.text + "Test1234 from server",
    });
  });

  socket.emit("newMessage", {
    text: " SERVER",
  });
});

io.listen(3000, () => {
  console.log("listening on *:3000");
});
