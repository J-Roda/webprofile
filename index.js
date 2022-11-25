const frontEndBtn = document.querySelector(".front-end-tools-btn");
const mernStackBtn = document.querySelector(".mern-stack-btn");
const otherToolsBtn = document.querySelector(".other-tools-btn");
const navbar = document.querySelector(".navbar");

const toolsCollapse = document.querySelectorAll(".tools-collapse");
const navItem = document.querySelectorAll(".nav-item");
const section = document.querySelectorAll("section");
const hiddenElementsLeft = document.querySelectorAll(".hidden-l");
const hiddenElementsRight = document.querySelectorAll(".hidden-r");

// A function that detects where is the active page
function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 120 < section[len].offsetTop) {}
  navItem.forEach((ltx) => ltx.classList.remove("active-link"));
  navItem[len].classList.add("active-link");
  navbarDarkBG();
}

// A function that makes navbar background dark
function navbarDarkBG() {
  if (
    navItem[1].classList.contains("active-link") ||
    navItem[2].classList.contains("active-link") ||
    navItem[3].classList.contains("active-link")
  ) {
    navbar.classList.add("bg-dark");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.remove("bg-dark");
    navbar.classList.add("bg-transparent");
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.isIntersecting
      ? entry.target.classList.add("show-section")
      : entry.target.classList.remove("show-section");
  });
});

hiddenElementsLeft.forEach((el) => observer.observe(el));
hiddenElementsRight.forEach((el) => observer.observe(el));
activeMenu();
window.addEventListener("scroll", activeMenu);

frontEndBtn.addEventListener("click", function () {
  if (toolsCollapse[1].classList.contains("show")) {
    toolsCollapse[1].classList.remove("show");
  }

  if (toolsCollapse[2].classList.contains("show")) {
    toolsCollapse[2].classList.remove("show");
  }
});

mernStackBtn.addEventListener("click", function () {
  if (toolsCollapse[0].classList.contains("show")) {
    toolsCollapse[0].classList.remove("show");
  }

  if (toolsCollapse[2].classList.contains("show")) {
    toolsCollapse[2].classList.remove("show");
  }
});

otherToolsBtn.addEventListener("click", function () {
  if (toolsCollapse[0].classList.contains("show")) {
    toolsCollapse[0].classList.remove("show");
  }

  if (toolsCollapse[1].classList.contains("show")) {
    toolsCollapse[1].classList.remove("show");
  }
});
