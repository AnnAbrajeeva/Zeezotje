import { closeModal } from "./modal";
const form = document.getElementById('reserve-form');
const formContacts = document.getElementById('contacts__form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log(Array.from(new FormData(form)))
  closeModal();
})

formContacts.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log(Array.from(new FormData(form)))
})

// async function sendUserData(form) {
//   const response = await fetch('/', {
//     method: 'POST',
//     body: new FormData(form)
//   })

//   let res = await response.json()
//   console.log(res)
// }
