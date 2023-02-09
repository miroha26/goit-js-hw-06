const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const listElement = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const elementIngredient = document.createElement("li");
  elementIngredient.textContent = ingredient;

  listElement.appendChild(elementIngredient);
});

ingredientsList.appendChild(listElement);
