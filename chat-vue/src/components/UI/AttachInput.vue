<template>
  <input id="file" class="file-input" type="file" />
  <label class="button" for="file-label">
    <i class="fa-solid fa-paperclip file-label__icon"></i>
  </label>
</template>
<script></script>
<style lang="scss">
.file-input {
  display: none;
}
.file-label {
  &__icon {
    font-size: 36px;
    color: var(--additional-secondary-color);
  }
}
</style>
