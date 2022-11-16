import { createStore } from "vuex";
import messages from "./modules/messages";
import AsideMenu from "./modules/AsideMenu";

const store = createStore({
  modules: {
    messages,
    AsideMenu,
  },
});

export default store;
