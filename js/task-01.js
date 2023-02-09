let categoriesList = document.querySelector("#categories");

let categoriesListItems = categoriesList.querySelectorAll(".item");

console.log("Number of categories: ", categoriesListItems.length);

categoriesListItems.forEach((category) => {
  let categoryName = category.querySelector("h2");
  let categoryElements = category.querySelectorAll("li");
  console.log("Category: ", categoryName.textContent);
  console.log("Elements: ", categoryElements.length);
});
