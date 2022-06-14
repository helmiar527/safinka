const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const more = document.getElementById('more');
const body = document.getElementById('body');


if (more.addEventListener("click", e => {
  page1.classList.add('d-none');
  body.classList.remove('bg-purple');
  page2.classList.remove('d-none');
  body.classList.add('bg-purple-rgba');
  console.log("click");
}));