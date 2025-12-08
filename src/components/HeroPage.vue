<script setup>
</script>

<template>
  <section class="hero-page">
    <div class="left">
      <p class="tagline">Eat Good, Feel Good</p>
      <p>
        Homemade Vietnamese vegetarian treats crafted with simple ingredients.
        <br />
        Enjoy our fresh yogurt and crunchy peanut brittle made daily in small batches
      </p>
      <button>Order Now</button>
    </div>
    <div class="right">
      <img src="/src/assets/vegetarian.jpg" alt="peanut" />
    </div>
  </section>
</template>

<style scoped>
.hero-page {
  margin: 2rem;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  justify-content: center;
  font-family: "Inter", sans-serif;
  height: 400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
  0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .right {
    flex: 1;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .left {
    flex: 1;
    background-color: white;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    .tagline {
      margin: 0;
      font-size: 3rem;
      font-weight: bold;
      font-family: "Inter", sans-serif;
    }

    p {
      margin: 0;
      line-height: 1.5;
    }

    button {
      width: 10rem;
      border: none;
      cursor: pointer;
      padding: 1rem;
      border-radius: 0.5rem;
      background-color: #5c876d;
      color: white;
      transition: 0.2s;
      text-transform: uppercase;
      font-weight: bold;

      &:hover {
        background-color: #719f83;
      }
    }
  }
}

@media (max-width: 1024px) {
  .hero-page {
    margin: 1.5rem;
    height: 350px;

    .left {
      padding: 1.5rem;

      .tagline {
        font-size: 2.4rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .hero-page {
    flex-direction: column;
    height: auto;
    margin: 1rem;

    .left {
      order: 1;
      padding: 1.5rem;
      text-align: center;
      align-items: center;

      .tagline {
        font-size: 2rem;
      }

      p {
        font-size: 0.95rem;
      }

      button {
        width: 100%;
        max-width: 240px;
      }
    }

    .right {
      order: 2;
      flex: none;
      height: 220px;

      img {
        height: 100%;
      }
    }
  }
}

@media (max-width: 480px) {
  .hero-page {
    margin: 0.75rem;

    .left {
      padding: 1.25rem;

      .tagline {
        font-size: 1.7rem;
      }

      p {
        font-size: 0.9rem;
      }
    }

    .right {
      height: 180px;
    }
  }
}
</style>
