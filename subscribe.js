document.addEventListener("DOMContentLoaded", function() {
    for (var i = 0; i < 100; i++) {
      setTimeout(createModal, i *200); // Delay each modal
    }
  });
  
  function createModal() {
    var modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.top = getRandomPosition(window.innerHeight - 0) + 'px';
    modal.style.left = getRandomPosition(window.innerWidth - 200) + 'px';
  
    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modal.appendChild(modalContent);
  
    var closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    modalContent.appendChild(closeButton);

    var subscribeText = document.createElement('p');
    subscribeText.textContent = 'Subscribe?';
    modalContent.appendChild(subscribeText);

    var emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Enter your email';
    modalContent.appendChild(emailInput);

    var submitButton = document.createElement('button');
    submitButton.classList.add('blueButton');
    submitButton.style.marginTop = '10px';
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', function() {
      subscribeText.textContent = 'Thanks!';
      emailInput.style.display = 'none';
      submitButton.style.display = 'none';
    });
    modalContent.appendChild(submitButton);
  
    document.body.appendChild(modal);
  
    modal.style.display = 'block'; // Display the modal immediately
  }
  
  function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
  }

  
  /* toggle */
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    // Add a delay before redirecting to show the animation
    setTimeout(() => {
      window.location.href = 'subscribe-light.html'; // Redirect to light mode page
    }, 400); // Match the transition duration
  }
  else{
    // Add a delay before redirecting to show the animation
    setTimeout(() => {
      window.location.href = 'subscribe.html'; // Redirect to dark mode page
    }, 400); // Match the transition duration
  }
});