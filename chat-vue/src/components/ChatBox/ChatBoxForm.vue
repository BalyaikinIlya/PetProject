<template>
  <form @submit.prevent="sendMessage" class="chatbox-footer__form send-form">
    <TextInput
      v-model="text"
      placeholder="Начните набирать сообщение"
      class="send-form__text-input"
    ></TextInput>
    <AttachInput ref="file" @change="handleChange($event)"></AttachInput>
    <Button type="submit">
      <i class="fa-solid fa-paper-plane send-form__button-icon"></i>
    </Button>
  </form>
</template>
<script>
import Button from "@/components/UI/Button";
import AttachInput from "@/components/UI/AttachInput";
import TextInput from "@/components/UI/TextInput";
import socket from "@/services/socketConnection.js";
import { uuidv4 } from "@/guid";
export default {
  setup() {},
  data() {
    return {
      text: "",
      fileUrl: "",
    };
  },
  methods: {
    handleChange(e) {
      console.log(URL.createObjectURL(e.target.files[0]));
      this.fileUrl = URL.createObjectURL(e.target.files[0]);
    },
    sendMessage() {
      const users = this.$store.state.users.users;
      users.forEach((element) => {
        if (element.userId === this.$store.state.user.user.userId) {
          this.$store.state.user.user.avatar = element.avatar;

          socket.emit("newMessage", {
            id: uuidv4(),
            messageId: this.$store.state.user.user.userId,
            text: this.text,
            fileUrl: this.fileUrl,
            messageAvatar: element.avatar,
            system: false,
          });
        }
      });
      this.fileUrl = "";
      this.text = "";
    },
  },
  components: {
    Button,
    AttachInput,
    TextInput,
  },
};
</script>
<style lang="scss">
@import "@/assets/mixins.scss";

.send-form {
  padding: 10px 20px;
  border-top: 1px solid var(--primary-border);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 36px;

  &__text-input {
    width: 100%;
    flex: 1 1 auto;
    border-radius: 20px;
  }

  &__button-icon {
    color: var(--additional-secondary-color);
    font-size: 36px;
  }

  @include desktop {
    // Тут нет смысла писать .send-form { поскольку ты и так внутри send-form

    .send-form {
      &__text-input {
        font-size: 16px;
        padding: 10px 10px;
      }
    }
  }

  @include mobile {
    .send-form {
      &__text-input {
        font-size: 12px;
        padding: 5px 5px;
      }
    }
  }
}
</style>
