const input = document.getElementById("input");
const button = document.getElementById("button");
const inputValue = document.getElementById("input-value");
const mirroedValue = document.getElementById("mirror-value");
input.addEventListener("keyup", () => {
  inputValue.innerText = input.value;
});

button.addEventListener("click", () => {
  if (input.value.length > 0) {
    mirroedValue.innerText = input.value.split("").reverse().join("");
  } else {
    mirroedValue.innerText = "";
  }
});