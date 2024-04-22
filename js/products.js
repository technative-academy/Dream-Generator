//find search input
const searchInput = document.querySelector(".search");
// searchInput.addEventListener("input", updateSearchValue);

searchInput.addEventListener("input", function () {
  updateSearchValue();
  showOrHideProduct(); // Call the function to update product visibility
});

// initial search value, which will be empty
let searchValue = "";

// check what will be searched
function updateSearchValue() {
  // trim() removes any spaces before/after the input
  // toLowerCase() makes the entered text lowercase
  searchValue = searchInput.value.trim().toLowerCase();

  //console.log("You searched for: " + searchValue);

  // show or hide // class created previously
  const productElements = document.querySelectorAll(".product");
  //loop through all products
  productElements.forEach(showOrHideProduct);
}

// function showOrHideProduct(productElement) {
// 	// if no search value is set, show the user
// 	if (searchValue.length === 0) {
// 		productElement.classList.remove("hide");

// 		// if a search term has been set,
// 		// only display the user if its name matches the search term
// 	} else {

// 		// get the name of the user from its user-name element
// 		const productName = productElement.querySelector(".product-name").textContent.toLowerCase();
// 		if (productName.includes(searchValue)) {
// 			productElement.classList.remove("hide");
// 		} else {
// 			productElement.classList.add("hide");
// 		}
// 	}
// }

// Modify the function to add or remove the hidden class instead of directly changing the display style
function showOrHideProduct() {
  // loop through all products
  const productElements = document.querySelectorAll(".product");
  productElements.forEach((productElement) => {
    const productName = productElement
      .querySelector(".product-name")
      .textContent.toLowerCase();
    if (productName.includes(searchValue)) {
      productElement.classList.remove("hide");
    } else {
      productElement.classList.add("hide");
    }
  });
}

//show more button
document.addEventListener("DOMContentLoaded", function () {
  //const productContainer = document.querySelector(".product-container");
  const showMoreButton = document.querySelector(".btn");
  const products = document.querySelectorAll(".product");
  const productsToShow = 6; // Change this value to the number of products you want to show initially
  let isShowingAll = false;
  const productArray = Array.from(products);

  // Hide products beyond the initial number
  //By using Array.from(products), we convert the NodeList into a true array, which allows us to use array methods like forEach() on it.
  // Array.from() is a built-in JavaScript method that creates a new, shallow-copied Array instance from an array-like or iterable object.
  productArray.forEach((product, index) => {
    if (index >= productsToShow) {
      product.classList.add("hide"); // Adding "hide" class
    }
  });

  showMoreButton.addEventListener("click", function () {
    if (isShowingAll) {
      // If all products are already shown, hide the additional ones
      productArray.forEach((product, index) => {
        if (index >= productsToShow) {
          product.classList.add("hide");
        }
      });

      isShowingAll = false;
    } else {
      // If not all products are shown, display all of them
      productArray.forEach((product) => {
        product.classList.remove("hide");
      });
      showMoreButton.textContent = "Show Less";
      isShowingAll = true;
    }
  });
});

// // //Show the number of products
// let products = document.querySelectorAll('.product')
// // //here is the span where we display nnumber of products
// // // let productsDisplay = document.querySelector('.display-products-number');

// let numberOfProducts = products.length;

// // document.querySelector('.display-products-number').textContent = ` ${products.length} products found`;

// function updateProductCount() {
// 	const filterValue = document.querySelector('.search').value.toLowerCase();
// 	const products = document.querySelectorAll('.product');
// 	//const productArray = Array.from(products);

// 	let count = 0;

// 	products.forEach(product => {
// 		const productName = product.dataset.name.toLowerCase();
// 		if (productName.includes(filterValue)) {
// 			count++;
// 		}
// 	});

// 	document.querySelector('display-products-number').textContent = `Number of products displayed: ${count}`;
// }

// // Call the function and listen for input changes
// updateProductCount();
// document.querySelector('.search').addEventListener('input', updateProductCount);
