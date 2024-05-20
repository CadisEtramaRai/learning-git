const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const number = document.querySelector(".number");
const substract = document.querySelector(".substraction");
const add = document.querySelector(".addition");
const span = document.querySelector(".number2");

let count = 0;
plus.addEventListener("click", function () {
  count++;
  number.innerHTML = count;
});
minus.addEventListener("click", function () {
  count--;
  number.innerHTML = count;
});
add.addEventListener("click", function () {
  count--;
  span.innerHTML = count;
});
/* this is an updated version to test version control and pulling the project */
