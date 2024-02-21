// Global Variables
const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");

// Check user's preferred mode from local storage
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}

// Dark/Light mode toggle logic
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  // Save user's selected mode to local storage
  if (!body.classList.contains("dark")) {
      localStorage.setItem("mode", "light-mode");
  } else {
      localStorage.setItem("mode", "dark-mode");
  }
});

// Search box toggle logic
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

// Sidebar toggle logic
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

// Close sidebar if clicked outside
body.addEventListener("click", e => {
  let clickedElm = e.target;

  if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
      nav.classList.remove("active");
  }
});
