<template>
  <div class="attach-file">
    <input
      accept="image/*,.png,.jpg,.gif,.web"
      id="file"
      class="attach-file__file-input"
      type="file"
    />
    <label class="button attach-file__button" for="file">
      <i class="fa-solid fa-paperclip attach-file__file-label"></i>
    </label>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
// Можно и нужно переписать с использованием БЭМ, то есть будет какой-то блок и в нем содержаться два этих класса
// Сейчас же у тебя получается, что file-input и file-label два разных блока, хотя их без проблем можно сделать элементами внутри одного блока
.attach-file {
  &__file-input {
    display: none;
  }
  &__file-label {
    font-size: 36px;
    color: var(--additional-secondary-color);
  }
}
</style>
