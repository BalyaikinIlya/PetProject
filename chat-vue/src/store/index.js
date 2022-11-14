import { createStore } from "vuex";
import messages from "./modules/messages";

const store = createStore({
  modules: {
    messages,
  },
});

export default store;
