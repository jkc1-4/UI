document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navLinkItems = document.querySelectorAll(".nav-links li a"); // Select all nav links

  // Toggle nav on hamburger click
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
  });

  // Close nav when clicking outside of it
  document.addEventListener("click", (event) => {
    const isClickInsideNav = navLinks.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    // If click is outside the nav links and not on hamburger, close nav
    if (!isClickInsideNav && !isClickOnHamburger) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("open");
    }
  });

  // Close nav when clicking on a nav link and navigate to the section
  navLinkItems.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("open");
    });
  });
});

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

$(document).ready(function () {
  let currentIndex = 0;
  const slides = $(".slider-slide");
  const dots = $(".dot");
  const totalSlides = slides.length;

  // Show the first slide
  slides.eq(currentIndex).show();
  dots.eq(currentIndex).addClass("active");

  // Function to update the current slide and dot
  function updateSlide(index) {
    slides.eq(currentIndex).hide(); // Hide current slide
    dots.eq(currentIndex).removeClass("active"); // Remove active class from current dot

    currentIndex = index; // Update the current index
    slides.eq(currentIndex).fadeIn(); // Show new slide
    dots.eq(currentIndex).addClass("active"); // Add active class to new dot
  }

  // Next button click
  $(".next").click(function () {
    updateSlide((currentIndex + 1) % totalSlides); // Move to the next slide
  });

  // Previous button click
  $(".prev").click(function () {
    updateSlide((currentIndex - 1 + totalSlides) % totalSlides); // Move to the previous slide
  });

  // Dot click functionality
  dots.each(function (index) {
    $(this).click(function () {
      updateSlide(index); // Update to the corresponding slide when dot is clicked
    });
  });
  setInterval(function () {
    updateSlide((currentIndex + 1) % totalSlides); // Automatically go to the next slide
  }, 4000); // 3000 milliseconds = 3 seconds
});
