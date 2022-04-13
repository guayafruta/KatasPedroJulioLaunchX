<template>
  <div class="cliente">
    <img alt="Vue logo" src="../assets/logo.png" width="150">
    <ClienteForm msg="Haz tu pedido"/>
  </div>
</template>

<script>
import ClienteForm from '@/components/ClienteComp.vue'

export default {
  name: 'ClienteView',
  components: {
    ClienteForm
  }
}
</script>
