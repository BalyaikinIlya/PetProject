<template>
  <li class="user-list-item">
    <Avatar class="user-list-item__avatar"></Avatar>
    <span class="user-list-item__name">{{ user }}</span>
    <i class="fa-solid fa-star user-list-item__owner"></i>
  </li>
</template>
<script>
import Avatar from "@/components/UI/Avatar.vue";
export default {
  components: {
    Avatar,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.user-list-item {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--primary-border);
  gap: 10px;
  padding: 5px 20px;

  &__name {
    font-size: 18px;
    &:hover {
      color: var(--primary-hover-color);
      cursor: pointer;
    }
  }
  &__owner {
    color: #bbb802;
    font-size: 20px;
  }
  &__avatar {
    width: 36px;
  }
}
</style>
