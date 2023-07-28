const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("mobile-menu--active");
});

menu.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("navigation__link") ||
    e.target.classList.contains("social__link")
  ) {
    burger.classList.remove("burger--active");
    menu.classList.remove("mobile-menu--active");
  }
});
