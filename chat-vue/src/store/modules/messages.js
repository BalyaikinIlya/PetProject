import { uuidv4 } from "@/guid";

export default {
  actions: {
    SOCKET_newMessage(ctx, data) {
      console.log("hello", data);
    },
  },
  mutations: {
    createMessage(state, newMessage) {
      state.messages = [...state.messages, newMessage];
    },
  },
  state: {
    messages: [
      {
        /*
         Использовать 0 в качестве id и любого другого индивидуального признака сущности не лучшая идея, лучше начинать с 1. Вот одна из причин:
         Зачастую используются проверка на отсутствие сообщения, по типу if(!message?.id),
         Если сообщение имеет id = 0, то проверка будет некорректной.
        */
        id: uuidv4(),
        text: "Пользователь 1 присоединился",
        // Лучше дату в соответствующем формате (new Date('......')), или какую-нибудь библиотеку, по желанию
        // Как минимум, со временем в виде строки ты ничего не сможешь сделать. К примеру, ты захочешь чтобы для сообщений которые написаны меньше минуты назад
        // конкретное время менялось на 'less minute ago' или что-то вроде того, в текущем варианте это будет довольно проблематично сделать
        // Ну и вообще, для даты есть свой тип данных, надо его использовать
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
        time: "12:30",
        owner: false,
        system: true,
      },
      {
        id: uuidv4(),
        text: "Пользователь 2 присоединился",
        time: "12:30",
        owner: false,
        // Я бы советовал добавить поле type, которое представляет собой enum и в нем будут типы сообщений
        // 'system', 'text' и тп. Сейчас у тебя два типа, но если добавится еще один тип, то тебе будет достаточно просто обновить enum-ку
        // Соответственно в Message.vue вместо текущих проверок можно будет написать что-то вроде
        //  v-if="messages.type === MessageType.Text"
        //  v-if="messages.type === MessageType.System"
        system: true,
      },

      {
        id: uuidv4(),
        text: "Привет как дела?",
        time: "12:32",
        owner: true,
        system: false,
      },
      {
        id: uuidv4(),
        text: "Привет, отлично. У тебя как?",
        time: "12:33",
        owner: false,
        system: false,
      },
      {
        id: uuidv4(),
        text: "Я вчера ходил в кино, мне очень понравилось",
        time: "12:34",
        owner: true,
        system: false,
      },
      {
        id: uuidv4(),
        text: "Круто, что за кино?",
        time: "12:34",
        owner: false,
        system: false,
      },
    ],
  },
  getters: {
    GetAllMessages(state) {
      return state.messages;
    },
  },
};
