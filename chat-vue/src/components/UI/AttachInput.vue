<template>
  <input id="file" class="file-input" type="file"/>
  <label class="button" for="file-label">
    <i class="fa-solid fa-paperclip file-label__icon"></i>
  </label>
</template>
<script></script>
<style lang="scss">
// Можно и нужно переписать с использованием БЭМ, то есть будет какой-то блок и в нем содержаться два этих класса
// Сейчас же у тебя получается, что file-input и file-label два разных блока, хотя их без проблем можно сделать элементами внутри одного блока
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
