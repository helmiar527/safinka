const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const more = document.getElementById('more');
const body = document.querySelector('body');

if (more.addEventListener("click", e => {
  body.classList.remove('bg-black');
  body.classList.add('bg-purple');
  page1.classList.add('d-none');
  page2.classList.remove('d-none');
  console.log("click");
}));