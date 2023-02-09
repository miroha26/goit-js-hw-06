function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const collectionNumber = document.querySelector("input[type=number]");
const newBoxes = document.querySelector("#boxes");
const boxesCreationBtn = document.querySelector("button[data-create]");
const boxesDemolishBtn = document.querySelector("button[data-destroy]");

const createBoxes = (amount) => {
  let divElements = [];
  for (let i = 0; i < amount; i += 1) {
    let divWidth = 30 + i * 10;
    let divheight = 30 + i * 10;

    divElements.push(
      `<div style="width: ${divWidth}px; height: ${divheight}px; background-color:${getRandomHexColor()};"></div>`
    );
  }
  return divElements.join("");
};

boxesCreationBtn.addEventListener("click", (event) => {
  newBoxes.insertAdjacentHTML(
    "afterbegin",
    createBoxes(Number(collectionNumber.value))
  );
});
boxesDemolishBtn.addEventListener("click", (event) => {
  newBoxes.innerHTML = "";
});
