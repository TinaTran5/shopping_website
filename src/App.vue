<script setup>
import NavBar from '@/components/NavBar.vue'
import ContactBar from '@/components/ContactBar.vue'
</script>

<template>
  <section class="container">
    <header id="cart"><nav-bar/></header>
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

    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 999;
    }

    .products {
      margin-top: 60px;
      padding: 1rem;
    }

    footer {
      bottom: 0;
      width: 100%;
    }
  }
</style>
