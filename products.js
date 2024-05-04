let timerElement = document.getElementById('timer');
let timeLeft = 120;
let positionX = 0;
let positionY = 0;
let directionX = 3; // Increase the speed by changing the increment value
let directionY = 3; // Increase the speed by changing the increment value

function moveTimer() {
  positionX += directionX;
  positionY += directionY;
  if (positionX >= window.innerWidth - timerElement.clientWidth || positionX <= 0) {
    directionX *= -1;
  }
  if (positionY >= document.body.offsetHeight - timerElement.clientHeight || positionY <= 0) {
    directionY *= -1;
  }
  timerElement.style.left = positionX + 'px';
  timerElement.style.top = positionY + 'px';
  requestAnimationFrame(moveTimer);
}

function countdown() {
  if (timeLeft === 0) {
    timeLeft = 120; // Reset to 10 seconds
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
moveTimer(); // Start floating timer
setInterval(countdown, 1000); // Update timer every second



/*Products------------------------------------*/

/*
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
    { id: 5, name: 'Product 5', price: 50 }
  ];
  */

  const products = [
    {
      id: 1,
      name: 'Comparison Prevention',
      description: 'The user struggles to compare products because features and prices are combined in a complex manner, or because essential information is hard to find.',
      price: 29.99,
      image: 'images/Comparison Prevention 2.jpg'
    },
    {
      id: 2,
      name: 'Confirmshaming',
      description: 'The user is emotionally manipulated into doing something that they would not otherwise have done.',
      price: 19.99,
      image: 'images/Confirmshaming.jpg'
    },
    {
      id: 3,
      name: 'Disguised Ads',
      description: 'The user mistakenly believes they are clicking on an interface element or native content, but it\'s actually a disguised advertisement.',
      price: 24.99,
      image: 'images/Disguised Ad.jpg'
    },
    {
      id: 4,
      name: 'Fake Scarcity',
      description: 'The user is pressured into completing an action because they are presented with a fake indication of limited supply or popularity.',
      price: 34.99,
      image: 'images/Fake Scarcity.jpg'
    },
    {
      id: 5,
      name: 'Fake Social Proof',
      description: 'The user is misled into believing a product is more popular or credible than it really is, because they were shown fake reviews, testimonials, or activity messages.',
      price: 27.99,
      image: 'images/Fake Social Proof.jpg'
    },
    {
      id: 6,
      name: 'Fake Urgency',
      description: 'The user is pressured into completing an action because they are presented with a fake time limitation.',
      price: 22.99,
      image: 'images/Fake Urgency.jpg'
    },
    {
      id: 7,
      name: 'Forced Action',
      description: 'The user wants to do something, but they are required to do something else undesirable in return.',
      price: 32.99,
      image: 'images/Forced Action.jpg'
    },
    {
      id: 8,
      name: 'Hard to Cancel',
      description: 'The user finds it easy to sign up or subscribe, but when they want to cancel they find it very hard.',
      price: 39.99,
      image: 'images/Hard to Cancel 2.jpg'
    },
    {
      id: 9,
      name: 'Hidden Costs',
      description: 'The user is enticed with a low advertised price. After investing time and effort, they discover unexpected fees and charges when they reach the checkout.',
      price: 26.99,
      image: 'images/Hidden Costs.jpg'
    },
    {
      id: 10,
      name: 'Hidden Subscription',
      description: 'The user is unknowingly enrolled in a recurring subscription or payment plan without clear disclosure or their explicit consent.',
      price: 29.99,
      image: 'images/Hidden Subscription 3.jpg'
    },
    {
      id: 11,
      name: 'Nagging',
      description: 'The user tries to do something, but they are persistently interrupted by requests to do something else that may not be in their best interests.',
      price: 21.99,
      image: 'images/Nagging.jpg'
    },
    {
      id: 12,
      name: 'Obstruction',
      description: 'The user is faced with barriers or hurdles, making it hard for them to complete their task or access information.',
      price: 28.99,
      image: 'images/Obstruction.jpg'
    },
    {
      id: 13,
      name: 'Preselection',
      description: 'The user is presented with a default option that has already been selected for them, in order to influence their decision-making.',
      price: 23.99,
      image: 'images/Preselection.jpg'
    },
    {
      id: 14,
      name: 'Sneaking',
      description: 'The user is drawn into a transaction on false pretences, because pertinent information is hidden or delayed from being presented to them.',
      price: 30.99,
      image: 'images/Sneaking.jpg'
    },
    {
      id: 15,
      name: 'Trick Wording',
      description: 'The user is misled into taking an action, due to the presentation of confusing or misleading language.',
      price: 25.99,
      image: 'images/Trick Wording 2.jpg'
    },
    {
      id: 16,
      name: 'Visual Interference',
      description: 'The user expects to see information presented in a clear and predictable way on the page, but it is hidden, obscured, or disguised.',
      price: 31.99,
      image: 'images/Visual Interference.jpg'
    }
  ];
  
  const productsContainer = document.getElementById('products');
  const cartItemsContainer = document.getElementById('cart-items');
  const cart = [];

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <img src ="${product.image}">
      <p><s>$50.00</s> $${product.price}</p>
      <button class = "addCart" onclick="addToCart(${product.id})">Add to Cart</button>
      <div class="popup">${product.description}</div>
    `;
    productsContainer.appendChild(productElement);
  });
  
  function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    if (product) {
      cart.push(product);
      saveCart();
      updateCart();
    }
  }
  
  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function updateCart() {
    cartItemsContainer.innerHTML = ''; // Clear previous items
  
    let totalCost = 0;
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.textContent = `${item.name} - $${item.price}`;
      totalCost += item.price;
  
      cartItemsContainer.appendChild(cartItem);
    });
  
    // Display total cost
    const totalElement = document.createElement('div');
    totalElement.classList.add('total');
    totalElement.textContent = `Total: $${totalCost.toFixed(2)}`;
    cartItemsContainer.appendChild(totalElement);
  }
  
  
  // Display cart on initial page load
  updateCart();

  
/* Checkout */
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutMessage = document.getElementById('checkout-message');

checkoutBtn.addEventListener('click', () => {
  // Assume the payment is successful
  const paymentSuccessful = true;

  if (paymentSuccessful) {
    // Add processing fee to cart
    const processingFee = 20;
    cart.push({ name: 'Processing Fee', price: processingFee });

    // Display checkout message
    checkoutMessage.textContent = 'Success! Your order has been sent and paid for by the card on file.';
    checkoutMessage.style.color = 'green';
    checkoutMessage.style.display = 'block';

    // Clear the cart
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    // Update the cart display
    updateCart();
  } else {
    checkoutMessage.textContent = 'Payment failed. Please try again.';
    checkoutMessage.style.display = 'block';
  }
});

/* Dropdown menu */
document.addEventListener("DOMContentLoaded", function() {
    let dropdowns = document.getElementsByClassName("dropdown");
    
    for (let i = 0; i < dropdowns.length; i++) {
      let dropdown = dropdowns[i];
      let button = dropdown.querySelector(".dropbtn");
      let content = dropdown.querySelector(".dropdown-content");
      
      button.addEventListener("click", function() {
        content.classList.toggle("show");
      });
    }
  });

/* toggle */
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    // Add a delay before redirecting to show the animation
    setTimeout(() => {
      window.location.href = 'products-light.html'; // Redirect to light mode page
    }, 400); // Match the transition duration
  }
  else{
    // Add a delay before redirecting to show the animation
    setTimeout(() => {
      window.location.href = 'products.html'; // Redirect to dark mode page
    }, 400); // Match the transition duration
  }
});