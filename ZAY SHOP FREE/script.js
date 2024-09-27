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
