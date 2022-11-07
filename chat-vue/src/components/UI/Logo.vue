<template>
  <a class="logo" href="#">
    <img
      class="logo__inner"
      v-bind:class="modifire"
      src="@/assets/img/logo_transparent.png"
      alt="Логотип приложения"
    />
  </a>
</template>
<script>
export default {
  props: {
    modifire: {
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
    width: 100%;
    height: 100%;
    &--aside {
      width: 100px;
    }
  }
}
</style>
