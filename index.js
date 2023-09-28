document
  .querySelector(".navbar-collapse-btn")
  .addEventListener("click", function () {
    const collapseContent = document.querySelector(".navbar-collapse-content");

    collapseContent.classList.toggle("visible");
    this.classList.toggle("open");
  });

const navbarLinks = document.querySelectorAll(".navbar-link");

navbarLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const activeLinkClassName = "active";

    if (this.classList.contains(activeLinkClassName)) {
      return;
    }

    navbarLinks.forEach((item) => item.classList.remove(activeLinkClassName));

    this.classList.add("active");
  });
});
