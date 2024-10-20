
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const errorMessage = document.getElementById('error-message');
  errorMessage.style.display = 'none';

  if (!name || !email || !phone || !message) {
      errorMessage.textContent = 'Please fill out all fields.';
      errorMessage.style.display = 'block';
      return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      errorMessage.textContent = 'Please enter a valid email address.';
      errorMessage.style.display = 'block';
      return false;
  }

  const phonePattern = /^[0-9]{10,15}$/;
  if (!phonePattern.test(phone)) {
      errorMessage.textContent = 'Please enter a valid phone number (10-15 digits).';
      errorMessage.style.display = 'block';
      return false;
  }

  alert('Form submitted successfully!');
  document.getElementById('contactForm').reset();
  return true;

}