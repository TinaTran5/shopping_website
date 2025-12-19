<script setup>
</script>

<template>
  <section class="about-wrapper">
    <div class="about-card">
      <h1>About Us</h1>

      <div class="image-container">
        <img src="/src/assets/family.jpg" alt="Family Photo" />
      </div>

      <p>
        A small Vietnamese family business built from the hard work, love, and recipes of our mom and dad.
        We’re proud to bring those same flavors to our community. Made with care,
        using ingredients we trust, and inspired by home.
      </p>
    </div>

    <div class="thank-you">
      <h3>Thank You For Supporting Us</h3>
      <p>
        Every purchase supports our family directly. It helps us grow, keeps traditions alive, and
        makes it possible for mom and dad to continue doing what they love. We’re grateful you’re here.
        Thank you.
      </p>
    </div>
  </section>
</template>

<style scoped>
.about-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  font-family: "Inter", sans-serif;
  color: white;
  text-align: center;

  h1 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  .about-card {
    margin-bottom: 2rem;

    .image-container {
      width: 350px;
      height: 200px;
      margin: 1rem auto 1.5rem;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border: 2px solid white;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    p {
      line-height: 1.6;
      font-size: 1rem;
      opacity: 0.9;
    }
  }

  .thank-you {
    h3 {
      font-size: 1.4rem;
      margin-bottom: 0.75rem;
      font-weight: 800;
    }

    p {
      line-height: 1.6;
      opacity: 0.9;
      max-width: 650px;
      margin: 0 auto;
    }
  }
}
</style>
