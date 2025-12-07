<script setup>
import { useCart } from '@/composables/useCart'
const { cart, cartTotal, removeFromCart, setQuantity, clearCart } = useCart()
</script>

<template>
  <div class="shopping-cart">
    <h1>Your Cart</h1>
    <p v-if="cart.length === 0">Your cart is empty</p>
    <div v-else class="container">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <div class="item-container">
          <div class="image">
            <img :src="item.thumbnail" :alt="item.name" />
          </div>
          <div class="item-desc">
            <div class="desc">
              <h3>{{item.name}}</h3>
              <p>{{item.description}}</p>
              <p>QTY: {{item.qty}}</p>
            </div>
            <div class="price">
              <h3>Price</h3>
              <p>${{item.price.toFixed(2)}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <button>Check Out</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  color: white;
}
.container {
  display: flex;
  border: 1px solid orange;
  justify-content: center;
  gap: 10px;

  .right {
    display: flex;
    align-items: center;

    button {
      border: none;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      background-color: white;
    }
  }

}
.shopping-cart {
  padding: 10px;
  display: flex;
  flex-direction: column;

  .item-container {
    background-color: white;
    padding: 10px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .image {
      width: 250px;
      height: 250px;
      img {
        width: 100%;
        object-fit: cover;
      }
    }

    .item-desc {
      width: 50%;
      display: flex;
      justify-content: space-between;
      background-color: white;
      h3 {
        margin: 0;
      }

      p {
        margin: 10px 0;
      }

      .price {
        border: 1px solid orange;
        padding: 10px;
      }
      .desc {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        border: 1px solid red;


      }
    }
  }
}


</style>
