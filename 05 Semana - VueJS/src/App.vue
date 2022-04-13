
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/cliente">Cliente</router-link> |
    <router-link to="/pastelero">Pastelero</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 25px;
}

nav a.router-link-exact-active {
  color: #ff66c4;
}

body{
  background-color: #fff6f4;
}
</style>
