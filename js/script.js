const { reviewData } = window;

// Get the container element where review cards will be appended
const container = document.getElementById('container');

// Function to generate a single review card
function generateReviewCard(review) {
  const card = document.createElement('div');
  card.classList.add('review-card');

  const name = document.createElement('h3');
  name.innerText = review.name;
  card.appendChild(name);

  const date = document.createElement('p');
  date.innerText = review.date;
  card.appendChild(date);

  const rating = document.createElement('p');
  rating.innerText = 'Rating: ';
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.innerHTML = i <= review.rating ? '&#9733;' : '&#9734;';
    rating.appendChild(star);
  }
  card.appendChild(rating);

  const reviewText = document.createElement('p');
  reviewText.innerText = review.reviewText;
  card.appendChild(reviewText);

  return card;
}

// Function to generate review cards from reviewData array
function generateReviewCards() {
  container.innerHTML = '';
  window.reviewData.forEach(review => {
    const card = generateReviewCard(review);
    br=document.createElement("br");
    container.appendChild(br);
    container.appendChild(card);
  });
}

// Call the function to generate initial review cards on page load
generateReviewCards();

const reviewForm = document.querySelector("#review-form");
const button=document.getElementById("button");
// Add an event listener to the form submit button
button.addEventListener("click", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the values from the form input elements
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
 
  const rating = parseInt(document.getElementById("rating").value);
  const reviewText = document.getElementById("review").value;
  if (name != "" && date != "" && rating !="" && reviewText !=""){
  // Create a new review object with the form input values
  const newReview = {
    name: name,
    date: date,
    rating: rating,
    reviewText: reviewText
  };
  
  
  reviewData.push(newReview);
  

  container.innerHTML = "";
  
  
  generateReviewCards();
  

  reviewForm.reset();
}
});
