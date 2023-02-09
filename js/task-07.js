const inputID = document.querySelector("#font-size-control");

const textID = document.querySelector("#text");

inputID.addEventListener("input", () => {
  textID.style.fontSize = inputID.value + "px";
});
