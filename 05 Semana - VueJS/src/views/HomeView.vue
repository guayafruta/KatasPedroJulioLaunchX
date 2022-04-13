<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="150">
    <HomeForm msg="Bienvenido a pastelerías pastelazo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeForm from '@/components/HomeComp.vue'

export default {
  name: 'HomeView',
  components: {
    HomeForm
  }
}
</script>
