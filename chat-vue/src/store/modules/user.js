export default {
  action: {},
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearData(state) {
      state.user = {};
    },
  },
  state() {
    user: {
    }
  },
  getters: {
    getRoom() {
      return state.user.room;
    },
  },
};
