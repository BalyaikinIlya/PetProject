<template>
  <div ref="block" class="message-list">
    <Message
      v-for="message in GetAllMessages"
      :message="message"
      class="message-list__message"
    ></Message>
  </div>
</template>
<script>
import Message from "@/components/Message";

export default {
  mounted() {
    this.scrollDown()
  },
  methods: {
    scrollDown() {
      this.$nextTick(() => {
        this.$refs.block.scrollTop = this.$refs.block.scrollHeight;
      })
    },
  },

  computed: {
    GetAllMessages() {
      return this.$store.getters.GetAllMessages;
    },
  },

  watch: {
    GetAllMessages() {
      this.scrollDown();
    }
  },

  components: {
    Message,
  },
  // Старайся не оставлять закоменченный код, если не планируешь его использовать в максимально ближайшие сроки,
  // Существует риск, что этот код будет лежать мёртвым грузом долго
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
  margin: 0;// Тут и так 0 значение, нет смысла прописывать это
  padding: 10px 40px;
  gap: 10px;

  // & > :first-child {
  //   margin-top: auto;
  // }
}
</style>
