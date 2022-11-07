<template>
  <ul class="user-list box-scroll__content">
    <UserListItem></UserListItem>
  </ul>
</template>
<script>
import UserListItem from "./UserListItem.vue";
export default {
  components: {
    UserListItem,
  },
};
</script>
<style lang="scss">
.user-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
}
</style>
