// Main JavaScript file for common functionality

// Mobile menu toggle
(function() {
  'use strict';
  
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (mobileMenu && !mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
      mobileMenu.classList.add('hidden');
    }
  });
})();

// Mobile menu dropdown toggles (Categories and Dashboard)
(function() {
  'use strict';
  
  // Categories dropdown toggle
  const categoriesToggle = document.getElementById('mobile-categories-toggle');
  const categoriesMenu = document.getElementById('mobile-categories-menu');
  const categoriesIcon = categoriesToggle ? categoriesToggle.querySelector('svg') : null;
  
  if (categoriesToggle && categoriesMenu) {
    categoriesToggle.addEventListener('click', function(e) {
      e.preventDefault();
      categoriesMenu.classList.toggle('hidden');
      if (categoriesIcon) {
        categoriesIcon.classList.toggle('rotate-180');
      }
    });
  }
  
  // Dashboard dropdown toggle
  const dashboardToggle = document.getElementById('mobile-dashboard-toggle');
  const dashboardMenu = document.getElementById('mobile-dashboard-menu');
  const dashboardIcon = dashboardToggle ? dashboardToggle.querySelector('svg') : null;
  
  if (dashboardToggle && dashboardMenu) {
    dashboardToggle.addEventListener('click', function(e) {
      e.preventDefault();
      dashboardMenu.classList.toggle('hidden');
      if (dashboardIcon) {
        dashboardIcon.classList.toggle('rotate-180');
      }
    });
  }
})();

// Cart functionality
(function() {
  'use strict';
  
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Update cart count
  function updateCartCount() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartBadges = document.querySelectorAll('.cart-count');
    cartBadges.forEach(badge => {
      badge.textContent = cartCount;
      badge.classList.toggle('hidden', cartCount === 0);
    });
  }
  
  // Add to cart
  window.addToCart = function(productId, productName, productPrice, productImage) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
      });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show notification
    showNotification('Product added to cart!');
  };
  
  // Show notification
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
  
  // Initialize cart count on page load
  document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
  });
  
  // Expose cart for other scripts
  window.getCart = function() {
    return cart;
  };
  
  window.updateCart = function(newCart) {
    cart = newCart;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  };
})();

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});

// Fade in on scroll
(function() {
  'use strict';
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.fade-on-scroll').forEach(el => {
      observer.observe(el);
    });
  });
})();

// Filter menu animation
(function() {
  'use strict';
  
  document.addEventListener('DOMContentLoaded', function() {
    const filterMenu = document.getElementById('filter-menu');
    const filterMenuContent = filterMenu ? filterMenu.querySelector('div > div') : null;
    
    if (filterMenu && filterMenuContent) {
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (filterMenu.classList.contains('hidden')) {
              filterMenuContent.style.transform = 'translateX(100%)';
            } else {
              setTimeout(function() {
                filterMenuContent.style.transform = 'translateX(0)';
              }, 10);
            }
          }
        });
      });
      
      observer.observe(filterMenu, {
        attributes: true,
        attributeFilter: ['class']
      });
      
      // Initialize
      if (filterMenu.classList.contains('hidden')) {
        filterMenuContent.style.transform = 'translateX(100%)';
      }
    }
  });
})();

