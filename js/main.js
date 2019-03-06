const burger = document.querySelector(".burger");
const navBar = document.querySelector(".fa-bars");
const iconAngele = document.querySelector(".fa-angle-up");
const column = document.querySelector(".menu");

burger.addEventListener("click", function() {
  navBar.classList.toggle("off");
  iconAngele.classList.toggle("off");
  column.classList.toggle("off");
});
