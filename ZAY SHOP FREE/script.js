document.addEventListener("DOMContentLoaded", () => {
  // Example of adding functionality for search or cart
  const searchLink = document.querySelector('a[href="#search"]');
  const cartLink = document.querySelector('a[href="#cart"]');

  searchLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Search functionality coming soon!");
  });

  cartLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Cart functionality coming soon!");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".carousel-slide");
  let currentIndex = 0;

  function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    carousel.style.transform = `translateX(${-index * slideWidth}px)`;
  }

  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    showSlide(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    showSlide(currentIndex);
  });

  // Automatically show the first slide
  showSlide(currentIndex);
});
