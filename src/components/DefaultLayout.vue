<template>
  <navbar />
  <main class="px-2 md:px-0">
    <router-view />
  </main>
</template>
<script setup>
import Navbar from "../components/Navbar.vue";
</script>
