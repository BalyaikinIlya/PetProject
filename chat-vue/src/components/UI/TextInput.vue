<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>
<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style lang="scss">
.input {
  outline: none;
  border: 1px solid var(--additional-border);
  &:focus {
    border: 1px solid var(--primary-focus-color);
  }
}
</style>
