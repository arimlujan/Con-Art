/* Comparison Prevention*/
document.querySelectorAll('.show-details').forEach(item => {
    item.addEventListener('click', event => {
      const details = event.target.parentElement.nextElementSibling;
      details.style.display = details.style.display === 'none' ? 'block' : 'none';
    });
  });

  let timerElement = document.getElementById('timer');
  let timeLeft = 10;
  let positionX = 0;
  let positionY = 0;
  let directionX = 3; // Increase the speed by changing the increment value
  let directionY = 3; // Increase the speed by changing the increment value
  
  function countdown() {
    if (timeLeft === 0) {
      timeLeft = 10; // Reset to 10 seconds
    } else {
      timeLeft--;
    }
    updateTimer();
  }
  
  function updateTimer() {
    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = timeLeft % 60;
    
    let hoursDisplay = hours < 10 ? "0" + hours : hours;
    let minutesDisplay = minutes < 10 ? "0" + minutes : minutes;
    let secondsDisplay = seconds < 10 ? "0" + seconds : seconds;
  
    timerElement.textContent = `Act fast, sale ending soon! Time left: ${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;
  }
  
  updateTimer(); // Display initial time
  setInterval(countdown, 1000); // Update timer every second
  
  /* Preselection */
  function submitPreferences() {
    alert("Preferences saved!");
    // You can add code here to save the preferences to a database or localStorage
}