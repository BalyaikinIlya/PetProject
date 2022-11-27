<template>
  <main class="authorization">
    <AuthForm></AuthForm>
  </main>
</template>

<script>
import AuthForm from "@/components/Auth/AuthForm";
export default {
  components: {
    AuthForm,
  },
};
</script>

<style lang="scss">
.authorization {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
