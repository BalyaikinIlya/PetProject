<template>
  <main class="layout">
    <AsideMenu class="layout__aside-menu"></AsideMenu>
    <ChatBox class="box-scroll layout__chat-box"></ChatBox>
  </main>
</template>
<script>
import AsideMenu from "@/components/AsideMenu";
import ChatBox from "@/components/ChatBox";
export default {
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
    grid-template-areas: "layout__aside-menu layout__chat-box";
    grid-template-columns: 320px 1fr;

    &__aside-menu {
      grid-area: layout__aside-menu;
      background: var(--additional-bg-color);
      border-right: var(--primary-border);
    }

    &__chat-box {
      grid-area: layout__chat-box;
    }
  }
}
</style>
