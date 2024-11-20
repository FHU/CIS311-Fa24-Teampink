function toggleAccordion(element) {
    const header = element;
    const content = header.nextElementSibling;
    const allContents = document.querySelectorAll('.accordion');

    allContents.forEach((item) => {
        if (item !== content) {
            item.previousElementSibling.classList.remove('active');
            item.style.maxHeight = null;
        }
    });

    header.classList.toggle('active');
    if (header.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
    } else {
        content.style.maxHeight = null;
    }
}



document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navContainer = document.querySelector(".nav-container");
  
    hamburger.addEventListener("click", () => {
        navContainer.classList.toggle("show");
        hamburger.classList.toggle("active");
    });
});