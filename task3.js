// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  // Form validation
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      
      if (name === '' || email === '') {
          alert('Please fill in all fields.');
      } else if (!validateEmail(email)) {
          alert('Please enter a valid email address.');
      } else {
          alert('Form submitted successfully.');
          form.reset();
      }
  });

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }

  // Interactive menu
  const menu = document.getElementById('menu');
  menu.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
          const items = menu.querySelectorAll('li');
          items.forEach(item => item.classList.remove('active'));
          event.target.parentElement.classList.add('active');
      }
  });
});
