import { io } from "socket.io-client";
import { uuidv4 } from '@/guid';

// плохая идея, когда есть vuex, это всё должно находится в store
class SocketioService {
  // это хак, без него сейчас сложно выбросить событие в приложение из класса, который ничего не знает про store
  onSystemMessage = (data) => null;

  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io("http://localhost:3000", {
      //   auth: {
      //     token: "abc",
      //   },
    });

    this.socket.on('connect', () => {
      this.socket.emit("newMessage", "Hello from Vue.");

      this.socket.on("createSystemMessage", (message) => {
        console.info('system message', message);
        // вот здесь при таком событии надо уметь отправить данные во vuex чтобы создать новый месседж
        // при текущем подходе без vuex внутри socketio service это проблематично
        this.onSystemMessage(message);
      });
    });
  }

  userJoined(user) {
    return new Promise((resolve) => {
      this.socket.emit("userJoined", user, (data) => {
        return resolve(data);
      });
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();
