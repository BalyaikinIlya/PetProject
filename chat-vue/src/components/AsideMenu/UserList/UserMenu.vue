<template>
  <ul @click="closeMenu" @click.self="closeMenu" class="user-menu">
    <li @click="kick" class="user-menu__item">Исключить</li>
    <li class="user-menu__item">Назначить владельцем</li>
    <li class="user-menu__item">Закрыть</li>
  </ul>
</template>

<script>
export default {
  methods: {
    closeMenu() {
      this.$emit("closeMenu");
    },
    kick() {
      this.$emit("kick");
    },
  },
};
</script>

<style lang="scss">
.user-menu {
  z-index: 100;
  list-style-type: none;
  font-size: 16px;
  background: var(--primary-modal-bg-color);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom: 1px solid var(--primary-border);
  &__item {
    &:hover {
      color: var(--primary-hover-color);
      cursor: pointer;
    }
  }
}
</style>
