// Validate Form

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

// Fetch Testimonials

const fetchTestimonials = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/?results=3');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        return null; 
    }
};

const displayTestimonials = async () => {
    const testimonials = await fetchTestimonials();
    const testimonialContent = document.getElementById('testimonialContent');

    if (!testimonials) {
        testimonialContent.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger" role="alert">
                    Error loading testimonials. Please try again later.
                </div>
            </div>
        `;
        return;
    }

    testimonials.forEach(testimonial => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="testimonial-card">
                    <img src="${testimonial.picture.medium}" class="testimonial-img" alt="${testimonial.name.first}">
                    <h5>${testimonial.name.first} ${testimonial.name.last}</h5>
                    <p>"Great service! Highly recommend!"</p>
                </div>
            </div>
        `;
        testimonialContent.innerHTML += card;
    });
};

window.onload = displayTestimonials;