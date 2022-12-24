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
    users: []; // неверный синтаксис здесь, смотри AsideMenu синтаксис
  },
  getters: {
    getUsers() {
      return state.users;
    },
  },
};
