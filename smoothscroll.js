document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll(".menu a");

  // Smooth scrolling for menu links
  menuLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

  // Highlight active menu link based on scroll position
  window.addEventListener("scroll",() => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    menuLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });
});