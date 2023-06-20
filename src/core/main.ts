document.addEventListener("DOMContentLoaded", () => {
  const linkElement = document.querySelectorAll(".social__link");

  linkElement.forEach((link, index) => {
    const loadDelay = index * 240;

    setTimeout(() => {
      link.classList.add("show");
    }, loadDelay);
  });
});


