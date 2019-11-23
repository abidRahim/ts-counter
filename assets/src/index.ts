const incButton = document.getElementById("increment");
const decButton = document.getElementById("decrement");
const counterTag = document.getElementById("counter");

let count = 0;

const increment = value => {
  value += 1;
  count = value;
  counterTag.textContent = value;
};

const decrement = value => {
  value -= 1;
  count = value;
  counterTag.textContent = value;
};

incButton.addEventListener("click", () => increment(count));
decButton.addEventListener("click", () => decrement(count));
