<!-- app.vue est le point d'entrée de l'application -->

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

body {
  height: 100%;
  margin: 10px;
  /* background-color: maroon; */
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: auto;
  /* background-color: aqua; */
}

header {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  max-height: 100vh;
}

a {
  text-decoration: none;
  font-style: italic;
  color: #fd2d01;
  transition: 0.4s;
}
img {
  display: block;
  margin: 0 auto 2rem;
  width: 270px;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 19px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
  /* 
  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  } */

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */

  nav {
    font-size: 23px;
  }
}
</style>
