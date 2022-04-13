<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
        <h2>Pedidos:</h2>

    <table>
        <tr>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Correo</th>
          <th>Descripcion</th>
          <th>Sabor</th>
          <th>Adornos</th>
        </tr>
      </table>

    <h2>Inventario de materia:</h2>

    <table>
        <tr>
          <th>Material</th>
          <th>Cantidad</th>
        </tr>
        <tr>
          <td>Chocolate</td>
          <td>1kg</td>
        </tr>
        <tr>
          <td>Vainilla</td>
          <td>2kg</td>
        </tr>
        <tr>
            <td>Fresa</td>
            <td>2kg</td>
        </tr>
        <tr>
            <td>Gansito</td>
            <td>1kg</td>
        </tr>
        <tr>
            <td>Mazapan</td>
            <td>1kg</td>
        </tr>
        <tr>
            <td>Rompope</td>
            <td>1kg</td>
        </tr>
        <tr>
            <td>Velas normales</td>
            <td>22pz</td>
        </tr>
        <tr>
            <td>Tinta impresion</td>
            <td>22pz</td>
        </tr>
        <tr>
            <td>Vela chispas</td>
            <td>11pz</td>
        </tr>
        <tr>
            <td>Estatuas</td>
            <td>10pz</td>
        </tr>
      </table>
  </div>
</template>

<script>
export default {
  name: 'PasteleroForm',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component o1nly -->
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
