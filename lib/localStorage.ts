import type { CartItem, WishlistItem } from "./types"

// Cart functions
export const getCartItems = (): CartItem[] => {
  if (typeof window === "undefined") return []
  try {
    const items = localStorage.getItem("koleksiqyu-cart")
    return items ? JSON.parse(items) : []
  } catch {
    return []
  }
}

export const addToCart = (productId: string, selectedPlan?: string): void => {
  if (typeof window === "undefined") return
  const items = getCartItems()

  // Remove existing item if it exists
  const filteredItems = items.filter((item) => item.productId !== productId)

  // Add the new item (selectedPlan is optional now)
  filteredItems.push({
    productId,
    selectedPlan: selectedPlan || "", // Empty string if no plan selected yet
  })

  localStorage.setItem("koleksiqyu-cart", JSON.stringify(filteredItems))
}

export const updateCartItemPlan = (productId: string, selectedPlan: string): void => {
  if (typeof window === "undefined") return
  const items = getCartItems()

  const updatedItems = items.map((item) => (item.productId === productId ? { ...item, selectedPlan } : item))

  localStorage.setItem("koleksiqyu-cart", JSON.stringify(updatedItems))
}

export const removeFromCart = (productId: string): void => {
  if (typeof window === "undefined") return
  const items = getCartItems().filter((item) => item.productId !== productId)
  localStorage.setItem("koleksiqyu-cart", JSON.stringify(items))
}

export const clearCart = (): void => {
  if (typeof window === "undefined") return
  localStorage.removeItem("koleksiqyu-cart")
}

export const getCartItemPlan = (productId: string): string | null => {
  const items = getCartItems()
  const item = items.find((item) => item.productId === productId)
  return item ? item.selectedPlan : null
}

// Wishlist functions
export const getWishlistItems = (): WishlistItem[] => {
  if (typeof window === "undefined") return []
  try {
    const items = localStorage.getItem("koleksiqyu-wishlist")
    return items ? JSON.parse(items) : []
  } catch {
    return []
  }
}

export const addToWishlist = (productId: string): void => {
  if (typeof window === "undefined") return
  const items = getWishlistItems()
  const exists = items.some((item) => item.productId === productId)

  if (!exists) {
    items.push({ productId, addedAt: new Date().toISOString() })
    localStorage.setItem("koleksiqyu-wishlist", JSON.stringify(items))
  }
}

export const removeFromWishlist = (productId: string): void => {
  if (typeof window === "undefined") return
  const items = getWishlistItems().filter((item) => item.productId !== productId)
  localStorage.setItem("koleksiqyu-wishlist", JSON.stringify(items))
}

export const isInWishlist = (productId: string): boolean => {
  return getWishlistItems().some((item) => item.productId === productId)
}

export const isInCart = (productId: string): boolean => {
  return getCartItems().some((item) => item.productId === productId)
}
