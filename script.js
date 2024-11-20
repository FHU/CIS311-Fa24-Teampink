var copy = document.querySelector('.logos-slide').cloneNode(true)
document.querySelector(".logos").appendChild(copy)



document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navContainer = document.querySelector(".nav-container");

  hamburger.addEventListener("click", () => {
      navContainer.classList.toggle("show");
      hamburger.classList.toggle("active");
  });
});






