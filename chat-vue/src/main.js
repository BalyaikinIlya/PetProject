import { createApp } from "vue";
import App from "@/App.vue";
import "./assets/style.scss";
import store from "@/store/index.js";
// import VueSocketIO from "vue-3-socket.io";

const app = createApp(App);
// app.use(
//   new VueSocketIO({
//     debug: false,
//     connection: SocketIO("localhost:3000"),
//     vuex: {
//       store,
//       actionPrefix: "SOCKET_",
//       mutationPrefix: "SOCKET_",
//     },
//   })
// );
app.use(store);
app.mount("#app");
