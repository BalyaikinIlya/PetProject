<template>
  <main class="layout">
    <AsideMenu
      @click="send"
      v-show="getVisibility"
      class="layout__aside-menu"
    ></AsideMenu>
    <ChatBox class="box-scroll layout__chat-box"></ChatBox>
  </main>
</template>
<script>
import AsideMenu from "@/components/AsideMenu";
import ChatBox from "@/components/ChatBox";
// import { io } from "socket.io-client";

// Unused import specifier mapGetter. тут как раз пригодился бы Eslint
import { mapGetters } from "vuex";

// const socket = io("http://localhost:3000");

export default {
  // sockets: {
  //   connect: function () {
  //     console.log("socket connected");
  //   },
  // },
  //   // mounted() {
  //   //   socket.on("connect", () => {
  //   //     console.log("connected", socket.id); // x8WIv7-mJelg7on_ALbx
  //   //   });

  //   //   socket.on("chat message", function (msg) {
  //   //     console.info("incoming", msg);
  //   //   });
  //   },

  // methods: {
  //   send() {
  //     const msg = `hello ${Math.random()}`;
  //     socket.emit("chat message", msg);

  //     console.info("sent", msg);
  //   },
  // },
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
