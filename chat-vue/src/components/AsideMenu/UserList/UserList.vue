<template>
  <ul class="user-list box-scroll__content">
    <UserListItem
      v-for="user in getUsers"
      :key="user.id"
      :user="user"
    ></UserListItem>
  </ul>
</template>
<script>
import UserListItem from "./UserListItem.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    UserListItem,
  },
  computed: {
    getUsers() {
      return this.$store.state.users.users;
    },
  },
};
</script>
<style lang="scss">
.user-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  // По БЭМу не стоит задавать блоку внешнюю геоматрию, внешние отступы и тп
  // https://ru.bem.info/methodology/quick-start/#%D0%B1%D0%BB%D0%BE%D0%BA
  margin: 0;
  padding: 0;
}
</style>
