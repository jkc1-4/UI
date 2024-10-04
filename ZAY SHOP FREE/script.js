document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

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
