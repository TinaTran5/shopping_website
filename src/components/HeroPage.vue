<script setup>
import jsonData from '@/data/products.json'
</script>

<template>
  <div>
    <p>Eat Good<br> Feel Good</p>
    <button>Order Now</button>

    <h1>Best Sellers</h1>
    <div class="product-container">
      <div v-for="product in jsonData" :key="product.id">
        <div class="image-box">
          <img :src="product.thumbnail" :alt="product.name"/>
        </div>
        {{ product.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-container {
  display: flex;
  justify-content: space-between;
  border: 1px solid blue;

  .image-box {
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

</style>
