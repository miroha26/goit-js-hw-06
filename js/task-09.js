function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChangeBtn = document.querySelector(".change-color");
let currentColor = document.querySelector(".color");
const bodyBackground = document.body;

colorChangeBtn.addEventListener("click", () => {
  const color = getRandomHexColor();

  bodyBackground.style.backgroundColor = color;
  currentColor.textContent = color;
});
function order(words) {
  if (words === "") return "";
  const arr = words.split(" ");
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
  }
}
console.log(order("is2 Thi1s T4est 3a"));

