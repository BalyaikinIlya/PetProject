<template>
  <section class="chat-box">
    <ChatBoxHeader></ChatBoxHeader>
  </section>
</template>
<script>
import ChatBoxHeader from "@/components/ChatBoxHeader.vue";
export default {
  components: {
    ChatBoxHeader,
  },
};
</script>
<style lang="scss">
.chat-box {
  display: flex;
  flex-direction: column;
  &__header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    border-bottom: 1px solid var(--primary-border);
  }
  &__tittle {
    font-size: 24px;
    margin: 0;
    font-weight: 400;
  }
}
</style>
