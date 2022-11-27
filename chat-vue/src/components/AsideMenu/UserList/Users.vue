<template>
  <div class="users">
    <h2 class="users__tittle">Список пользователей</h2>
    <Button class="users__button">Пригласить пользователей </Button>
    <UserList></UserList>
  </div>
</template>
<script>
import Button from "@/components/UI/Button";
import UserList from "./UserList";

export default {
  components: {
    Button,
    UserList,
  },
};
</script>
<style lang="scss">
.users {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;

  list-style: none;
  &__tittle {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
    align-self: center;
  }
  &__button {
    color: var(--additional-secondary-color);
    font-size: 20px;
    align-self: center;
    width: 100%;
    &:hover {
      color: var(--primary-hover-color);
    }
  }
}
</style>
