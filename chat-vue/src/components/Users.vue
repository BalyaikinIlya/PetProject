<template class="users">
  <h2 class="users__tittle">Список пользователей</h2>
  <Button class="users__button">Пригласить пользователей</Button>
  <UserList></UserList>
</template>
<script>
import Button from "./UI/Button";
import UserList from "./UserList";
export default {
  components: {
    Button,
    UserList,
  },
};
</script>
<style lang="scss">
// Во vue класс не биндится к template поскольку он не рендерится
// https://stackoverflow.com/questions/66705983/how-add-class-to-template-tag-in-vue
// То есть сейчас твои классы просто не применяются
.users {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
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
