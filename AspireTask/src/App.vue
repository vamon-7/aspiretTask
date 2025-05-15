<script setup>
import SideNav from './components/SideNav.vue';
import Dashboard from './components/Dashboard.vue';
</script>

<template>
  <div class="container">
   <SideNav />
   <Dashboard />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}


.container{
  display: flex;
  overflow: hidden;
  height: 100vh;
}
</style>
