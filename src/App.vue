<template>
  <router-view/>
</template>

<style lang="scss">

:root {
    --index: calc(1vw + 1vh);
    --transition: 1.5s cubic-bezier(.05, 0,5, 0.0, 1.0);
}



@font-face {
    font-family: kameric-3d;
    src: url(./fonts/kamerik205-heavy.woff2);
    font-weight: 900;
}

@font-face {
    font-family: merriweather-italic-3d;
    src: url(./fonts/merriweather-regular-italic.woff2);
}

body {
    background-color: black;
    color: white;
    font-family: kameric-3d;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

</style>
