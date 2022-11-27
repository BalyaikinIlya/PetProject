import Auth from "@/pages/Auth";
import ChatRoom from "@/pages/ChatRoom";
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: Auth,
    name: "Home",
  },
  {
    path: "/ChatRoom",
    component: ChatRoom,
    name: "ChatRoom",
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
