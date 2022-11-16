<template>
  <div ref="myDiv" id="messageList" class="message-list">
    <Message
      ref="scrollDown"
      v-for="messages in GetAllMessages"
      :messages="messages"
      class="message-list__message"
    ></Message>
  </div>
</template>
<script>
import Message from "@/components/Message";
import { mapGetters, mapGetter } from "vuex";
import { nextTick, ref } from "vue";

export default {
  // computed: {
  //   allMessages() {
  //     return this.$store.getters.GetAllMessages;
  //   },
  // },
  methods: {
    async scrollDown() {
      await nextTick();
      let block = document.getElementById("messageList");
      block.scrollTop = block.scrollHeight;
    },
  },
  computed: mapGetters(["GetAllMessages"]),

  components: {
    Message,
  },
  // data() {
  //   return {
  //     messages: [
  //       {
  //         id: 0,
  //         text: "Пользователь 1 присоединился",
  //         time: "12:30",
  //         owner: false,
  //         system: true,
  //       },
  //       {
  //         id: 44,
  //         text: "Пользователь 2 присоединился",
  //         time: "12:30",
  //         owner: false,
  //         system: true,
  //       },

  //       {
  //         id: 1,
  //         text: "Привет как дела?",
  //         time: "12:32",
  //         owner: true,
  //         system: false,
  //       },
  //       {
  //         id: 2,
  //         text: "Привет, отлично. У тебя как?",
  //         time: "12:33",
  //         owner: false,
  //         system: false,
  //       },
  //       {
  //         id: 3,
  //         text: "Я вчера ходил в кино, мне очень понравилось",
  //         time: "12:34",
  //         owner: true,
  //         system: false,
  //       },
  //       {
  //         id: 4,
  //         text: "Круто, что за кино?",
  //         time: "12:34",
  //         owner: false,
  //         system: false,
  //       },
  //     ],
  //   };
  // },
};
</script>
<style lang="scss">
.message-list {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0;
  padding: 10px 40px;
  gap: 10px;

  // & > :first-child {
  //   margin-top: auto;
  // }
}
</style>
