<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/Register">Register</router-link> |
    <router-link to="/Complete">Complete</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  width: 100%;
  max-width: 900px;
  padding: 15px;
  margin: auto;
  text-align: center;
}
</style>
