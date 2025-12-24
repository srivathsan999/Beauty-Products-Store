// User Dashboard JavaScript

(function() {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    
    // View All Orders
    const viewAllOrdersBtn = document.getElementById('view-all-orders');
    if (viewAllOrdersBtn) {
      viewAllOrdersBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showNotification('Redirecting to all orders page...');
        // In a real application, this would redirect to an orders page
        setTimeout(() => {
          alert('Orders page coming soon! This would show all your order history.');
        }, 500);
      });
    }

    // Add to Cart buttons in Wishlist
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    addToCartBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        const productPrice = parseFloat(this.getAttribute('data-price'));
        const productImage = this.getAttribute('data-image');
        
        // Use the addToCart function from main.js if available
        if (typeof window.addToCart === 'function') {
          const productId = productName.toLowerCase().replace(/\s+/g, '-');
          window.addToCart(productId, productName, productPrice, productImage);
        } else {
          // Fallback notification
          showNotification(`${productName} added to cart!`);
        }
      });
    });

    // Edit Profile button
    const editProfileBtn = document.getElementById('edit-profile-btn');
    if (editProfileBtn) {
      editProfileBtn.addEventListener('click', function() {
        showEditProfileModal();
      });
    }

    // Shipping Addresses
    const shippingAddressesBtn = document.getElementById('shipping-addresses');
    if (shippingAddressesBtn) {
      shippingAddressesBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showNotification('Loading shipping addresses...');
        setTimeout(() => {
          alert('Shipping Addresses:\n\n1. Home Address\n   123 Main St, City, State 12345\n   (Default)\n\n2. Work Address\n   456 Office Blvd, City, State 12345\n\nThis feature would allow you to add, edit, or remove addresses.');
        }, 500);
      });
    }

    // Payment Methods
    const paymentMethodsBtn = document.getElementById('payment-methods');
    if (paymentMethodsBtn) {
      paymentMethodsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showNotification('Loading payment methods...');
        setTimeout(() => {
          alert('Payment Methods:\n\n1. Visa ending in 1234\n   Expires: 12/25\n   (Default)\n\n2. Mastercard ending in 5678\n   Expires: 06/26\n\nThis feature would allow you to add, edit, or remove payment methods.');
        }, 500);
      });
    }
  });

  // Show notification helper function
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-accent text-white px-6 py-3 rounded-lg shadow-lg z-50 fade-in';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('opacity-0', 'transition-opacity', 'duration-300');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Edit Profile Modal
  function showEditProfileModal() {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
    overlay.id = 'profile-modal-overlay';
    
    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-md w-full mx-4';
    modal.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-heading font-bold text-text-dark dark:text-white">Edit Profile</h2>
        <button id="close-profile-modal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <form id="profile-edit-form" class="space-y-4">
        <div>
          <label class="block text-sm font-semibold mb-2 text-text-dark dark:text-gray-300">Full Name</label>
          <input type="text" id="profile-name" value="John Doe" class="w-full input-field" required>
        </div>
        <div>
          <label class="block text-sm font-semibold mb-2 text-text-dark dark:text-gray-300">Email</label>
          <input type="email" id="profile-email" value="john.doe@example.com" class="w-full input-field" required>
        </div>
        <div>
          <label class="block text-sm font-semibold mb-2 text-text-dark dark:text-gray-300">Phone</label>
          <input type="tel" id="profile-phone" value="+1 (555) 123-4567" class="w-full input-field" required>
        </div>
        <div class="flex space-x-3 pt-4">
          <button type="submit" class="btn-primary flex-1">Save Changes</button>
          <button type="button" id="cancel-profile-edit" class="btn-outline flex-1">Cancel</button>
        </div>
      </form>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Close modal handlers
    const closeModal = () => {
      overlay.remove();
    };
    
    document.getElementById('close-profile-modal').addEventListener('click', closeModal);
    document.getElementById('cancel-profile-edit').addEventListener('click', closeModal);
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeModal();
      }
    });
    
    // Form submission
    document.getElementById('profile-edit-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('profile-name').value;
      const email = document.getElementById('profile-email').value;
      const phone = document.getElementById('profile-phone').value;
      
      // Update the displayed values on the page
      // In a real application, this would update the DOM with new values
      // For now, we'll just show a success message
      
      showNotification('Profile updated successfully!');
      closeModal();
    });
  }
})();

