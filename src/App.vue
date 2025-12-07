<script setup>
import NavBar from '@/components/NavBar.vue'
import ContactBar from '@/components/ContactBar.vue'
</script>

<template>
  <section class="container">
    <header><nav-bar/></header>
    <section class="products">
      <router-view/>
    </section>
    <footer><contact-bar/></footer>
  </section>
</template>

<style scoped>
  section.container {
    display: flex;
    flex-direction: column;
    gap: 10px;

    > * {
      border: 1px solid red;
    }

    footer {
      bottom: 0;
      width: 100%;
    }
  }
</style>
