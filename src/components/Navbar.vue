<template>
  <nav class="nav">
    <router-link to="/" active-class="active" exact>Home</router-link>
    <router-link to="/manifesto" active-class="active">Manifesto</router-link>
    <router-link to="/scrum" active-class="active">Scrum</router-link>
    <router-link to="/risks" active-class="active">Risks</router-link>
    <router-link to="/stories-rus" active-class="active">User Stories</router-link>
    <router-link to="/wiki" active-class="active">Wiki</router-link>
    <router-link to="/progress" active-class="active">Progress</router-link>
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
  min-width: 350px;
  margin-right: 5px;
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