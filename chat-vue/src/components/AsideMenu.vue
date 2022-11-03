<template>
  <section class="aside-menu box-scroll">
    <AsideMenuHeader></AsideMenuHeader>
    <Users class="aside-menu__users box-scroll__content"></Users>
  </section>
</template>
<script>
import AsideMenuHeader from "./AsideMenuHeader";
import Users from "./Users";
export default {
  components: {
    AsideMenuHeader,
    Users,
  },
};
</script>
<style lang="scss">
.aside-menu {
  display: flex;
  flex-direction: column;
}
</style>
