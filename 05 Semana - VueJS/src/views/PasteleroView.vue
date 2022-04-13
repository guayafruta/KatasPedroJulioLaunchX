<template>
  <div class="pastelero">
    <img alt="Vue logo" src="../assets/logo.png" width="150">
    <PasteleroForm msg="Bienvenido pastelero"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PasteleroForm from '@/components/PasteleroComp.vue'

export default {
  name: 'PasteleroView',
  components: {
    PasteleroForm
  }
}
</script>
