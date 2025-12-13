// Category page sorting functionality (for skincare, makeup, haircare, fragrance pages)
(function() {
  'use strict';
  
  let productsData = [];
  let originalOrder = [];
  
  // Extract product data from DOM
  function extractProductsData() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    const productCards = productsGrid.querySelectorAll('.product-card');
    productsData = [];
    originalOrder = [];
    
    productCards.forEach((card, index) => {
      // Extract product name
      const nameElement = card.querySelector('h3');
      const name = nameElement ? nameElement.textContent.trim() : '';
      
      // Extract price
      const priceElement = card.querySelector('.text-accent.font-bold.text-xl');
      const priceText = priceElement ? priceElement.textContent.trim() : '';
      const price = parseFloat(priceText.replace('$', '')) || 0;
      
      // Extract rating from stars
      const ratingElement = card.querySelector('.text-yellow-400 span');
      const ratingText = ratingElement ? ratingElement.textContent : '';
      const rating = (ratingText.match(/★/g) || []).length;
      
      // Extract image
      const imgElement = card.querySelector('img');
      const image = imgElement ? imgElement.src : '';
      
      // Extract product ID from addToCart button onclick
      const buttonElement = card.querySelector('button[onclick*="addToCart"]');
      let productId = index + 1;
      if (buttonElement && buttonElement.getAttribute('onclick')) {
        const onclickAttr = buttonElement.getAttribute('onclick');
        const idMatch = onclickAttr.match(/addToCart\((\d+)/);
        if (idMatch) {
          productId = parseInt(idMatch[1]);
        }
      }
      
      // Extract review count (look for text in parentheses after rating stars)
      const ratingContainer = card.querySelector('.flex.items-center.mb-2');
      let reviewCount = 0;
      if (ratingContainer) {
        const reviewElement = ratingContainer.querySelector('span.text-sm');
        const reviewText = reviewElement ? reviewElement.textContent.trim() : '';
        const reviewMatch = reviewText.match(/\((\d+)\)/);
        reviewCount = reviewMatch ? parseInt(reviewMatch[1]) : 0;
      }
      
      // Store the entire HTML for re-rendering
      const html = card.outerHTML;
      
      productsData.push({
        id: productId,
        name: name,
        price: price,
        rating: rating,
        image: image,
        reviewCount: reviewCount,
        html: html,
        originalIndex: index
      });
      
      originalOrder.push(index);
    });
  }
  
  // Sort products
  function sortProducts(sortBy) {
    if (!productsData.length) extractProductsData();
    
    const sorted = [...productsData];
    
    switch(sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => {
          if (b.rating !== a.rating) {
            return b.rating - a.rating;
          }
          return b.reviewCount - a.reviewCount;
        });
        break;
      case 'newest':
        // For newest, we'll sort by original index in reverse (assuming newer products are added later)
        sorted.sort((a, b) => b.originalIndex - a.originalIndex);
        break;
      case 'default':
      default:
        sorted.sort((a, b) => a.originalIndex - b.originalIndex);
        break;
    }
    
    return sorted;
  }
  
  // Render products
  function renderProducts(products) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    // Remove fade-on-scroll class from HTML before rendering (products are already visible)
    const htmlWithoutFade = products.map(product => {
      return product.html.replace(' fade-on-scroll', '');
    }).join('');
    
    productsGrid.innerHTML = htmlWithoutFade;
  }
  
  // Initialize sorting
  function initSorting() {
    const sortSelect = document.getElementById('sort-select');
    if (!sortSelect) return;
    
    // Extract initial product data
    extractProductsData();
    
    // Add event listener
    sortSelect.addEventListener('change', function(e) {
      const sortBy = e.target.value;
      const sortedProducts = sortProducts(sortBy);
      renderProducts(sortedProducts);
    });
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSorting);
  } else {
    initSorting();
  }
})();

