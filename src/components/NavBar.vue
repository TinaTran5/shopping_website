<script setup>
import HamburgerMenu from '@/components/HamburgerMenu.vue'
import { useCart } from '@/composables/useCart'

const { cartCount } = useCart()
</script>

<template>
  <nav class="container">
    <div class="menu">
      <HamburgerMenu/>
    </div>
    <div>
      <router-link to="/">
        <img class="logo" src="/src/assets/logo.svg" alt="logo"/>
      </router-link>
    </div>
    <div>
      <router-link to="/cart">
       <img class="cart" src="/src/assets/cart.svg" alt="cart"/>
        <span v-if="cartCount > 0" class="cart-badge">
          {{cartCount}}
        </span>
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
  nav.container {
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 10px;
    max-height: 3em;
    border-bottom: 1px solid gray;

    a {
      text-decoration: none;
      font-family: Arial black, sans-serif;
      color: black;
      transition-duration: 0.2s;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      .logo {
        width: 125px;
        transition: .1s;

        &:hover {
          cursor: pointer;
          transform: scale(103%);
          filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.1));
        }
      }

      .cart {
        width: 30px;
        height: 30px;
        transition: .1s;

        &:hover {
          cursor: pointer;
          transform: scale(103%);
          filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.2));
        }
      }
    }

    @media (width > 768px) {
      flex-direction: row;
    }
  }

</style>
