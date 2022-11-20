<template>
  <section class="chat-box box-scroll">
    <ChatBoxHeader></ChatBoxHeader>
    <MessageList ref="block" class="box-scroll__content"></MessageList>
    <ChatBoxForm></ChatBoxForm>
  </section>
</template>
<script>
import MessageList from "@/components/MessageList";
import ChatBoxHeader from "@/components/ChatBoxHeader";
import ChatBoxForm from "@/components/ChatBoxForm";
import { mapState } from "vuex";

export default {
  components: {
    ChatBoxHeader,
    MessageList,
    ChatBoxForm,
  },
  computed: mapState(["messages"]),
  watch: {
    messages() {
      this.$refs.block.scrollTop = this.$refs.block.scrollHeight;
      alert("Я чмо");
    },
  },
};
</script>
<style lang="scss">
.chat-box {
  display: flex;
  flex-direction: column;
}
</style>
