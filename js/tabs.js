const displayServices = document.getElementById("display-services");
const serviceButtons = document.querySelectorAll(".services-buttons");

serviceButtons.forEach(addButtonListener);

// Add event listener to each tab
function addButtonListener(serviceButtonElement) {
  serviceButtonElement.addEventListener("click", serviceButtonClick);
}

function serviceButtonClick(event) {
  let clickedButton = event.currentTarget;

  // Finding the specific element
  let elementSelector = `.service-details-${clickedButton.value}`;

  let clickedElement = document.querySelector(elementSelector);

  // Removes currently selected class from all buttons
  serviceButtons.forEach(updateClickedButtonState);

  // Removes currently selected class from all details
  const serviceDetails = document.querySelectorAll(".service-details");
  serviceDetails.forEach(updateServiceDetails);

  clickedElement.classList.add("currently-selected-service");
  clickedButton.classList.add("currently-selected-button");
}

function updateClickedButtonState(serviceButtonElement) {
  serviceButtonElement.classList.remove("currently-selected-button");
}

function updateServiceDetails(serviceDetailElements) {
  serviceDetailElements.classList.remove("currently-selected-service");
}
