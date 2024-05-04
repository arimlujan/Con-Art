document.addEventListener("DOMContentLoaded", function() {
    var acceptCookiesButton = document.getElementById('acceptCookies');
    var growInterval = null;
    var currentWidth = 60;
    var currentHeight = 30;
    var currentFontSize = 14;
  
    function growButton() {
      currentWidth += currentWidth * .1;
      currentHeight += currentHeight * .1;
      currentFontSize += currentFontSize*.1;
      acceptCookiesButton.style.width = currentWidth + 'px';
      acceptCookiesButton.style.height = currentHeight + 'px';
      acceptCookiesButton.style.fontSize = currentFontSize + 'px';
    }
  
    growInterval = setInterval(growButton, 1000);
  
    acceptCookiesButton.addEventListener('click', function() {
      clearInterval(growInterval);
      acceptCookiesButton.classList.add('clicked');
      // Set a cookie to remember that the user has accepted cookies
      document.cookie = 'cookiesAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
      
      // Hide the banner
      var cookiesBanner = document.getElementById('cookiesBanner');
      cookiesBanner.style.display = 'none';
    });
  });

/* toggle */
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    // Add a delay before redirecting to show the animation
    setTimeout(() => {
      window.location.href = 'home-light.html'; // Redirect to light mode page
    }, 400); // Match the transition duration
  }
  else{
    // Add a delay before redirecting to show the animation
    setTimeout(() => {
      window.location.href = 'home.html'; // Redirect to dark mode page
    }, 400); // Match the transition duration
  }
});