<template>
  <router-view></router-view>
</template>

<script>
import SocketioService from "@/services/socketio.service";
import { mapMutations } from 'vuex';

export default {
  created() {
    SocketioService.setupSocketConnection();

    SocketioService.onSystemMessage = (message) => {
      this.createMessage(message);
    }
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
  methods: {
    ...mapMutations(["createMessage"]),
  },
};
</script>

<style></style>
