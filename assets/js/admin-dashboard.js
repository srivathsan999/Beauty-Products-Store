// Admin Dashboard JavaScript

(function() {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    
    // View All Orders (Admin)
    const viewAllOrdersBtn = document.getElementById('view-all-orders-admin');
    if (viewAllOrdersBtn) {
      viewAllOrdersBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showNotification('Loading all orders...');
        setTimeout(() => {
          alert('All Orders Page\n\nThis would display a comprehensive list of all orders with:\n- Filter options (status, date range, customer)\n- Search functionality\n- Export capabilities\n- Bulk actions\n- Detailed order information');
        }, 500);
      });
    }

    // View All Products
    const viewAllProductsBtn = document.getElementById('view-all-products');
    if (viewAllProductsBtn) {
      viewAllProductsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showNotification('Loading all products...');
        setTimeout(() => {
          alert('All Products Page\n\nThis would display:\n- Complete product catalog\n- Product details (name, price, stock, status)\n- Edit/Delete options\n- Add new product button\n- Filter and search functionality');
        }, 500);
      });
    }

    // Add New Product
    const addNewProductBtn = document.getElementById('add-new-product');
    if (addNewProductBtn) {
      addNewProductBtn.addEventListener('click', function() {
        showAddProductModal();
      });
    }

    // Manage Orders
    const manageOrdersBtn = document.getElementById('manage-orders');
    if (manageOrdersBtn) {
      manageOrdersBtn.addEventListener('click', function() {
        showNotification('Opening order management...');
        setTimeout(() => {
          alert('Order Management\n\nThis section would include:\n- View all orders\n- Update order status\n- Process refunds\n- Print shipping labels\n- Contact customers\n- Export order data');
        }, 500);
      });
    }

    // View Customers
    const viewCustomersBtn = document.getElementById('view-customers');
    if (viewCustomersBtn) {
      viewCustomersBtn.addEventListener('click', function() {
        showNotification('Loading customer list...');
        setTimeout(() => {
          alert('Customer Management\n\nThis section would display:\n- List of all customers\n- Customer details (orders, spending, contact info)\n- Customer activity history\n- Search and filter options\n- Customer communication tools');
        }, 500);
      });
    }

    // Manage Inventory
    const manageInventoryBtn = document.getElementById('manage-inventory');
    if (manageInventoryBtn) {
      manageInventoryBtn.addEventListener('click', function() {
        showNotification('Opening inventory management...');
        setTimeout(() => {
          alert('Inventory Management\n\nThis section would include:\n- Stock levels for all products\n- Low stock alerts\n- Restock functionality\n- Inventory reports\n- Product variants management\n- Stock adjustments');
        }, 500);
      });
    }

    // View Analytics
    const viewAnalyticsBtn = document.getElementById('view-analytics');
    if (viewAnalyticsBtn) {
      viewAnalyticsBtn.addEventListener('click', function() {
        showNotification('Loading analytics dashboard...');
        setTimeout(() => {
          alert('Analytics Dashboard\n\nThis would show:\n- Sales charts and graphs\n- Revenue trends\n- Product performance\n- Customer insights\n- Traffic analytics\n- Export reports\n- Custom date ranges');
        }, 500);
      });
    }

    // Settings
    const settingsBtn = document.getElementById('settings');
    if (settingsBtn) {
      settingsBtn.addEventListener('click', function() {
        showNotification('Opening settings...');
        setTimeout(() => {
          alert('Settings\n\nThis section would include:\n- Store information\n- Payment gateway settings\n- Shipping settings\n- Tax configuration\n- Email notifications\n- User management\n- Security settings');
        }, 500);
      });
    }

    // Pending Actions
    const reviewOrdersBtn = document.getElementById('review-orders');
    if (reviewOrdersBtn) {
      reviewOrdersBtn.addEventListener('click', function() {
        showNotification('Loading orders for review...');
        setTimeout(() => {
          alert('Orders Requiring Review (3)\n\n1. Order #12345 - John Doe - $49.98\n   Status: Pending payment verification\n\n2. Order #12340 - Jane Smith - $89.97\n   Status: Fraud check required\n\n3. Order #12338 - Mike Johnson - $25.99\n   Status: Address verification needed');
        }, 500);
      });
    }

    const restockProductsBtn = document.getElementById('restock-products');
    if (restockProductsBtn) {
      restockProductsBtn.addEventListener('click', function() {
        showNotification('Loading low stock products...');
        setTimeout(() => {
          alert('Products Low in Stock (5)\n\n1. Rose Lip Balm - Stock: 3 units\n2. Hair Serum - Stock: 5 units\n3. Moisturizing Cream - Stock: 8 units\n4. Glowing Primer - Stock: 2 units\n5. Matte Foundation - Stock: 4 units\n\nClick "Manage Inventory" to restock these items.');
        }, 500);
      });
    }

    const respondInquiriesBtn = document.getElementById('respond-inquiries');
    if (respondInquiriesBtn) {
      respondInquiriesBtn.addEventListener('click', function() {
        showNotification('Loading customer inquiries...');
        setTimeout(() => {
          alert('Customer Inquiries (2)\n\n1. From: Sarah Williams\n   Subject: Product return request\n   Date: Jan 14, 2025\n   Status: Unread\n\n2. From: David Brown\n   Subject: Shipping delay inquiry\n   Date: Jan 13, 2025\n   Status: Unread\n\nNavigate to customer support section to respond.');
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

  // Add Product Modal
  function showAddProductModal() {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
    overlay.id = 'product-modal-overlay';
    
    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto';
    modal.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-heading font-bold text-text-dark dark:text-white">Add New Product</h2>
        <button id="close-product-modal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <form id="product-add-form" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-semibold mb-2 text-text-dark dark:text-gray-300">Product Name *</label>
            <input type="text" id="product-name" class="w-full input-field" required>
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2 text-text-dark dark:text-gray-300">Category *</label>
            <select id="product-category" class="w-full input-field" required>
              <option value="">Select Category</option>
              <option value="skincare">Skincare</option>
              <option value="makeup">Makeup</option>
              <option value="haircare">Haircare</option>
              <option value="fragrance">Fragrance</option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-semibold mb-2 text-text-dark dark:text-gray-300">Price ($) *</label>
            <input type="number" id="product-price" step="0.01" min="0" class="w-full input-field" required>
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2 text-text-dark dark:text-gray-300">Stock Quantity *</label>
            <input type="number" id="product-stock" min="0" class="w-full input-field" required>
          </div>
        </div>
        <div>
          <label class="block text-sm font-semibold mb-2 text-text-dark dark:text-gray-300">Product Description</label>
          <textarea id="product-description" rows="4" class="w-full input-field"></textarea>
        </div>
        <div>
          <label class="block text-sm font-semibold mb-2 text-text-dark dark:text-gray-300">Product Image URL</label>
          <input type="url" id="product-image" class="w-full input-field" placeholder="https://example.com/image.jpg">
        </div>
        <div class="flex space-x-3 pt-4">
          <button type="submit" class="btn-primary flex-1">Add Product</button>
          <button type="button" id="cancel-product-add" class="btn-outline flex-1">Cancel</button>
        </div>
      </form>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Close modal handlers
    const closeModal = () => {
      overlay.remove();
    };
    
    document.getElementById('close-product-modal').addEventListener('click', closeModal);
    document.getElementById('cancel-product-add').addEventListener('click', closeModal);
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeModal();
      }
    });
    
    // Form submission
    document.getElementById('product-add-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('product-name').value;
      const category = document.getElementById('product-category').value;
      const price = document.getElementById('product-price').value;
      const stock = document.getElementById('product-stock').value;
      const description = document.getElementById('product-description').value;
      const image = document.getElementById('product-image').value;
      
      showNotification(`Product "${name}" added successfully!`);
      closeModal();
      
      // In a real application, this would send data to a server
      console.log('Product data:', { name, category, price, stock, description, image });
    });
  }
})();

