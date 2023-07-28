const modal = document.getElementById("form-modal");
const btn = document.querySelector(".header__btn");
const closeBtn = document.querySelector(".modal__close");

function openModal() {
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

export function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "auto";
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  openModal();
});

closeBtn.addEventListener('click', () => {
  closeModal();
})

modal.addEventListener("click", (e) => {
  if (e.target == modal) {
    closeModal();
  }
});
