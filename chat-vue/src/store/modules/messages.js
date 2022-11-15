export default {
  actions: {},
  mutations: {
    createMessage(state, newMessage) {
      state.messages.push(newMessage);
    },
  },
  state: {
    messages: [
      {
        id: 0,
        text: "Пользователь 1 присоединился",
        time: "12:30",
        owner: false,
        system: true,
      },
      {
        id: 44,
        text: "Пользователь 2 присоединился",
        time: "12:30",
        owner: false,
        system: true,
      },
    ],
  },
  getters: {
    GetAllMessages(state) {
      return state.messages;
    },
  },
};
