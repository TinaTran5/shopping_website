<script setup>
</script>

<template>
  <nav class="container">
    <div class="menu">
      <img class="hamburger" src="/src/assets/menu-icon.svg" alt="hamburger"/>
    </div>
    <div>
      <router-link to="/">
        <img class="logo" src="/src/assets/logo.svg" alt="logo"/>
      </router-link>
    </div>
    <div>
      <router-link to="/cart">
       <img class="cart" src="/src/assets/cart.svg" alt="cart"/>
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

      .cart, .hamburger {
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
