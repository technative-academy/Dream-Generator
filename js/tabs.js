const tabs = [
  {
    image: "aliens-tea",
    caption: "Enjoy a sip with the extra-terrestrial!",
    value: "aliens",
  },
  {
    image: "candy-cane",
    caption: "Walk through this sweet woods!",
    value: "candy",
  },
  {
    image: "dragon",
    caption: "A dragon",
    value: "dragon",
  },
  {
    image: "spacerocket",
    caption: "A space adventure! Fly with Pete today!",
    value: "aliens",
  },
];

// Button elements from index.html
// const aliens = document.getElementById("aliens");
// const candy = document.getElementById("candy");
// const dragon = document.getElementById("dragon");
// const spacerocket = document.getElementById("spacerocket");

const displayServices = document.getElementById("display-services");

// Function to add event listener

// function createTab(object) {
//   // Create elements
//   const container = document.createElement("div");
//   const image = document.createElement("img");
//   const caption = document.createElement("figcaption");

//   // Appending image and caption to container
//   container.appendChild(image);
//   container.appendChild(caption);
// }

const serviceButtons = document.querySelectorAll(".services-buttons");

serviceButtons.forEach(addButtonListener);

function addButtonListener(serviceButtonElement) {
  serviceButtonElement.addEventListener("click", serviceButtonClick);
}

function serviceButtonClick(event) {
  let clickedButton = event.currentTarget;

  // Finding the specific element
  let elementSelector = `.service-details-${clickedButton.value}`;

  let clickedElement = document.querySelector(elementSelector);

  serviceButtons.forEach(updateClickedButtonState);

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
