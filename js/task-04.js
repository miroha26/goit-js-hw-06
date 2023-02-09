let counterValue = 0;

const decreaseByOne = document.querySelector("button[data-action=decrement]");

const increaseByOne = document.querySelector("button[data-action=increment]");

let counter = document.querySelector("#value");

decreaseByOne.addEventListener("click", (event) => {
  counterValue -= 1;
  counter.textContent = counterValue;
  console.log(event);
});
increaseByOne.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
