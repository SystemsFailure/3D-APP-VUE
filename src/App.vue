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

// ANIMATION SECTION



.slide-up-enter-active,
.slide-up-leave-active {
  transition: all .3s ease-out;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

// LEFT ANIM

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.15s ease-out;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>
