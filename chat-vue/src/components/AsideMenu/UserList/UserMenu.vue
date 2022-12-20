<template>
  <ul @click="closeMenu" @click.self="closeMenu" class="user-menu">
    <li class="user-menu__item">Исключить</li>
    <li class="user-menu__item">Назначить владельцем</li>
  </ul>
</template>

<script>
export default {
  methods: {
    closeMenu() {
      this.$emit("closeMenu");
    },
  },
};
</script>

<style lang="scss">
.user-menu {
  z-index: 100;
  list-style-type: none;
  font-size: 18px;
  background: var(--primary-modal-bg-color);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 3px 15px;
  border-bottom: 1px solid var(--primary-border);
  &__item {
    &:hover {
      color: var(--primary-hover-color);
      cursor: pointer;
    }
  }
}
</style>
