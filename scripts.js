const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

// Toggle the navbar and toggle button styles on button click
toggleButton.addEventListener("click", (event) => {
  event.preventDefault();
  navbarLinks.classList.toggle("active");
  toggleButton.classList.toggle("active");
});

// Close the navbar when any link inside navbar-links is clicked
navbarLinks.addEventListener("click", () => {
  navbarLinks.classList.remove("active");
  toggleButton.classList.remove("active");
});

// Adjust scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const additionalOffset = 75;

      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - additionalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      console.error(`Element with ID ${targetId} not found.`);
    }
  });
});
