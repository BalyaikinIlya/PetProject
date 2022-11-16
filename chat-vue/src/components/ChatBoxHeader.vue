<template>
  <header class="chatbox-header">
    <Button @click="displayAside">
      <i class="fa-solid fa-bars chatbox-header__menu-button"></i>
    </Button>

    <h2 class="chatbox-header__tittle">Чат комнаты №1</h2>
  </header>
</template>
<script>
import Button from "@/components/UI/Button";
import { mapMutations } from "vuex";

export default {
  components: {
    Button,
  },
  methods: {
    ...mapMutations(["displayAsideMenu"]),
    displayAside() {
      this.displayAsideMenu();
    },
  },
};
</script>
<style lang="scss">
.chatbox-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-bottom: 1px solid var(--primary-border);
  &__menu-button {
    font-size: 26px;
  }
  &__tittle {
    font-size: 24px;
    margin: 0;
    font-weight: 400;
  }
}
</style>
