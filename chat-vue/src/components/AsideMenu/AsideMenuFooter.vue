<template>
  <footer class="aside-menu-footer">
    <Button @click="exit" class="aside-menu-footer__button"
      >Покинуть чат</Button
    >
  </footer>
</template>
<script>
import Button from "@/components/UI/Button.vue";
import { mapMutations } from "vuex";
import socket from "@/services/socketConnection.js";
export default {
  methods: {
    ...mapMutations(["clearData"]),
    exit() {
      socket.emit("userLeft", this.$store.state.user.user.userId, () => {
        this.$router.push("/");
        this.clearData();
      });
    },
  },
  components: {
    Button,
  },
};
</script>
<style lang="scss">
.aside-menu-footer {
  padding: 10px 10px;
  display: flex;
  text-align: center;
  &__button {
    color: var(--additional-text-color);
    width: 100%;
    margin-left: auto;
    background: var(--primary-exit-btn-color);
    font-size: 18px;
    padding: 10px 60px;
    &:hover {
      background: var(--hover-exit-btn-color);
    }
  }
}
</style>
