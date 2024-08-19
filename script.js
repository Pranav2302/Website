document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.classList.add("scroll-to-top");
  scrollToTopBtn.innerHTML = "↑";
  document.body.appendChild(scrollToTopBtn);

  window.addEventListener("scroll", function () {
    navbar.classList.toggle("sticky", window.pageYOffset > 0);
    scrollToTopBtn.style.display = window.pageYOffset > 300 ? "block" : "none";
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
