<template>
  <div ref="block" class="message-list">
    <Message
      v-for="message in GetAllMessages"
      :message="message"
      class="message-list__message"
    >
    </Message>
  </div>
</template>
<script>
import Message from "@/components/Message";

export default {
  mounted() {
    this.scrollDown();
  },
  methods: {
    scrollDown() {
      this.$nextTick(() => {
        this.$refs.block.scrollTop = this.$refs.block.scrollHeight;
      });
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
    },
  },

  components: {
    Message,
  },
};
</script>
<style lang="scss">
.message-list {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px 40px;
  gap: 10px;

  // & > :first-child {
  //   margin-top: auto;
  // }
}
</style>
