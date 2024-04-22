// add event listeners to review divs
let reviewButtonElements = document.querySelectorAll(".individual-reviews");
reviewButtonElements.forEach(addReviewButtonListener);

function addReviewButtonListener(reviewButtonElement) {
  reviewButtonElement.addEventListener("click", reviewButtonClick);
}

function reviewButtonClick(event) {
  let clickedReview = event.currentTarget;

  let detailsElementSelector =
    ".review-details-" +
    clickedReview.querySelector(".review-name").textContent.toLowerCase();

  //find this element
  let detailsElement = document.querySelector(detailsElementSelector);

  //remove selected state from all buttons
  reviewButtonElements.forEach(updateClickedReviewButton);

  let reviewDetails = document.querySelectorAll(".review-quote");
  reviewDetails.forEach(updateReviewDetail);

  detailsElement.classList.add("currently-selected-review");
  clickedReview.classList.add("currently-selected-review-button");
}

function updateClickedReviewButton(reviewButtonElement) {
  reviewButtonElement.classList.remove("currently-selected-review-button");
}

function updateReviewDetail(reviewDetailElement) {
  reviewDetailElement.classList.remove("currently-selected-review");
}
