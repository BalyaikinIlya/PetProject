import { createStore } from "vuex";
import messages from "./modules/messages";
import AsideMenu from "./modules/AsideMenu";
import user from "./modules/user";
import users from "./modules/users";
const store = createStore({
  modules: {
    messages,
    AsideMenu,
    user,
    users,
  },
});

export default store;
