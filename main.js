const toggler = document.querySelector(".fa-bars");
const navbar = document.querySelector(".hidden");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("active");
});