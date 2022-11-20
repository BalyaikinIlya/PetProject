<template>
<!-- Нет необходимости явно сравнивать c true/false, достаточно просто  v-if="messages.system" или  v-if="!messages.system"  -->
  <div v-if="message.system === true" class="message message_system">
    <p class="message__text message__text_system-join">
      {{ message.text }}
    </p>
  </div>
  <div v-else-if="message.owner === true" class="message message_owner">
    <div class="message__content message__content_owner">
      <p class="message__text">
        {{ message.text }}
      </p>
      <span class="message__time">{{ message.time }}</span>
    </div>
    <Avatar class="message__avatar message__avatar_owner"></Avatar>
  </div>
  <div v-else class="message">
    <div class="message__content message__content">
      <p class="message__text">
        {{ message.text }}
      </p>
      <span class="message__time">{{ message.time }}</span>
    </div>
    <Avatar class="message__avatar message__avatar"></Avatar>
  </div>
</template>
<script>
import Avatar from "@/components/UI/Avatar.vue";
export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  components: {
    Avatar,
  },
};
</script>
<style lang="scss">
.message {
  display: flex;
  flex-direction: column;
  gap: 5px;
  // А если с обоих сторон будет длинное сообщение, то проблем не будет?
  // То есть 60% с одной и 60% с другой
  max-width: 60%;
  align-self: flex-start;
  &_owner {
    align-self: flex-end;
    color: var(--additional-text-color);
  }
  &_system {
    align-self: center;
  }
  color: var(--primary-text-color);
  &__content {
    display: flex;
    flex-direction: column;
    padding: 5px 10px;

    background: var(--primary-to-messsage-color);
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    &_owner {
      background: var(--additional-secondary-color);
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      border-bottom-left-radius: 20px;
    }
  }
  &__avatar {
    width: 24px;
    &_owner {
      align-self: flex-end;
    }
  }
  &__time {
    font-size: 12px;
    margin-left: auto;
  }
  &__text {
    &_system {
      &-join {
        color: var(--additional-secondary-color);
      }
      &-left {
        color: var(--additional-system-message-text-color);
      }
    }
  }
}
</style>
