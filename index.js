const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const number = document.querySelector("span");

let count = 0;
plus.addEventListener("click", function () {
  count++;
  number.innerHTML = count;
});
minus.addEventListener("click", function () {
  count--;
  number.innerHTML = count;
});
/* this is an updated version to test version control and pulling the project */
