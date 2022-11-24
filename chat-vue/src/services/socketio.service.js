import { io } from "socket.io-client";

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io("http://localhost:3000", {
      auth: {
        token: "abc",
      },
    });

    this.socket.emit("newMessage", "Hello there from Vue.");
    this.socket.on("broadcastMessage", (data) => {
      console.log(data);
    });
  }
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();
