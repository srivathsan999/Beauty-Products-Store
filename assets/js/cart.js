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
      cartContainer.innerHTML = cart.map((item, index) => `
        <div class="flex flex-col sm:flex-row gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-soft">
          <img src="${item.image}" alt="${item.name}" class="w-full sm:w-24 h-24 object-cover rounded-lg">
          <div class="flex-grow">
            <h3 class="font-semibold text-lg">${item.name}</h3>
            <p class="text-accent font-semibold text-lg mt-2">$${item.price.toFixed(2)}</p>
          </div>
          <div class="flex items-center gap-4">
            <div class="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
              <button onclick="updateQuantity(${index}, -1)" class="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">-</button>
              <span class="px-4 py-1 border-x border-gray-300 dark:border-gray-600">${item.quantity}</span>
              <button onclick="updateQuantity(${index}, 1)" class="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">+</button>
            </div>
            <button onclick="removeItem(${index})" class="text-red-500 hover:text-red-700">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      `).join('');
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

