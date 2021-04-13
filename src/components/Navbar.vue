<template>
  <nav class="nav">
    <router-link to="/" active-class="active" exact>Home</router-link>
    <router-link to="/manifesto" active-class="active">Manifesto</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.nav {
  display: flex;
  flex-direction: column;
  width: 350px;

  a {
    text-decoration: none;
    text-align: center;
    padding: 15px;
    margin-top: 3px;
    background: #ffc8a0;
    color: white;
    transition: all 0.5s;
    &:hover{
      background: #ffb98d;
    }
  }
}

.active {
  color: green;
}
</style>