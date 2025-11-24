/**
 * Load Navbar Component
 * This script loads the navbar.html into any page that includes it
 */

(function() {
    // Function to load navbar
    function loadNavbar() {
        fetch('navbar.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Navbar file not found');
                }
                return response.text();
            })
            .then(data => {
                // Create a temporary container
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;
                
                // Insert navbar at the beginning of body
                document.body.insertBefore(tempDiv.firstElementChild, document.body.firstChild);
                
                // Insert mobile overlay if it exists
                const overlay = tempDiv.querySelector('.mobile-menu-overlay');
                if (overlay) {
                    document.body.insertBefore(overlay, document.body.firstChild.nextSibling);
                }
                
                // Trigger custom event to notify that navbar is loaded
                const navbarLoadedEvent = new CustomEvent('navbarLoaded');
                document.dispatchEvent(navbarLoadedEvent);
                
                console.log('✅ Navbar loaded successfully');
            })
            .catch(error => {
                console.error('❌ Error loading navbar:', error);
            });
    }

    // Load navbar when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadNavbar);
    } else {
        loadNavbar();
    }
})();
