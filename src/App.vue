<template>
  <div id="app">
    <div class="app">
      <div id="nav">
        <router-link to="/">Portfolio</router-link> |
        <router-link to="/ticker">Ticker</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
/** Global **/
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

#nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(255, 255, 255, 0.9);
}

a {
  text-decoration: none;
  color: inherit;
  transition: color .2s ease-in;
}

/** App **/
.app {
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
