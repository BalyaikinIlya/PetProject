<template>
  <router-view></router-view>
</template>

<script>
import socket from "@/services/socketConnection.js";
import { mapMutations } from "vuex";
export default {
  created() {
    socket.on("newMessage", (msg) => {
      console.log(msg);
      this.createMessage(msg);
    });
  },
  methods: {
    ...mapMutations(["createMessage"]),
  },
};
</script>

<style></style>
