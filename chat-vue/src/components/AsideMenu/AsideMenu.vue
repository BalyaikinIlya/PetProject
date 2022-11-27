<template>
  <section class="aside-menu box-scroll">
    <AsideMenuHeader></AsideMenuHeader>
    <Users class="aside-menu__users"></Users>
    <AsideMenuFooter></AsideMenuFooter>
  </section>
</template>
<script>
import AsideMenuHeader from "./AsideMenuHeader";
import Users from "./UserList/Users";
import AsideMenuFooter from "./AsideMenuFooter.vue";
export default {
  components: {
    AsideMenuHeader,
    Users,
    AsideMenuFooter,
  },
};
</script>
<style lang="scss">
.aside-menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
