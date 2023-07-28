import { closeModal } from "./modal";
const submitBtn = document.getElementById('send');
const form = document.getElementById('reserve-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log(Array.from(new FormData(form)))
  closeModal();
  // await sendUserData(form);
})

// async function sendUserData(form) {
//   const response = await fetch('/', {
//     method: 'POST',
//     body: new FormData(form)
//   })

//   let res = await response.json()
//   console.log(res)
// }