<script setup>
import HamburgerMenu from '@/components/HamburgerMenu.vue'
import { useCart } from '@/useCart.js'

const { cartCount } = useCart()
</script>

<template>
  <nav class="container">
    <div class="menu mobile-only">
      <HamburgerMenu/>
    </div>

    <div>
      <router-link to="/">
        <img class="logo" src="/src/assets/logo.svg" alt="logo"/>
      </router-link>
    </div>

    <div class="right-side">
      <div class="links desktop-only">
        <router-link to="/products">Products</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact Us</router-link>
      </div>

      <div class="cart-section">
        <router-link to="/cart">
          <img class="cart" src="/src/assets/cart.svg" alt="cart" />
          <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  nav.container {
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 10px 15px;
    max-height: 3em;
    border-bottom: 1px solid gray;

    .right-side {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      a {
        text-decoration: none;
        color: black;
        font-family: "Inter", sans-serif;
      }
    }

    .links {
      display: flex;
      align-items: center;
      gap: 1.2rem;
    }

    .links a {
      position: relative;
      font-weight: 600;
      transition: color 0.2s ease;
      text-transform: uppercase;
    }

    .links a:hover {
      color: #5c876d;
    }


    div {
      display: flex;
      justify-content: center;
      align-items: center;

      .logo {
        width: 150px;
        transition: .2s ease;

        &:hover {
          cursor: pointer;
          filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.1));
        }
      }

      .cart {
        width: 30px;
        height: 30px;
        transition: .2s ease;

        &:hover {
          cursor: pointer;
          transform: scale(103%);
          filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.2));
        }
      }
    }

    .mobile-only {
      display: flex;
    }
    .desktop-only {
      display: none;
    }

    /* Desktop */
    @media (min-width: 768px) {
      .mobile-only {
        display: none;
      }

      .desktop-only {
        display: flex;
        gap: 15px;
      }
    }
  }

</style>
