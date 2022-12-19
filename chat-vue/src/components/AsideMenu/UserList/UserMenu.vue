<template>
  <ul @click.self="close" class="user-menu">
    <li class="user-menu__item">Исключить</li>
    <li class="user-menu__item">Назначить владельцем</li>
  </ul>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
.user-menu {
  list-style-type: none;
  font-size: 18px;
  background: var(--primary-modal-bg-color);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 3px 10px;
  border-bottom: 1px solid var(--primary-border);
  &__item {
    &:hover {
      color: var(--primary-hover-color);
      cursor: pointer;
    }
  }
}
</style>
