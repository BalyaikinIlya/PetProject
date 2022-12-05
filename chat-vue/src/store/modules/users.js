export default {
  action: {},
  mutations: {
    updateUsers(state, users) {
      state.users = users;
    },
    clearData(state) {
      state.users = [];
    },
  },
  state() {
    users: [];
  },
  getters: {
    getUsers() {
      return state.users;
    },
  },
};
