<template>
  <main class="layout">
    <AsideMenu v-show="getVisibility" class="layout__aside-menu"></AsideMenu>
    <ChatBox class="box-scroll layout__chat-box"></ChatBox>
  </main>
</template>
<script>
import AsideMenu from "@/components/AsideMenu/AsideMenu";
import ChatBox from "@/components/ChatBox/ChatBox";
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getVisibility"]),
  components: {
    AsideMenu,
    ChatBox,
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/style.scss";

.layout {
  height: 100vh;

  @include mobile {
    display: flex;
    // &__aside-menu {
    //   display: none;
    // }
    // &__chat-box {
    //   display: none;
    // }
    &__chat-box {
      // grid-area: layout__chat-box;
      flex: 1;
      width: 100%;
    }
  }

  @include desktop {
    // grid-template-areas: "layout__aside-menu layout__chat-box";
    // grid-template-columns: 320px auto;
    display: flex;

    &__aside-menu {
      // grid-area: layout__aside-menu;
      background: var(--additional-bg-color);
      border-right: var(--primary-border);
      width: 320px;
    }

    &__chat-box {
      // grid-area: layout__chat-box;
      flex: 1;
    }
  }
}
</style>
