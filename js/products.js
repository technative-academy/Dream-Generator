

//find search input
var searchInput = document.querySelector(".search");
searchInput.addEventListener("input", updateSearchValue);

// initial search value, which will be empty
var searchValue = "";

// check what will be searched
function updateSearchValue() {
	// trim() removes any spaces before/after the input
	// toLowerCase() makes the entered text lowercase
	searchValue = searchInput.value.trim().toLowerCase();

	//console.log("You searched for: " + searchValue);

	// show or hide // class created previously
	var productElements = document.querySelectorAll(".product");
	//loop through all products 
	productElements.forEach(showOrHideProduct);
}


function showOrHideProduct(productElement) {
	// if no search value is set, show the user
	if (searchValue.length === 0) {
		productElement.classList.remove("hide");

		// if a search term has been set,
		// only display the user if its name matches the search term
	} else {

		// get the name of the user from its user-name element
		var productName = productElement.querySelector(".product-name").textContent.toLowerCase();
		if (productName.includes(searchValue)) {
			productElement.classList.remove("hide");
		} else {
			productElement.classList.add("hide");
		}
	}
}




//show more button
document.addEventListener("DOMContentLoaded", function () {
	const productContainer = document.querySelector(".product-container");
	const showMoreButton = document.querySelector('.btn');
	const products = document.querySelectorAll(".product");
	const productsToShow = 6; // Change this value to the number of products you want to show initially
	let isShowingAll = false;

	// Hide products beyond the initial number
	//By using Array.from(products), we convert the NodeList into a true array, which allows us to use array methods like forEach() on it. 
	// Array.from() is a built-in JavaScript method that creates a new, shallow-copied Array instance from an array-like or iterable object.
	Array.from(products).forEach((product, index) => {
		if (index >= productsToShow) {
			product.style.display = "none";
		}
	});

	showMoreButton.addEventListener("click", function () {
		if (isShowingAll) {
			// If all products are already shown, hide the additional ones
			Array.from(products).forEach((product, index) => {
				if (index >= productsToShow) {
					product.style.display = "none";
				}
			});
			showMoreButton.textContent = "Show More";
			isShowingAll = false;
		} else {
			// If not all products are shown, display all of them
			Array.from(products).forEach(product => {
				product.style.display = "block";
			});
			showMoreButton.textContent = "Show Less";
			isShowingAll = true;
		}
	});
});
