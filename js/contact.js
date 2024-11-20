document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navContainer = document.querySelector(".nav-container");
  
    hamburger.addEventListener("click", () => {
        navContainer.classList.toggle("show");
        hamburger.classList.toggle("active");
    });
  });