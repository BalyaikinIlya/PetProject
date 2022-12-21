<template>
  <!-- src="@/assets/img/avatar1.jpg" -->
  <img
    :src="avatarUrl"
    alt="User Avatar"
    class="avatar"
    width="36"
    height="36"
  />
</template>
<script>
export default {
  props: {
    userAvatar: {
      type: Number,
      required: true,
    },
  },
  computed: {
    avatarUrl() {
      return require(`@/assets/img/${this.userAvatar}.png`);
    },
  },
};
</script>
<style lang="scss">
.avatar {
  border-radius: 50%;
  object-fit: contain;
}
</style>
