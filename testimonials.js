let reviewsContainer = document.getElementById('reviews-container');
let isLoading = false;
let reviewIndex = 0;

// Dummy review data
const reviews = [
    { rating: 5, comment: "This company's dark patterns are simply mind-blowing! They've helped me boost my sales like never before. A must-try for any business!" },
    { rating: 4, comment: "I'm impressed by the deceptive patterns used by this company. Their strategies are innovative and effective. My business has seen a significant improvement in conversions." },
    { rating: 5, comment: "I've never seen such clever marketing tactics! The fake urgency and scarcity tactics are so convincing, they create a sense of excitement among customers. Great job!" },
    { rating: 4, comment: "Their forced action technique is brilliant. It's subtle yet persuasive, making customers take action without feeling pressured. Highly recommended!" },
    { rating: 5, comment: "I'm blown away by the preselection strategy used by this company. It simplifies decision-making for customers and leads to more purchases. Fantastic work!" },
    { rating: 4, comment: "The disguised ads used by this company are seamless. They blend in perfectly with the content, making them highly effective. My ROI has improved significantly!" },
    { rating: 5, comment: "I can't thank this company enough for their hidden subscription model. It's so cleverly implemented that customers keep coming back for more. A game-changer for sure!" },
    { rating: 4, comment: "The visual interference technique used by this company is genius. It subtly guides customers towards the desired action without them even realizing it. Impressive!" },
    { rating: 5, comment: "The fake social proof strategy employed by this company is outstanding. It creates a sense of trust and credibility among customers, leading to more conversions. Well done!" },
    { rating: 4, comment: "Their sneaking tactic is so effective yet unobtrusive. It gently nudges customers towards a purchase decision without them feeling manipulated. Highly impressive!" },
    { rating: 5, comment: "The trick wording used by this company is incredibly persuasive. It plays on the customer's psychology and influences their decision-making. Truly remarkable!" },
    { rating: 4, comment: "The nagging technique used by this company is surprisingly effective. It creates a sense of urgency without being pushy. My sales have definitely seen an uplift!" },
    { rating: 5, comment: "I'm amazed by the fake scarcity tactic used by this company. It creates a sense of urgency that compels customers to act fast. My business has benefited greatly from it!" },
    { rating: 4, comment: "The hidden costs strategy employed by this company is clever. It helps maximize profits without customers feeling deceived. A smart approach to pricing!" },
    { rating: 5, comment: "Their hard to cancel feature is a game-changer. It ensures that customers stick around longer, leading to increased revenue. Great job!" },
    { rating: 4, comment: "The confirmshaming technique used by this company is cleverly designed. It subtly influences customers' decisions without being too aggressive. Impressive work!" },
    { rating: 5, comment: "The obstructive design used by this company is surprisingly effective. It creates just enough friction to make customers pause and reconsider, leading to more conversions. Well done!" },
    { rating: 4, comment: "Their forced action technique is pure genius. I've never seen such effective manipulation in action. Keep up the good work!" },
    { rating: 5, comment: "A game-changer for my business! Their preselection strategy made decision-making a breeze for my customers. My sales have skyrocketed since implementing it!" },
  ];  

function createReviewElement(review) {
  let reviewElement = document.createElement('div');
  reviewElement.classList.add('review');
  reviewElement.innerHTML = `
    <div class="rating">${'★'.repeat(review.rating)}</div>
    <div>${review.comment}</div>
  `;
  return reviewElement;
}

function loadMoreReviews() {
  if (isLoading) return;
  
  isLoading = true;
  let newReviews = [];
  for (let i = 0; i < 20; i++) {
    newReviews.push(reviews[reviewIndex]);
    reviewIndex = (reviewIndex + 1) % reviews.length; // Wrap around to the start
  }
  newReviews.forEach(review => {
    reviewsContainer.appendChild(createReviewElement(review));
  });
  isLoading = false;
}

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loadMoreReviews();
  }
});

// Initial load
loadMoreReviews();
  
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