<script setup>
  import products from '@/data/products.json'
  import { useCart } from '@/composables/useCart'
  const { addToCart } = useCart()
</script>

<template>
  <div>
    <h1>Products</h1>
    <div class="products">
      <div v-for="product in products" :key="product.id" class="product-card">
        <h3>{{product.name}}</h3>
        <div class="image-container">
          <img :src="product.thumbnail">
        </div>
        <p>{{product.price.toFixed(2)}}</p>
        <button @click="addToCart(product)">Add To Cart</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

.products {
  display: flex;
  gap: 10px;
}

.product-card {
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  justify-content: center;
  align-items: center;

  .image-container {
    width: 200px;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
