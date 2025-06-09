"use client"

import { useState, useEffect } from "react"
import {
  getCartItems,
  getWishlistItems,
  removeFromCart,
  removeFromWishlist,
  clearCart,
  updateCartItemPlan,
} from "@/lib/localStorage"
import { products, pricingPlans } from "@/lib/data"
import { formatPrice } from "@/lib/utils"
import { Trash2, Heart, ShoppingCart, Send, AlertCircle } from "lucide-react"
import AnimatedSection from "@/components/AnimatedSection"

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [wishlistItems, setWishlistItems] = useState<any[]>([])
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const loadItems = () => {
      const cart = getCartItems()
      const wishlist = getWishlistItems()

      const cartWithProducts = cart.map((item) => ({
        ...item,
        product: products.find((p) => p.id === item.productId),
        plan: item.selectedPlan ? pricingPlans.find((p) => p.id === item.selectedPlan) : null,
      }))

      const wishlistWithProducts = wishlist.map((item) => ({
        ...item,
        product: products.find((p) => p.id === item.productId),
      }))

      setCartItems(cartWithProducts)
      setWishlistItems(wishlistWithProducts)
    }

    loadItems()

    // Listen for storage changes
    window.addEventListener("cartUpdated", loadItems)
    window.addEventListener("wishlistUpdated", loadItems)

    return () => {
      window.removeEventListener("cartUpdated", loadItems)
      window.removeEventListener("wishlistUpdated", loadItems)
    }
  }, [])

  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId)
    setCartItems(cartItems.filter((item) => item.productId !== productId))
    window.dispatchEvent(new Event("cartUpdated"))
  }

  const handleRemoveFromWishlist = (productId: string) => {
    removeFromWishlist(productId)
    setWishlistItems(wishlistItems.filter((item) => item.productId !== productId))
    window.dispatchEvent(new Event("wishlistUpdated"))
  }

  const handlePlanChange = (productId: string, planId: string) => {
    updateCartItemPlan(productId, planId)

    // Update local state
    setCartItems(
      cartItems.map((item) =>
        item.productId === productId
          ? { ...item, selectedPlan: planId, plan: pricingPlans.find((p) => p.id === planId) }
          : item,
      ),
    )
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.plan?.price || 0), 0)
  }

  const canProceedToOrder = () => {
    return cartItems.length > 0 && cartItems.every((item) => item.selectedPlan && item.selectedPlan !== "")
  }

  const generateWhatsAppMessage = () => {
    let message = `Halo, saya ingin memesan template undangan dari KoleksiQyu:\n\n`
    message += `Nama: ${customerName}\n`
    message += `No. HP: ${customerPhone}\n\n`

    if (cartItems.length > 0) {
      message += `🛒 *TEMPLATE DIPILIH:*\n`
      cartItems.forEach((item, index) => {
        message += `${index + 1}. ${item.product?.name}\n`
        message += `   Paket: ${item.plan?.name} - ${formatPrice(item.plan?.price || 0)}\n`
        message += `   Preview: ${item.product?.previewUrl}\n\n`
      })
      message += `💰 *Total: ${formatPrice(getTotalPrice())}*\n\n`
    }

    if (wishlistItems.length > 0) {
      message += `❤️ *WISHLIST:*\n`
      wishlistItems.forEach((item, index) => {
        message += `${index + 1}. ${item.product?.name}\n`
        message += `   Preview: ${item.product?.previewUrl}\n\n`
      })
    }

    message += `Mohon informasi lebih lanjut untuk proses pemesanan. Terima kasih!`

    return encodeURIComponent(message)
  }

  const handleSendToWhatsApp = () => {
    if (!customerName || !customerPhone) {
      alert("Mohon lengkapi nama dan nomor HP Anda")
      return
    }

    if (!canProceedToOrder()) {
      alert("Mohon pilih paket untuk semua template di keranjang")
      return
    }

    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/6285645251595?text=${message}`

    // Clear cart after sending
    clearCart()
    setCartItems([])
    window.dispatchEvent(new Event("cartUpdated"))

    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Checkout</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Pilih paket untuk setiap template dan lanjutkan ke WhatsApp untuk pemesanan
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.length > 0 && (
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-6">
                    <ShoppingCart className="w-5 h-5 text-blue-600" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Keranjang ({cartItems.length})
                    </h2>
                  </div>

                  {!canProceedToOrder() && (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                        <p className="text-sm text-yellow-800 dark:text-yellow-200">
                          Mohon pilih paket untuk semua template sebelum melanjutkan pemesanan.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.productId} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex gap-4 mb-4">
                          <img
                            src={item.product?.imageUrl || "/placeholder.svg"}
                            alt={item.product?.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white">{item.product?.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                              Tema: {item.product?.theme}
                            </p>
                          </div>
                          <button
                            onClick={() => handleRemoveFromCart(item.productId)}
                            className="text-red-500 hover:text-red-700 p-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Package Selection */}
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-3">Pilih Paket:</h4>
                          <div className="grid gap-2">
                            {pricingPlans.map((plan) => (
                              <label
                                key={plan.id}
                                className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                                  item.selectedPlan === plan.id
                                    ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                                }`}
                              >
                                <input
                                  type="radio"
                                  name={`plan-${item.productId}`}
                                  value={plan.id}
                                  checked={item.selectedPlan === plan.id}
                                  onChange={(e) => handlePlanChange(item.productId, e.target.value)}
                                  className="sr-only"
                                />
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <span className="font-medium text-gray-900 dark:text-white">{plan.name}</span>
                                    <span className="font-bold text-blue-600 dark:text-blue-400">
                                      {formatPrice(plan.price)}
                                    </span>
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-300">
                                    {plan.features.slice(0, 2).join(" • ")}
                                  </p>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">Total:</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {formatPrice(getTotalPrice())}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )}

            {/* Wishlist Items */}
            {wishlistItems.length > 0 && (
              <AnimatedSection animation="fade-up" delay={400}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-6">
                    <Heart className="w-5 h-5 text-red-500" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Wishlist ({wishlistItems.length})
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {wishlistItems.map((item) => (
                      <div
                        key={item.productId}
                        className="flex gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                      >
                        <img
                          src={item.product?.imageUrl || "/placeholder.svg"}
                          alt={item.product?.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{item.product?.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                            Tema: {item.product?.theme}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Ditambahkan: {new Date(item.addedAt).toLocaleDateString("id-ID")}
                          </p>
                        </div>
                        <button
                          onClick={() => handleRemoveFromWishlist(item.productId)}
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}

            {cartItems.length === 0 && wishlistItems.length === 0 && (
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center border border-gray-200 dark:border-gray-700">
                  <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Keranjang dan Wishlist Kosong
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Silakan pilih template yang Anda inginkan terlebih dahulu
                  </p>
                  <a
                    href="/products"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all inline-flex items-center gap-2"
                  >
                    Lihat Template
                  </a>
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Customer Info & Checkout */}
          <div className="lg:col-span-1">
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 sticky top-24">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Informasi Pemesanan</h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSendToWhatsApp}
                  disabled={!customerName || !customerPhone || !canProceedToOrder()}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  Kirim ke WhatsApp
                </button>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                  Pesanan akan dikirim ke WhatsApp untuk konfirmasi dan pembayaran
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}
