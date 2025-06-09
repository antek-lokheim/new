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

export const addToCart = (productId: string, selectedPlan: string): void => {
  if (typeof window === "undefined") return
  const items = getCartItems()
  const existingItem = items.find((item) => item.productId === productId)

  if (existingItem) {
    existingItem.selectedPlan = selectedPlan
  } else {
    items.push({ productId, selectedPlan })
  }

  localStorage.setItem("koleksiqyu-cart", JSON.stringify(items))
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

// Pricing plan selection functions
export const getSelectedPlan = (): string | null => {
  if (typeof window === "undefined") return null
  try {
    return localStorage.getItem("koleksiqyu-selected-plan")
  } catch {
    return null
  }
}

export const setSelectedPlan = (planId: string): void => {
  if (typeof window === "undefined") return
  localStorage.setItem("koleksiqyu-selected-plan", planId)
}

export const clearSelectedPlan = (): void => {
  if (typeof window === "undefined") return
  localStorage.removeItem("koleksiqyu-selected-plan")
}
