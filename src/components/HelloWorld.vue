<template>
  <section>
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
section {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
h1 {
  margin: 10px auto;
  color: #42b983;
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
#hello {
  vertical-align: middle;
}
</style>
