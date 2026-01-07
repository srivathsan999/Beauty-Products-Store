// Theme Toggle Functionality
(function() {
  'use strict';
  
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Apply the theme on page load
  if (currentTheme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  
  // Update toggle button icon
  function updateToggleIcon() {
    if (themeToggle) {
      const isDark = html.classList.contains('dark');
      const lightIcon = document.getElementById('theme-toggle-light');
      const darkIcon = document.getElementById('theme-toggle-dark');
      
      if (lightIcon && darkIcon) {
        // Toggle visibility based on theme
        if (isDark) {
          lightIcon.classList.remove('hidden');
          lightIcon.classList.add('block');
          darkIcon.classList.add('hidden');
          darkIcon.classList.remove('block');
        } else {
          darkIcon.classList.remove('hidden');
          darkIcon.classList.add('block');
          lightIcon.classList.add('hidden');
          lightIcon.classList.remove('block');
        }
      }
    }
  }
  
  // Toggle theme function
  function toggleTheme() {
    html.classList.toggle('dark');
    const theme = html.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    updateToggleIcon();
  }
  
  // Event listener for theme toggle button
  if (themeToggle) {
    updateToggleIcon();
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Initialize on DOM load
  document.addEventListener('DOMContentLoaded', function() {
    updateToggleIcon();
  });
})();

