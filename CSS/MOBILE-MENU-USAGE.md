# Mobile Menu Toggle - Usage Guide

## Overview
The `mobile-menu.css` file contains all the universal styles for the mobile hamburger menu toggle that works across all pages of the Zonixtec website.

## How to Add Mobile Menu to Any Page

### 1. Add CSS Link in `<head>`
```html
<link rel="stylesheet" href="../CSS/navbar.css" />
<link rel="stylesheet" href="../CSS/mobile-menu.css" />
```

### 2. Add HTML Structure in `<nav>`
```html
<button class="mobile-menu-btn" aria-label="Toggle mobile menu">
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
</button>
```

### 3. Include JavaScript
```html
<script src="../script/navbar.js"></script>
```

## Features Included

✅ **Hamburger Icon** - 3-line menu icon that transforms to X when active
✅ **Slide-in Panel** - Navigation slides in from right (300px width)
✅ **Dark Overlay** - Backdrop with blur effect
✅ **Auto-close** - Closes on overlay click, link click, or ESC key
✅ **Body Scroll Lock** - Prevents background scrolling when menu is open
✅ **Smooth Animations** - Professional transitions and transforms
✅ **Responsive Dropdowns** - Mobile-optimized dropdown styling
✅ **Custom Scrollbar** - Styled scrollbar for long menu lists

## No Additional Code Needed

The `navbar.js` script handles ALL functionality automatically:
- Creates overlay dynamically
- Handles button clicks
- Manages active states
- Closes menu on various triggers
- Responsive behavior

## Customization

If you need to customize colors or dimensions, edit the `mobile-menu.css` file. Key variables:
- `.mobile-menu-btn` - Button styling
- `.hamburger-line` - Line width, height, color
- `.nav-links` - Panel width, background, padding
- `.mobile-overlay` - Backdrop color and blur

## Example Pages Using This

- Home (`/Home/home.html`)
- Our History (`/OurHistory/OurHistory.html`)
- All other main pages...

## Browser Support

Works on all modern browsers:
- Chrome, Firefox, Safari, Edge
- iOS Safari, Chrome Mobile
- Supports touch events and click events
