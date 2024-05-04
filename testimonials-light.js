  /* toggle */
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
      // Add a delay before redirecting to show the animation
      setTimeout(() => {
        window.location.href = 'testimonials-light.html'; // Redirect to light mode page
      }, 400); // Match the transition duration
    }
    else{
      // Add a delay before redirecting to show the animation
      setTimeout(() => {
        window.location.href = 'testimonials.html'; // Redirect to dark mode page
      }, 400); // Match the transition duration
    }
  });