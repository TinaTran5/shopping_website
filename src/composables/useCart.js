import { ref, computed } from 'vue'

// shared cart state
const cart = ref([])

export function useCart() {
  function addToCart(product) {
    const existing = cart.value.find((item) => item.id === product.id)

    if (existing) {
      existing.qty += 1
    } else {
      cart.value.push({
        ...product,
        qty: 1,
      })
    }
  }

  function removeFromCart(id) {
    // FIXED: remove the item instead of keeping only that item
    cart.value = cart.value.filter((item) => item.id !== id)
  }

  function clearCart() {
    cart.value = []
  }

  function setQuantity(id, qty) {
    const item = cart.value.find((i) => i.id === id)
    if (!item) return

    if (qty <= 0) {
      removeFromCart(id)
    } else {
      item.qty = qty
    }
  }

  const cartCount = computed(() =>
    cart.value.reduce((sum, item) => sum + item.qty, 0)
  )

  const cartTotal = computed(() =>
    cart.value.reduce((sum, item) => sum + item.price * item.qty, 0)
  )

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    setQuantity,
    cartTotal,
    cartCount,
  }
}
