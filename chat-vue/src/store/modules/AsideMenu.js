export default {
  actions: {},
  mutations: {
    displayAsideMenu(state) {
      // Можно немного упростить эту запись, причем моя IDE советует это решение
      // state.visibility = !state.visibility;
      state.visibility = !state.visibility;
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
