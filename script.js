// Button click handlers for all main buttons
function showModal(message) {
  // Simple modal fallback: use alert for now
  alert(message);
}

document.addEventListener('DOMContentLoaded', function () {
  // Quote buttons
  document.querySelectorAll('#quote-btn').forEach(btn => {
    btn.addEventListener('click', () => showModal('Thank you for your interest! We will contact you soon.'));
  });
  // Login buttons
  document.querySelectorAll('#login-btn').forEach(btn => {
    btn.addEventListener('click', () => showModal('Login functionality coming soon!'));
  });
  // Explore products button
  document.querySelectorAll('#explore-products-btn').forEach(btn => {
    btn.addEventListener('click', () => showModal('Explore our products!'));
  });
  // Contact button
  document.querySelectorAll('#contact-btn').forEach(btn => {
    btn.addEventListener('click', () => showModal('Contact form coming soon!'));
  });
  // Submit inquiry button
  document.querySelectorAll('#submit-inquiry-btn').forEach(btn => {
    btn.addEventListener('click', () => showModal('Your inquiry has been submitted!'));
  });

  // Hamburger menu for all pages
  const hamburger = document.getElementById('hamburger-menu');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      if (mobileNav.style.display === 'flex') {
        mobileNav.style.display = 'none';
      } else {
        mobileNav.style.display = 'flex';
      }
    });
    hamburger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (mobileNav.style.display === 'flex') {
          mobileNav.style.display = 'none';
        } else {
          mobileNav.style.display = 'flex';
        }
      }
    });
    // Hide mobile nav on nav link click (for better UX)
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.style.display = 'none';
      });
    });
  }

  // Responsive fix: hide mobile nav on resize if >900px
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && mobileNav) {
      mobileNav.style.display = 'none';
    }
  });
}); 