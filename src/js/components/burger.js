const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("mobile-menu--active");
});

menu.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("header__nav-item") ||
    e.target.classList.contains("header__icon") ||
    e.target.classList.contains("header__phone")
  ) {
    burger.classList.remove("burger--active");
    menu.classList.remove("mobile-menu--active");
  }
});
