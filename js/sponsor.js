function toggleAccordion(element) {
    const header = element;
    const content = header.nextElementSibling;
    const allContents = document.querySelectorAll('.read-more-content');

    // Close other accordions
    allContents.forEach((item) => {
        if (item !== content) {
            item.previousElementSibling.classList.remove('active');
            item.style.maxHeight = null;
            const otherIcon = item.previousElementSibling.querySelector('.toggle-icon');
            if (otherIcon) {
                otherIcon.textContent = '+'; // Reset other icons to '+'
            }
        }
    });

    // Toggle the current accordion
    header.classList.toggle('active');
    const icon = header.querySelector('.toggle-icon'); // Select the icon inside this header
    if (header.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        if (icon) icon.textContent = '-'; // Change to minus
    } else {
        content.style.maxHeight = null;
        if (icon) icon.textContent = '+'; // Change back to plus
    }
}

const icon = header.querySelector('.toggle-icon');
console.log('Icon before:', icon ? icon.textContent : 'No icon found');
if (header.classList.contains('active')) {
    if (icon) icon.textContent = '-';
} else {
    if (icon) icon.textContent = '+';
}
console.log('Icon after:', icon ? icon.textContent : 'No icon found');



document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMobile = document.querySelector(".nav-mobile");
  
    hamburger.addEventListener("click", () => {
        navMobile.classList.toggle("show");
        hamburger.classList.toggle("active");
    });
});