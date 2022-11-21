const frontEndBtn = document.querySelector(".front-end-tools-btn");
const mernStackBtn = document.querySelector(".mern-stack-btn");
const otherToolsBtn = document.querySelector(".other-tools-btn");
const toolsCollapse = document.querySelectorAll(".tools-collapse");
const navLink = document.querySelectorAll(".nav-link");

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

// for (let link of navLink) {
//   link.addEventListener("click", fixNavbarIssue);
// }
