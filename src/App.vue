<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Cursor from "./components/Cursor.vue";
</script>

<template>
  <header>
    <h1 class="logo">GRANDPIX</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
  <Cursor />
</template>

<style scoped>
header {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  padding: 10px 60px;
  height: 100px;
}
nav {
  display: flex;
  align-items: center;
  gap: 20px;
}
.logo {
  font-size: 1rem;
  font-style: italic;
}
nav a {
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
  font-weight: normal;
}
</style>
