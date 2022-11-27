import { io } from "socket.io-client";

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io("http://localhost:3000", {
      //   auth: {
      //     token: "abc",
      //   },
    });

    this.socket.emit("newMessage", "Hello there from Vue.");
  }
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();
