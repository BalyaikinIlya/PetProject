import { createStore } from "vuex";
import messages from "./modules/messages";
import AsideMenu from "./modules/AsideMenu";
import user from "./modules/user";

const store = createStore({
  modules: {
    messages,
    AsideMenu,
    user,
  },
});

export default store;
