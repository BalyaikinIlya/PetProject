<template>
  <input class="input" type="text" />
</template>
<script></script>
<style lang="scss">
.input {
  outline: none;
  border: 1px solid var(--additional-border);
  &:focus {
    border: 1px solid var(--primary-focus-color);
  }
}
</style>
