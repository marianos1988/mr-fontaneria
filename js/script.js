const toggleMenu = () => document.body.classList.toggle("open");

document.querySelector(".burger").addEventListener("click", toggleMenu);


Splitting();

setTimeout(() => {
  document.querySelector(".card-ga").focus();
}, 1500);
