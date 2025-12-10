<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

function handleSubmit() {
  console.log({
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  })

  alert('Thank you! Your message has been sent.')

  name.value = ''
  email.value = ''
  subject.value = ''
  message.value = ''
}
</script>

<template>
  <section class="contact-page">
    <div class="contact-card">
      <h1>Contact Us</h1>
      <p class="intro">
        Send us a message and we’ll get back to you soon.
      </p>

      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-row">
          <label for="name">Name</label>
          <input
            id="name"
            v-model="name"
            type="text"
            required
            placeholder="Your name"
          />
        </div>

        <div class="form-row">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>

        <div class="form-row">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="message"
            rows="5"
            required
            placeholder="Write your message here..."
          />
        </div>

        <button type="submit" class="submit-btn">
          Send Message
        </button>
      </form>

      <div class="contact-info">
        <p><strong>Phone Number: 123-123-1234</strong></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-page {
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;


  .contact-card {
    width: 100%;
    max-width: 700px;
    background-color: #ffffff;
    border-radius: 1rem;
    padding: 2rem 2.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  h1 {
    margin: 0 0 0.5rem;
    font-size: 2rem;
    text-align: left;
  }

  .intro {
    margin: 0 0 1.5rem;
    color: #555;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;


    .form-row {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    label {
      font-size: 0.9rem;
      font-weight: 600;
      color: #333;
    }

    input, textarea {
      border-radius: 0.5rem;
      border: 1px solid #d3d3d3;
      padding: 0.6rem 0.75rem;
      font-size: 0.95rem;
      font-family: inherit;
      outline: none;
      transition: border-color 0.15s ease, box-shadow 0.15s ease;
      background-color: #fcfcfc;
    }

    input:focus, textarea:focus {
      border-color: #5c876d;
      box-shadow: 0 0 0 2px rgba(92, 135, 109, 0.15);
      background-color: #ffffff;
    }

    .submit-btn {
      margin-top: 0.5rem;
      border-radius: 10px;
      padding: 10px;
      border: none;
      cursor: pointer;
      background-color: #5c876d;
      color: #ffffff;
      font-weight: 600;
      font-size: 1rem;
      text-transform: uppercase;
      transition: background-color 0.15s ease, transform 0.1s ease,
      box-shadow 0.15s ease;

      &:hover {
        background-color: #719f83;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
      }
    }

    .contact-info {
      margin-top: 1.75rem;
      font-size: 0.9rem;
      color: #444;
    }
  }
}

/* Responsive */
@media (max-width: 600px) {
  .contact-card {
    padding: 1.5rem 1.25rem;
  }

  h1 {
    font-size: 1.6rem;
    text-align: center;
  }

  .intro {
    text-align: center;
  }

  .submit-btn {
    width: 100%;
    text-align: center;
    justify-content: center;
  }

  .contact-info {
    text-align: center;
  }
}
</style>
