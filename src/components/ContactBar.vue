<script setup></script>

<template>
  <div class="container">
    <div class="location">
      <p>11056 Cedar Lk Rd S, Minnetonka, MN 55305</p>
    </div>
    <div class="phone">123-234-456</div>
    <div class="hours">
      <div>Sun: Closed</div>
      <div>Mon - Sat: 10:00am - 8:00pm</div>
    </div>
    <div class="line"></div>
    <p>&copy; 2025 All rights reserved</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  gap: 15px;

  div.line {
    width: 100%;
    border-bottom: 1px solid black;
  }
  div.hours {
    display: flex;
    flex-direction: column;

  }
}
</style>
