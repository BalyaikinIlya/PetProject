<template>
  <router-view></router-view>
</template>

<script>
import SocketioService from "@/services/socketio.service";

export default {
  created() {
    SocketioService.setupSocketConnection();
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
};
</script>

<style></style>
