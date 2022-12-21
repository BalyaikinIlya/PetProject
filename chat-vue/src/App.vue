<template>
  <router-view></router-view>
</template>

<script>
import socket from "@/services/socketConnection.js";
import { mapMutations } from "vuex";
export default {
  created() {
    socket.on("newMessage", (msg) => {
      // console.log(msg);
      this.createMessage(msg);
    });
    socket.on("updateUsers", (usr) => {
      // console.log(usr);
      this.updateUsers(usr);
    });
  },

  methods: {
    ...mapMutations(["createMessage", "updateUsers"]),
  },
};
</script>

<style></style>
