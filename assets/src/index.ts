const incButton: HTMLElement = document.getElementById("increment");
const decButton: HTMLElement = document.getElementById("decrement");
const counterTag: HTMLElement = document.getElementById("counter");

let count: number = 0;

const increment = (value: number): void => {
  value += 1;
  count = value;
  counterTag.textContent = value.toString();
};

const decrement = (value: number): void => {
  value -= 1;
  count = value;
  counterTag.textContent = value.toString();
};

incButton.addEventListener("click", () => increment(count));
decButton.addEventListener("click", () => decrement(count));
