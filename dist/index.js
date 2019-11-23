var incButton = document.getElementById("increment");
var decButton = document.getElementById("decrement");
var counterTag = document.getElementById("counter");
var count = 0;
var increment = function (value) {
    value += 1;
    count = value;
    counterTag.textContent = value.toString();
};
var decrement = function (value) {
    value -= 1;
    count = value;
    counterTag.textContent = value.toString();
};
incButton.addEventListener("click", function () { return increment(count); });
decButton.addEventListener("click", function () { return decrement(count); });
//# sourceMappingURL=index.js.map