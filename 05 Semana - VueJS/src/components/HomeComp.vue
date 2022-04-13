<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Menú de Pasteles:</h2>

    <p>PasteLazo de Chocolate 👉 200$</p>
    <p>PasteLazo de Vainilla  👉 200$</p>
    <p>PasteLazo de Fresa     👉 200$</p>
    <p>PasteLazo de Gansito   👉 220$</p>
    <p>PasteLazo de Mazapan   👉 250$</p>
    <p>PasteLazo de Rompope   👉 300$</p>
    <p>PasteLazo al gusto     👉 350$</p>
    <br>

    <h2>Menú de Adornos:</h2>

    <p>Velas normales      👉 30$</p>
    <p>Impresion especial  👉 100$</p>
    <p>Vela chispas        👉 50$</p>
    <p>Estatuas comestibles👉 120$</p>

  </div>
</template>

<script>
export default {
  name: 'HomeForm',
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
