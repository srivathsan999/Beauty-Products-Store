// Cart page functionality
(function() {
  'use strict';
  
  function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartContent = document.getElementById('cart-content');
    
    if (cart.length === 0) {
      if (emptyCart) emptyCart.classList.remove('hidden');
      if (cartContent) cartContent.classList.add('hidden');
      return;
    }
    
    if (emptyCart) emptyCart.classList.add('hidden');
    if (cartContent) cartContent.classList.remove('hidden');
    
    if (cartContainer) {
      cartContainer.innerHTML = cart.map((item, index) => {
        // Fix image URL - ensure it's valid and properly formatted
        let imageSrc = item.image || '';
        
        // If image URL exists, use it as-is (Unsplash URLs should work)
        // If missing or broken, use a placeholder
        if (!imageSrc || imageSrc.trim() === '') {
          imageSrc = 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&auto=format&fit=crop&q=80';
        }
        
        // Create a fallback placeholder SVG encoded
        const placeholderSvg = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#D4A5A5"/><text x="50%" y="50%" font-family="Arial" font-size="16" fill="#9CA3AF" text-anchor="middle" dominant-baseline="middle">Product</text></svg>`);
        
        const itemTotal = ((item.price || 0) * (item.quantity || 1)).toFixed(2);
        
        return `
        <div class="flex flex-col sm:flex-row gap-4 p-4 md:p-5 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300">
          <div class="flex-shrink-0">
            <img src="${imageSrc}" alt="${item.name || 'Product'}" class="w-full sm:w-28 h-28 md:w-32 md:h-32 object-cover rounded-lg shadow-sm" 
                 loading="lazy"
                 onerror="this.onerror=null; this.src='data:image/svg+xml;charset=utf-8,${placeholderSvg}'">
          </div>
          <div class="flex-grow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div class="flex-grow">
              <h3 class="font-semibold text-lg md:text-xl text-text-dark dark:text-white mb-2">${item.name || 'Product'}</h3>
              <p class="text-accent font-bold text-lg md:text-xl">$${(item.price || 0).toFixed(2)} <span class="text-gray-500 dark:text-gray-400 text-sm font-normal">each</span></p>
            </div>
            <div class="flex items-center justify-between sm:justify-end gap-4">
              <div class="flex items-center border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                <button onclick="updateQuantity(${index}, -1)" class="px-3 py-2 hover:bg-primary dark:hover:bg-gray-700 transition-colors text-text-dark dark:text-gray-200 font-semibold">−</button>
                <span class="px-4 py-2 border-x-2 border-gray-200 dark:border-gray-700 min-w-[3rem] text-center font-semibold text-text-dark dark:text-white">${item.quantity || 1}</span>
                <button onclick="updateQuantity(${index}, 1)" class="px-3 py-2 hover:bg-primary dark:hover:bg-gray-700 transition-colors text-text-dark dark:text-gray-200 font-semibold">+</button>
              </div>
              <div class="text-right">
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Total</p>
                <p class="text-accent font-bold text-lg">$${itemTotal}</p>
              </div>
              <button onclick="removeItem(${index})" class="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Remove item">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      `;
      }).join('');
    }
    
    updateSummary();
  }
  
  function updateSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 5.99;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;
    
    const subtotalEl = document.getElementById('cart-subtotal');
    const shippingEl = document.getElementById('cart-shipping');
    const taxEl = document.getElementById('cart-tax');
    const totalEl = document.getElementById('cart-total');
    
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
  }
  
  window.updateQuantity = function(index, change) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    
    // Update cart count in navbar
    if (window.updateCartCount) {
      window.updateCartCount();
    }
  };
  
  window.removeItem = function(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    
    // Update cart count in navbar
    if (window.updateCartCount) {
      window.updateCartCount();
    }
  };
  
  window.applyCoupon = function() {
    const couponCode = document.getElementById('coupon-code')?.value;
    // Simple coupon logic
    if (couponCode && couponCode.toLowerCase() === 'save10') {
      alert('Coupon applied! 10% discount will be applied at checkout.');
    } else {
      alert('Invalid coupon code.');
    }
  };
  
  document.addEventListener('DOMContentLoaded', loadCart);
})();

