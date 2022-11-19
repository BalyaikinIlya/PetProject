export default {
  actions: {},
  mutations: {
    displayAsideMenu(state, visibility) {
      // Можно немного упростить эту запись, причем моя IDE советует это решение
      // state.visibility = !state.visibility;
      if (state.visibility) {
        state.visibility = false;
      } else {
        state.visibility = true;
      }
    },
  },
  state: {
    visibility: true,
  },
  getters: {
    getVisibility(state) {
      return state.visibility;
    },
  },
};
