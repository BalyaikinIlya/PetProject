export default {
  action: {},
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  state() {
    return {
      user: {},
    };
  },
  getters: {
    getRoom() {
      return state.user.room;
    },
  },
};
