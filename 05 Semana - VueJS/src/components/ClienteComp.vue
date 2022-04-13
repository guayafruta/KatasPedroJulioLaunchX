<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <h2>¿Listo para realizar tu orden?</h2>

    <form action="pastel.js">
        <label for="Nombre">Nombre completo:</label>
        <input type="text" id="Nombre" name="Nombre" placeholder="Nombre">
        <br>
        <label for="Teléfono">Teléfono:</label>
        <input type="text" id="Tel" name="Tel" placeholder="Teléfono">
        <br>
        <label for="Correo">Correo:</label>
        <input type="text" id="Correo" name="Correo" placeholder="Correo">
        <br>
        <label for="Descripcion">Describe tu pastel:</label>
        <input type="text" id="Descripcion" name="Descripcion" placeholder="Descripcion">
        <br>
        <label for="Pastel">Escribe aqui tu sabor o sabores:</label>
        <input type="text" id="Pastel" name="Pastel" placeholder="Pastel">
        <br>
        <label for="Adornos">Escribe aqui tus adornos:</label>
        <input type="text" id="Adornos" name="Adornos" placeholder="Adornos">
        <br>
        <label for="Confirmación">Estoy de acuerdo con mi pedido</label>
        <input type="checkbox" id="Confirmación" name="Confirmación">
        <br>
        <br>
        <label for="Button"> </label>
        <button type="button">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ClienteForm',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
