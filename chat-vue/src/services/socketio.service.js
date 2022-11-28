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

    this.socket.emit("newMessage", "Hello  from Vue.");
  }
  userJoined(user) {
    this.socket.emit("userJoined", user, (data) => {
      user.id = data.userId;
    });
    return user.id;
  }
  systemMessage(sysText) {
    this.socket.on("createSystemMessage", (arg) => {
      console.log(typeof arg, "test");
      return arg;
    });
    console.log(typeof this.arg);

    return sysText;
  }
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();
