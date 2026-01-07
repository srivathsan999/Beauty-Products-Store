# Beauty Products Store Website

A modern, professional beauty products e-commerce website built with TailwindCSS, featuring a minimal UI design with glassmorphism effects, dark mode support, and full responsiveness.

## Features

- 🎨 **Modern Minimal UI** with soft shadows and glassmorphism overlays
- 🌙 **Dark Mode** with theme toggle and localStorage persistence
- 📱 **Fully Responsive** design optimized for all screen sizes
- 🛒 **Shopping Cart** functionality with localStorage
- 🔍 **Product Filtering & Sorting** on shop page
- 🎯 **Clean Design** following strict alignment and spacing rules
- ⚡ **Vanilla JavaScript** - no framework dependencies

## Project Structure

```
Beauty Products Store/
├── assets/
│   ├── css/
│   │   ├── input.css       # TailwindCSS source file
│   │   └── output.css      # Compiled TailwindCSS (generated)
│   ├── js/
│   │   ├── theme.js        # Dark mode toggle functionality
│   │   ├── main.js         # Main JavaScript functions
│   │   ├── cart.js         # Shopping cart functionality
│   │   └── components.js   # Component utilities
│   └── img/
│       └── favicon.png     # Favicon (you need to add this)
├── index.html              # Home page
├── shop.html               # Shop/Product listing page
├── product.html            # Product detail page
├── cart.html               # Shopping cart page
├── checkout.html           # Checkout page
├── about.html              # About us page
├── contact.html            # Contact page
├── login.html              # Login page
├── register.html           # Registration page
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service
├── 404.html                # 404 error page
├── tailwind.config.js      # TailwindCSS configuration
├── package.json            # Node.js dependencies
└── README.md               # This file
```

## Prerequisites

- Node.js (v14 or higher) and npm installed on your system
- If you don't have Node.js, download it from [nodejs.org](https://nodejs.org/)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Build TailwindCSS

**IMPORTANT**: You must build the CSS before viewing the website!

For development (with watch mode):
```bash
npm run build-css
```

For production (minified):
```bash
npm run build-css-prod
```

The `output.css` file will be generated in `assets/css/` directory after running the build command.

### 3. Add Favicon

Add your favicon image to `assets/img/favicon.png`. All HTML pages reference this file.

### 4. View the Website

Open any HTML file in your browser. For best results, use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000/index.html`

## Design System

### Color Palette
- **Primary**: #D4A5A5 (Muted Rose)
- **Secondary**: #F8F6F4 (Warm Neutral)
- **Accent**: #A8556F (Sophisticated Burgundy)
- **Text Dark**: #2A2A2A
- **White**: #FFFFFF

### Typography
- **Headings**: Poppins / Inter / Urbanist
- **Body**: Inter / Manrope

## Pages Overview

1. **Home (index.html)** - Hero section, featured categories, best sellers, new arrivals, offers, testimonials, Instagram gallery, newsletter
2. **Shop (shop.html)** - Product grid with filters (category, price, rating), sorting, pagination
3. **Product (product.html)** - Product details, image carousel, variants, add to cart, description, ingredients, how to use
4. **Cart (cart.html)** - Cart items, quantity updates, remove items, coupon code, order summary
5. **Checkout (checkout.html)** - Billing form, shipping form, payment options, order summary
6. **About (about.html)** - Brand story, mission & values, why choose us, certifications
7. **Contact (contact.html)** - Contact form, email, phone, address, working hours, map placeholder
8. **Login/Register** - Centered forms with social login buttons (Google, Facebook)
9. **Privacy/Terms** - Legal pages
10. **404** - Error page with navigation back to home

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All images use Unsplash placeholders. Replace with your own product images.
- Shopping cart uses localStorage - data persists across page refreshes.
- Theme preference (light/dark) is saved in localStorage.
- Mobile menu is hidden by default and toggles on button click.
- All pages include favicon reference - ensure `assets/img/favicon.png` exists.

## License

This project is created for demonstration purposes.

