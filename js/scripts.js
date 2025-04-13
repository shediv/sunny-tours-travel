// scripts.js
// Form validation and submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    const loadingSpinner = document.querySelector('.loading');
    const successMessage = document.querySelector('.success-message');
    const errorMessage = document.querySelector('.error-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.name || !data.email || !data.message) {
                showError('Please fill in all fields');
                return;
            }

            if (!isValidEmail(data.email)) {
                showError('Please enter a valid email address');
                return;
            }

            // Show loading spinner
            loadingSpinner.style.display = 'inline-block';
            
            try {
                // Simulate API call (replace with actual API endpoint)
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Show success message
                showSuccess('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } catch (error) {
                showError('Something went wrong. Please try again later.');
            } finally {
                loadingSpinner.style.display = 'none';
            }
        });
    }
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show error message
function showError(message) {
    const errorMessage = document.querySelector('.error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}

// Show success message
function showSuccess(message) {
    const successMessage = document.querySelector('.success-message');
    successMessage.textContent = message;
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Car booked successfully!");
});

document.getElementById('rental-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Car rented successfully!");
});