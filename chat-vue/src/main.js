import { createApp } from "vue";
import App from "@/App.vue";
import "./assets/style.scss";
import store from "@/store/index.js";
import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";

const app = createApp(App);
app.use(
  store,
  new VueSocketIO({
    debug: true,
    connection: SocketIO("localhost:3000"),
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_",
    },
  })
);
app.mount("#app");
