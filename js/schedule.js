document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMobile = document.querySelector(".nav-mobile");
  
    hamburger.addEventListener("click", () => {
        navMobile.classList.toggle("show");
        hamburger.classList.toggle("active");
    });
});