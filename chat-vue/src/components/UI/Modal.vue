<template>
  <div @click.self="close" class="modal">
    <div class="modal-inner">
      <span class="modal__span">localhost:8081/#/?room={{ room }}</span>
      <button @click="copyLink" class="modal__button">Скопировать</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    close() {
      this.$emit("close");
    },
    copyLink() {
      const text = document.querySelector(".modal__span");
      console.log(document.querySelector(".modal__span"));
      navigator.clipboard.writeText(text.innerHTML);
    },
  },
  computed: {
    ...mapState({
      room: (state) => state.user.user.room,
    }),
  },
};
</script>

<style lang="scss">
.modal {
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: var(--primary-modal-bg-color);
  display: flex;
  flex-direction: column;
  &-inner {
    background: var(--additional-secondary-color);
    padding: 10px 10px;
    border-radius: 20px;
    color: var(--additional-text-color);
  }
  &__button {
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    color: var(--additional-text-color);
    border-radius: 20px;
    font-size: 20px;
    &:hover {
      color: var(--primary-text-color);
    }
  }
  &__span {
    color: #000;
    font-size: 20px;
    border-radius: 20px;
    outline: none;
    border: none;
    padding: 0 10px;
    background: #fff;
  }
}
</style>
