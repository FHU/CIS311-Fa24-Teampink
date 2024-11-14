const carouselContainer = document.querySelector('.carousel-container');
const carouselImages = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const numImages = carouselImages.length;

function updateCarousel() {
  carouselContainer.style.transform = `translateX(-${currentIndex * (100 / numImages)}%)`;
}

function goToPreviousImage() {
  currentIndex = (currentIndex - 1 + numImages) % numImages;
  updateCarousel();
}

function goToNextImage() {
  currentIndex = (currentIndex + 1) % numImages;
  updateCarousel();
}

prevBtn.addEventListener('click', goToPreviousImage);
nextBtn.addEventListener('click', goToNextImage);

// Automatically move to the next image every 1 seconds
setInterval(goToNextImage, 1000);


function toggleReadMore() {
    const content = document.getElementById("extraContent");
    const button = document.getElementById("readMoreBtn");

    if (content.style.display === "none") {
      content.style.display = "block";
      button.textContent = "Read Less";
    } else {
      content.style.display = "none";
      button.textContent = "Read More";
    }
  }

