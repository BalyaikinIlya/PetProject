<template>
  <a class="logo" href="#">
    <img
      class="logo__inner"
      src="@/assets/img/logo_transparent.png"
      alt="Логотип приложения"
    />
  </a>
</template>
<script>
export default {
  props: {
    aside: {
      type: String,
      default() {
        return "";
      },
    },
    auth: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>
<style lang="scss">
.logo {
  &__inner {
    &--aside {
      width: 100px;
    }
  }
}
</style>
