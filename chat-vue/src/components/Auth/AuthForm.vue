<template>
  <form
    @submit.prevent="submit"
    action=""
    class="auth-form authorization__form"
  >
    <Logo modifier="logo__inner--auth"></Logo>
    <TextInput
      v-model="name"
      required
      class="auth-form__input"
      placeholder="Введите ваше имя"
      type="text"
    />
    <TextInput
      v-model="room"
      required
      class="auth-form__input"
      placeholder="Введите номер комнаты"
      type="text"
    />

    <Button type="submit" class="auth-form__button">Войти</Button>
  </form>
</template>

<script>
import Logo from "@/components/UI/Logo.vue";
import Button from "@/components/UI/Button.vue";
import TextInput from "@/components/UI/TextInput.vue";
import { mapMutations } from "vuex";
import SocketioService from "@/services/socketio.service";
import socketioService from "@/services/socketio.service";
export default {
  data() {
    return {
      name: "",
      room: "",
    };
  },
  methods: {
    ...mapMutations(["setUser", "createMessage"]),
    submit() {
      const user = {
        name: this.name,
        room: this.room,
      };

      user.id = SocketioService.userJoined(user);
      this.setUser(user);

      const sysText = SocketioService.systemMessage();

      this.createMessage({
        text: sysText,
        system: true,
      });
      this.$router.push("/ChatRoom");
    },
  },

  components: {
    Logo,
    Button,
    TextInput,
  },
};
</script>

<style lang="scss">
@import "@/assets/mixins.scss";

.auth-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: var(--additional-bg-color);
  padding: 30px;
  border-radius: 10px;
  &__button {
    background: var(--additional-secondary-color);
    padding: 5px 40px;
    border-radius: 10px;
    &:hover {
      background: var(--primary-hover-color);
    }
  }
  &__input {
    @include desktop {
      font-size: 24px;
      border-radius: 20px;
      padding: 5px 10px;
    }
    @include mobile {
      font-size: 18px;
      border-radius: 20px;
      padding: 5px 10px;
    }
  }
}
</style>
