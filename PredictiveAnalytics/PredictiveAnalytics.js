
// FAQ functionality - Complete working solution
function initFAQ() {
    console.log('Initializing FAQ functionality...');
    
    const faqItems = document.querySelectorAll('.faq-item');
    console.log('Found FAQ items:', faqItems.length);
    
    if (faqItems.length === 0) {
        console.error('No FAQ items found!');
        return;
    }
    
    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        
        if (!question) {
            console.error('No FAQ question found in item:', index);
            return;
        }
        
        // Remove any existing event listeners
        const newQuestion = question.cloneNode(true);
        question.parentNode.replaceChild(newQuestion, question);
        
        // Add click event
        newQuestion.addEventListener('click', function(e) {
            console.log('FAQ clicked:', index);
            e.stopPropagation();
            
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                console.log('Opened FAQ:', index);
            }
        });
        
        // Add hover effect
        newQuestion.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
    
    console.log('FAQ initialization complete');
}

// Initialize when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFAQ);
} else {
    initFAQ();
}

// Alternative initialization method
window.addEventListener('load', initFAQ);

    
