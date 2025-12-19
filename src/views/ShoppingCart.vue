<script setup>
import { useCart } from '@/useCart.js'

const { cart, cartTotal, removeFromCart, setQuantity, clearCart } = useCart()
</script>

<template>
  <div class="shopping-cart">
    <h1>Your Cart</h1>

    <div v-if="cart.length === 0" class="empty">
      <p>Your cart is empty. Add some treats <RouterLink to="/products">Here</RouterLink></p>
    </div>

    <div v-else class="cart-layout">
      <div class="items-list">
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <div class="item-image">
            <img :src="item.thumbnail" :alt="item.name" />
          </div>

          <div class="item-info">
            <div class="info-main">
              <h3 class="item-name">{{ item.name }}</h3>
              <p class="item-description">{{ item.description }}</p>

              <div class="qty-row">
                <span class="qty-label">Quantity</span>
                <div class="qty-controls">
                  <button class="qty-btn" @click="setQuantity(item.id, item.qty - 1)" :disabled="item.qty <= 1">−</button>
                  <span class="qty-value">{{ item.qty }}</span>
                  <button class="qty-btn" @click="setQuantity(item.id, item.qty + 1)">+</button>
                </div>
              </div>
            </div>

            <div class="info-side">
              <p class="price-label">Price</p>
              <p class="price-value">${{ item.price.toFixed(2) }}</p>
              <p class="subtotal">
                Subtotal:
                <span>${{ (item.price * item.qty).toFixed(2) }}</span>
              </p>
              <button class="remove-btn" @click="removeFromCart(item.id)">Remove</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: summary -->
      <div class="summary">
        <h2>Order Summary</h2>
        <div class="summary-row total-row">
          <span>Total</span>
          <span>${{ cartTotal.toFixed(2) }}</span>
        </div>

        <button class="checkout-btn">Check Out</button>

        <button class="clear-btn" type="button" @click="clearCart">Clear Cart</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shopping-cart {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.5rem 1rem 2rem;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;

  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
    color: white;
  }

  .empty {
    text-align: center;
    color: black;
  }

  .cart-layout {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;

    .items-list {
      flex: 3;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .cart-item {
        background-color: #ffffff;
        border-radius: 0.75rem;
        padding: 0.75rem 1rem;
        display: flex;
        gap: 1rem;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);

        .item-image {
          width: 140px;
          height: 140px;
          border-radius: 0.75rem;
          overflow: hidden;
          flex-shrink: 0;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
        }

        .item-info {
          flex: 1;
          display: flex;
          justify-content: space-between;
          gap: 1rem;

          .info-main {
            flex: 2;

            .item-name {
              margin: 0;
              font-size: 1.05rem;
              font-weight: 600;
            }

            .item-description {
              margin: 0.35rem 0 0.75rem;
              font-size: 0.9rem;
              color: #555;
            }
          }

          /* Quantity controls */
          .qty-row {
            display: flex;
            flex-direction: column;
            gap: 0.35rem;

            .qty-label {
              font-size: 0.85rem;
              font-weight: 600;
              color: #333;
            }

            .qty-controls {
              display: flex;
              align-items: center;
              gap: 0.5rem;

              .qty-btn {
                width: 28px;
                height: 28px;
                border-radius: 10px;
                border: 1px solid #d3d3d3;
                background-color: #f8f8f8;
                cursor: pointer;
                font-size: 1rem;
                line-height: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                transition:
                  background-color 0.15s ease,
                  border-color 0.15s ease,
                  transform 0.1s ease;

                &:hover:not(:disabled) {
                  background-color: #eaeaea;
                  border-color: #b5b5b5;
                }

                &:disabled {
                  opacity: 0.5;
                  cursor: default;
                }
              }

              .qty-value {
                min-width: 24px;
                text-align: center;
              }
            }
          }

          /* Price / actions */
          .info-side {
            flex: 1;
            text-align: right;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 0.25rem;

            .price-label {
              margin: 0;
              font-size: 0.85rem;
              color: #666;
            }

            .price-value {
              margin: 0;
              font-weight: 600;
            }

            .subtotal {
              margin: 0.35rem 0;
              font-size: 0.9rem;

              span {
                font-weight: 600;
              }
            }

            .remove-btn {
              margin-top: 0.25rem;
              border: none;
              background: transparent;
              color: #b6483d;
              font-size: 0.85rem;
              font-weight: 600;
              cursor: pointer;
              text-decoration: underline;
              text-underline-offset: 2px;
              transition: color 0.15s ease;

              &:hover {
                color: #d0584e;
              }
            }
          }
        }
      }
    }
  }

  /* Summary */
  .summary {
    flex: 1.2;
    background-color: #ffffff;
    border-radius: 0.75rem;
    padding: 1.25rem 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
    position: sticky;
    top: 80px;

    h2 {
      margin: 0 0 1rem;
      font-size: 1.2rem;
    }

    .summary-row {
      display: flex;
      justify-content: space-between;
      font-size: 0.95rem;
      margin-bottom: 0.5rem;
    }

    .total-row {
      font-weight: 700;
      font-size: 1rem;
      margin-top: 0.5rem;
      padding-top: 0.5rem;
      border-top: 1px solid #e3e3e3;
    }

    .checkout-btn {
      margin-top: 1rem;
      width: 100%;
      border: none;
      cursor: pointer;
      padding: 0.75rem 1rem;
      border-radius: 0.75rem;
      background-color: #5c876d;
      color: #ffffff;
      font-weight: 600;
      font-size: 0.95rem;
      text-transform: uppercase;
      transition: background-color 0.15s ease;

      &:hover {
        background-color: #719f83;
      }
    }

    .clear-btn {
      margin-top: 0.6rem;
      width: 100%;
      border-radius: 0.75rem;
      border: 1px solid #d3d3d3;
      background-color: #f8f8f8;
      padding: 0.6rem 1rem;
      cursor: pointer;
      font-size: 0.85rem;
      transition: border-color 0.15s ease;

      &:hover {
        border-color: #c0c0c0;
      }
    }
  }

  /* Responsive */
  @media (max-width: 900px) {
    .cart-layout {
      flex-direction: column;
    }

    .summary {
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    .cart-item {
      flex-direction: column;
    }

    .item-info {
      flex-direction: column;
      align-items: flex-start;
    }

    .info-side {
      align-items: flex-start;
      text-align: left;
    }
  }
}
</style>
