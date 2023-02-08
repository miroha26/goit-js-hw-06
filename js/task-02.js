const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

// 1=================================

// ingredients.map((el) => {
// const ingredient = document.createElement("li");
//   ingredient.textContent = el;

//   ingredientsList.append(ingredient);

//   return ingredient;
// })

// 2==================================

// const ingredientsMarkUpList = ingredients.map(ing => {
//   return `<li>${ing}</li>`
// }).join("")

// ingredientsList.insertAdjacentHTML("afterbegin",ingredientsMarkUpList )

// 3==================================
const listElement = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const elementIngredient = document.createElement("li");
  elementIngredient.textContent = ingredient;

  listElement.appendChild(elementIngredient);
});

ingredientsList.appendChild(listElement);

