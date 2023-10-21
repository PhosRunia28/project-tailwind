document.querySelector(".hamburger").addEventListener("click", showMenu);
const mobileMenu = document.getElementById("mobile-menu");

function showMenu() {
  this.classList.toggle("open");
  mobileMenu.classList.toggle("show");
  mobileMenu.classList.toggle("hide");
}
