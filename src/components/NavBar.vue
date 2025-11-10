<script setup>
</script>

<template>
  <nav class="container">
    <div class="menu">
      <img class="hamburger" src="/src/assets/menu-icon.svg" alt="hamburger"/>
    </div>
    <div class="logo">LOGO</div>
    <div class="cart">
      <img class="cart" src="/src/assets/cart.svg" alt="cart"/>
    </div>
  </nav>
</template>

<style scoped>
  nav.container {
    display: flex;
    justify-content: space-between;
    background-color: gray;
    padding: 10px;
    max-height: 3em;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 30px;
        height: 30px;
        transition: .1s;

        &:hover {
          cursor: pointer;
          transform: scale(1.1);
          filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.4));
        }
      }
    }



    div.logo {
      height: 50px;
      width: 100px;
      background-color: black;
      color: white;
    }

    @media (width > 768px) {
      flex-direction: row;
    }
  }

</style>
