// Shop page sorting and pagination functionality
(function() {
  'use strict';
  
  let productsData = [];
  let originalOrder = [];
  let currentPage = 1;
  let productsPerPage = 16; // Show 16 products per page
  let currentSort = 'default';
  
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
  
  // Get paginated products
  function getPaginatedProducts(sortedProducts) {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return sortedProducts.slice(startIndex, endIndex);
  }
  
  // Calculate total pages
  function getTotalPages(totalProducts) {
    return Math.ceil(totalProducts / productsPerPage);
  }
  
  // Render products for current page
  function renderProducts(products) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    // Remove fade-on-scroll class from HTML before rendering (products are already visible)
    const htmlWithoutFade = products.map(product => {
      return product.html.replace(' fade-on-scroll', '');
    }).join('');
    
    productsGrid.innerHTML = htmlWithoutFade;
  }
  
  // Update pagination UI
  function updatePagination(totalProducts) {
    const totalPages = getTotalPages(totalProducts);
    const paginationPages = document.getElementById('pagination-pages');
    const prevButton = document.getElementById('pagination-prev');
    const nextButton = document.getElementById('pagination-next');
    
    if (!paginationPages || !prevButton || !nextButton) return;
    
    // Update Previous button
    prevButton.disabled = currentPage === 1;
    
    // Update Next button
    nextButton.disabled = currentPage >= totalPages || totalPages === 0;
    
    // Generate page number buttons
    paginationPages.innerHTML = '';
    
    // Show page numbers (for 2 pages, show both)
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.className = i === currentPage 
        ? 'px-4 py-2 rounded-lg bg-accent text-white' 
        : 'px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-primary dark:hover:bg-gray-700';
      pageButton.textContent = i;
      pageButton.addEventListener('click', () => goToPage(i));
      paginationPages.appendChild(pageButton);
    }
  }
  
  // Update "Showing X-Y of Z" text
  function updateShowingText(totalProducts) {
    const showingText = document.getElementById('products-showing');
    if (!showingText) return;
    
    const startIndex = totalProducts === 0 ? 0 : (currentPage - 1) * productsPerPage + 1;
    const endIndex = Math.min(currentPage * productsPerPage, totalProducts);
    
    showingText.textContent = `Showing ${startIndex}-${endIndex} of ${totalProducts} products`;
  }
  
  // Go to specific page
  function goToPage(page) {
    const sortedProducts = sortProducts(currentSort);
    const totalPages = getTotalPages(sortedProducts.length);
    
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
      updateDisplay();
    }
  }
  
  // Go to previous page
  function goToPreviousPage() {
    if (currentPage > 1) {
      currentPage--;
      updateDisplay();
    }
  }
  
  // Go to next page
  function goToNextPage() {
    const sortedProducts = sortProducts(currentSort);
    const totalPages = getTotalPages(sortedProducts.length);
    
    if (currentPage < totalPages) {
      currentPage++;
      updateDisplay();
    }
  }
  
  // Update entire display (products, pagination, text)
  function updateDisplay() {
    const sortedProducts = sortProducts(currentSort);
    const paginatedProducts = getPaginatedProducts(sortedProducts);
    
    renderProducts(paginatedProducts);
    updatePagination(sortedProducts.length);
    updateShowingText(sortedProducts.length);
    
    // Scroll to top of products grid
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
      productsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  // Initialize sorting and pagination
  function initSortingAndPagination() {
    const sortSelect = document.getElementById('sort-select');
    const prevButton = document.getElementById('pagination-prev');
    const nextButton = document.getElementById('pagination-next');
    
    if (!sortSelect) return;
    
    // Extract initial product data
    extractProductsData();
    
    // Initial display
    updateDisplay();
    
    // Sort change event listener
    sortSelect.addEventListener('change', function(e) {
      currentSort = e.target.value;
      currentPage = 1; // Reset to first page when sorting changes
      updateDisplay();
    });
    
    // Previous button event listener
    if (prevButton) {
      prevButton.addEventListener('click', goToPreviousPage);
    }
    
    // Next button event listener
    if (nextButton) {
      nextButton.addEventListener('click', goToNextPage);
    }
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSortingAndPagination);
  } else {
    initSortingAndPagination();
  }
})();
