<template>
  <div class="users">
    <h2 class="users__tittle">Список пользователей</h2>
    <Button @click="isModalOpen = true" class="users__button"
      >Пригласить пользователей
    </Button>
    <Modal v-if="isModalOpen" @close="isModalOpen = false"></Modal>
    <UserList></UserList>
  </div>
</template>
<script>
import Button from "@/components/UI/Button";
import UserList from "./UserList";
import Modal from "@/components/UI/Modal";

export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  components: {
    Button,
    UserList,
    Modal,
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
