<template>
  <div class="form">
    <label for="user">Usuário</label>
    <input type="text" id="user" placeholder="Usuário">
    <label for="psswd">Senha:</label>
    <input type="password" id="psswd" placeholder="Senha">
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped >
.form{
  margin: 50px;
}
</style>