<template>
  <main class="layout">
    <AsideMenu v-show="getVisibility" class="layout__aside-menu"></AsideMenu>
    <ChatBox class="box-scroll layout__chat-box"></ChatBox>
    <button @click="message">send</button>
  </main>
</template>
<script>
import AsideMenu from "@/components/AsideMenu";
import ChatBox from "@/components/ChatBox";
import { mapGetters } from "vuex";
import { io } from "socket.io-client";
const socket = io("localhost:3000");
export default {
  sockets: {
    connect: function () {
      console.log("socket connected");
    },
  },
  methods: {
    message() {
      this.$socket.emit("createMessage", {
        text: "from CLIENT",
      });
      // socket.emit("createMessage", {
      //   text: "from CLIENT",
      // });
    },
  },

  computed: mapGetters(["getVisibility"]),
  components: {
    AsideMenu,
    ChatBox,
  },
};
</script>
<style lang="scss">
@import "@/assets/style.scss";

.layout {
  display: grid;
  height: 100vh;

  @include mobile {
    &__aside-menu {
      display: none;
    }
    // &__chat {
    //   display: none;
    // }
  }

  @include desktop {
    // grid-template-areas: "layout__aside-menu layout__chat-box";
    // grid-template-columns: 320px auto;
    display: flex;

    &__aside-menu {
      grid-area: layout__aside-menu;
      background: var(--additional-bg-color);
      border-right: var(--primary-border);
      width: 320px;
    }

    &__chat-box {
      grid-area: layout__chat-box;
      flex: 1;
    }
  }
}
</style>
