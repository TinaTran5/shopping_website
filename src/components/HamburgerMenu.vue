<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div>
    <img src="/src/assets/menu-icon.svg" alt="menu" class="hamburger" @click="toggleMenu" />
    <div class="overlay" v-if="isOpen" @click="toggleMenu"></div>

    <aside :class="['side-menu', { open: isOpen }]">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </aside>
  </div>
</template>

<style scoped>
.hamburger {
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: 0.2s;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9;
  transition: 0.7s;
}

.side-menu {
  position: fixed;
  top: 0;
  left: -300px; /* off screen */
  width: 250px;
  height: 100%;
  background: white;
  padding: 20px;
  transition: 0.3s ease;
  z-index: 10;
  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.2);

  &.open {
    left: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 50px;

    li {
      margin-bottom: 20px;
      font-size: 1.3em;

      a {
        text-decoration: none;
        text-transform: uppercase;
        color: #5c876d;
        font-family: "Helvetica", sans-serif;
        padding: 10px;

        &:hover {
          background-color: #5c876d;
          color: white;
        }
      }
    }
  }
}
</style>
