import { ref, computed } from 'vue'

// reactive array
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
    cart.value = cart.value.filter((item) => item.id !== id)
  }

  function clearCart() {
    cart.value = []
  }

  function setQuantity(id, qty) {
    const item = cart.value.find((item) => item.id === id)
    if (!item) return

    if (qty > 0) {
      item.qty = qty
    } else {
      removeFromCart(id)
    }
  }

  // # of items in cart
  const cartCount = computed(() => {
    let total = 0

    for (const item of cart.value) {
      total += item.qty
    }

    return total
  })

  // total price in cart
  const cartTotal = computed(() => {
    let total = 0

    for (const item of cart.value) {
      total += item.price * item.qty
    }

    return total
  })


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
