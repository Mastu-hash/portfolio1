document.addEventListener('DOMContentLoaded', () => {
     const form = document.forms['contact-form'];
   
     form.addEventListener('submit', (e) => {
       e.preventDefault(); // Prevent default form submission
       const name = form['firstname'].value.trim();
       const email = form['email'].value.trim();
       const phone = form['phonenumber'].value.trim();
       const message = form['message'].value.trim();
   
       // Name validation
       if (!name) {
         alert('Please enter your name.');
         form['firstname'].focus();
         return;
       }
   
       // Email validation
       if (!validateEmail(email)) {
         alert('Please enter a valid email address.');
         form['email'].focus();
         return;
       }
   
       // Phone number validation
       if (!validatePhone(phone)) {
         alert('Please enter a valid phone number (10 digits).');
         form['phonenumber'].focus();
         return;
       }
   
       // Message validation
       if (!message) {
         alert('Please enter a message.');
         form['message'].focus();
         return;
       }
   
       // If all validations pass, submit the form using fetch
       fetch('https://script.google.com/macros/s/AKfycbzwfWOy8CKlK5KMXrneH1xAmEwz4U1TfUSlcNWejbDssFIjR7qbdlH4TYZ1fqHEBUOn/exec', {
         method: 'POST',
         body: new FormData(form),
       })
         .then(() => {
           alert('Thank you! Your form has been submitted.');
           form.reset(); // Reset the form after successful submission
         })
         .catch((error) => {
           console.error('Error!', error.message);
           alert('There was an error submitting your form. Please try again.');
         });
     });
   
     // Helper function to validate email
     function validateEmail(email) {
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       return emailRegex.test(email);
     }
   
     // Helper function to validate phone number (10 digits)
     function validatePhone(phone) {
       const phoneRegex = /^\d{10}$/;
       return phoneRegex.test(phone);
     }
   });
   