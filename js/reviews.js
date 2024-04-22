// add event listeners to review divs
var reviewButtonElements = document.querySelectorAll(".individual-reviews");
reviewButtonElements.forEach(addReviewButtonListener);

function addReviewButtonListener(reviewButtonElement) {
  reviewButtonElement.addEventListener("click", reviewButtonClick);
}

function reviewButtonClick(event) {
  var clickedReview = event.currentTarget;

  var detailsElementSelector =
    ".review-details-" +
    clickedReview.querySelector(".review-name").textContent.toLowerCase();

  //find this element
  var detailsElement = document.querySelector(detailsElementSelector);

  //remove selected state from all buttons
  reviewButtonElements.forEach(updateClickedButtonState);

  var reviewDetails = document.querySelectorAll(".review-quote");
  reviewDetails.forEach(updateReviewDetailState);

  detailsElement.classList.add("currently-selected-review");
  clickedReview.classList.add("currently-selected-review-button");
}

function updateClickedButtonState(reviewButtonElement) {
  reviewButtonElement.classList.remove("currently-selected-review-button");
}

function updateReviewDetailState(reviewDetailElement) {
  reviewDetailElement.classList.remove("currently-selected-review");
}
