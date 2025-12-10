<script setup>
import { ref } from 'vue'
import products from '/src/data/products.json'
import { useCart } from '@/useCart.js'
const { addToCart } = useCart()

// bestSeller: True
const bestSellers = products.filter((p) => p.bestSeller)

const recentlyAddedId = ref(null)
// add to cart and added animation
function handleAddToCart(product) {
  addToCart(product) // add product to cart
  recentlyAddedId.value = product.id

  setTimeout(() => {
    if (recentlyAddedId.value === product.id) {
      recentlyAddedId.value = null
    }
  }, 800) // 8 secs of animation
}
</script>

<template>
  <section class="best-sellers">
    <h1 class="title">Our Best Sellers</h1>

    <div class="product-row">
      <div class="product-card" v-for="product in bestSellers" :key="product.id">

        <div class="image-box">
          <img :src="product.thumbnail" :alt="product.name" />
        </div>

        <p class="name"><strong>{{ product.name }}</strong></p>
<!--                <p class="description">{{product.description}}</p>-->
        <p class="price">${{ product.price.toFixed(2) }}</p>

        <!-- change text when added -->
        <button class="add-btn" :class="{ added: recentlyAddedId === product.id }"
        @click="handleAddToCart(product)"
        >
          {{ recentlyAddedId === product.id ? 'Added!' : 'Add to Cart' }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.best-sellers {
  padding: 1.5rem;
  font-family: 'Inter', sans-serif;


  .title {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: white;
  }

  .product-row {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .product-card {
    border: 5px solid white;
    width: 250px;
    background-color: white;
    border-radius: 0.75rem;
    overflow: hidden;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);

    p {
      margin: 10px 0;
    }

    .price {
      color: #5c876d;
    }


    .add-btn {
      padding: 0.4rem 1rem;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 600;
      background-color: #5c876d;
      color: white;
      transition: background-color 0.2s ease,
      transform 0.15s ease,
      box-shadow 0.15s ease;

      &.added {
        background-color: #7cb191;
        transform: scale(1.08);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
      }

      &:hover {
        background-color: #719f83;
      }
    }

    .image-box {
      background-color: #f2e8cf;
      width: 100%;
      aspect-ratio: 1 / 1;
      overflow: hidden;
      position: relative;
      cursor: pointer;

      &:hover img {
        transform: scale(1.05);
        filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: 0.4s ease;
      }


    }
  }
}
@media (max-width: 600px) {
  .product-row {
    flex-direction: column;
    align-items: center;
  }
}
</style>
