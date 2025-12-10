<script setup>
import products from '@/data/products.json'
import { useCart } from '@/useCart.js'

const { addToCart } = useCart()
</script>

<template>
  <div class="products-page">
    <h1>Our Products</h1>

    <div class="products-grid">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
      >
        <h3 class="product-name">{{ product.name }}</h3>
        <div class="image-container">
          <img :src="product.thumbnail" :alt="product.name" />
        </div>
        <p class="product-price">${{ product.price.toFixed(2) }}</p>
        <button
          class="add-to-cart"
          @click="addToCart(product)"
        >
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.products-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;

  h1 {
    font-size: 1.75rem;
    text-align: center;
    margin-bottom: 2rem;
    color: white;
    font-family: "Inter", sans-serif;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  /* Card */
  .product-card {
    background: white;
    border-radius: 0.75rem;
    padding: 1rem 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: "Inter", sans-serif;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
    transition: transform 0.15s ease, box-shadow 0.15s ease;

    &:hover {
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
    }

    .image-container {
      width: 200px;
      height: 200px;
      border-radius: 0.75rem;
      overflow: hidden;
      margin-bottom: 0.75rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
      }
    }
  }

  .product-name {
    margin: 0.5rem 0 0.25rem;
    font-size: 1.05rem;
    font-weight: 600;
  }

  .product-price {
    margin: 0 0 0.75rem;
    font-size: 0.95rem;
    font-weight: 500;
    color: #5c876d;
  }

  .add-to-cart {
    border: none;
    cursor: pointer;
    padding: 0.6rem 1.2rem;
    border-radius: 999px;
    background-color: #5c876d;
    color: #ffffff;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    transition: background-color 0.15s ease, transform 0.1s ease;

    &:hover {
      background-color: #719f83;
    }
  }
}
/* Small screens */
@media (max-width: 480px) {
  .image-container {
    width: 160px;
    height: 160px;
  }

  .product-card {
    padding: 0.85rem 0.85rem 1.1rem;
  }
}
</style>
