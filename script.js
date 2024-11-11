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


    // sponsor drop down
    const infoListItems = document.querySelectorAll('.info-list-item');

    infoListItems.forEach(item => {
      item.querySelector('h3').addEventListener('click', () => {
        item.classList.toggle('expanded');
      });
    });