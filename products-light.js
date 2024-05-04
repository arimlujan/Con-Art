

const products = [
    {
      id: 1,
      name: 'Comparison Prevention',
      description: 'The user struggles to compare products because features and prices are combined in a complex manner, or because essential information is hard to find.',
      more: 'comparison.html',
    },
    {
      id: 2,
      name: 'Confirmshaming',
      description: 'The user is emotionally manipulated into doing something that they would not otherwise have done.',
      more:'confirmshaming.html',
    },
    {
      id: 3,
      name: 'Disguised Ads',
      description: 'The user mistakenly believes they are clicking on an interface element or native content, but it\'s actually a disguised advertisement.',
      more: 'disguised.html',
    },
    {
      id: 4,
      name: 'Fake Scarcity',
      description: 'The user is pressured into completing an action because they are presented with a fake indication of limited supply or popularity.',
      more: 'scarcity.html',
    },
    {
      id: 5,
      name: 'Fake Social Proof',
      description: 'The user is misled into believing a product is more popular or credible than it really is, because they were shown fake reviews, testimonials, or activity messages.',
      more: 'socialproof.html',
    },
    {
      id: 6,
      name: 'Fake Urgency',
      description: 'The user is pressured into completing an action because they are presented with a fake time limitation.',
      more: 'urgency.html',
    },
    {
      id: 7,
      name: 'Forced Action',
      description: 'The user wants to do something, but they are required to do something else undesirable in return.',
      more: 'forced.html',
    },
    {
      id: 8,
      name: 'Hard to Cancel',
      description: 'The user finds it easy to sign up or subscribe, but when they want to cancel they find it very hard.',
      more: 'hard.html'
    },
    {
      id: 9,
      name: 'Hidden Costs',
      description: 'The user is enticed with a low advertised price. After investing time and effort, they discover unexpected fees and charges when they reach the checkout.',
      more: 'costs.html'
    },
    {
      id: 10,
      name: 'Hidden Subscription',
      description: 'The user is unknowingly enrolled in a recurring subscription or payment plan without clear disclosure or their explicit consent.',
      more: 'subscription.html'
    },
    {
      id: 11,
      name: 'Nagging',
      description: 'The user tries to do something, but they are persistently interrupted by requests to do something else that may not be in their best interests.',
      more: 'nagging.html'
    },
    {
      id: 12,
      name: 'Obstruction',
      description: 'The user is faced with barriers or hurdles, making it hard for them to complete their task or access information.',
      more: 'obstruction.html'
    },
    {
      id: 13,
      name: 'Preselection',
      description: 'The user is presented with a default option that has already been selected for them, in order to influence their decision-making.',
      more:'preselection.html'
    },
    {
      id: 14,
      name: 'Sneaking',
      description: 'The user is drawn into a transaction on false pretences, because pertinent information is hidden or delayed from being presented to them.',
      more: 'sneaking.html'
    },
    {
      id: 15,
      name: 'Trick Wording',
      description: 'The user is misled into taking an action, due to the presentation of confusing or misleading language.',
      more: 'wording.html'
    },
    {
      id: 16,
      name: 'Visual Interference',
      description: 'The user expects to see information presented in a clear and predictable way on the page, but it is hidden, obscured, or disguised.',
      more: 'visual.html',
    }
  ];
  
  const productsContainer = document.getElementById('products');
  
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <a href = ${product.more}><button class = "addCart">Learn More</button></a>
    `;
    productsContainer.appendChild(productElement);
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