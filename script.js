

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

// top slider js 
const slideContainer = document.querySelector('.slider');
const sliderText = document.querySelector('.slider--text');
const btnLeft = document.querySelector('.slider__btn-left');
const btnRight = document.querySelector('.slider__btn-right');

const sliderImages = [
  {
      src: './images/6.webp',
      text: 'Taste the magic'
  },
  {
      src: './images/4.webp',
      text: 'Taste the incredible'
  },
  {
      src: './images/7.webp',
      text: 'Taste the dream'
  }
];

let slideCounter = 0;

const startSlider = () => {
  // Set initial background image and text
  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
  ), url(${sliderImages[0].src})`;
  sliderText.innerHTML = sliderImages[0].text;
};

// Function to move to the next slide
function nextSlide() {
  if (slideCounter === sliderImages.length - 1) {
      slideCounter = -1;
  }
  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
  ),url(${sliderImages[slideCounter + 1].src})`;
  sliderText.innerHTML = sliderImages[slideCounter + 1].text;
  slideCounter++;
  slideContainer.classList.add('fadeIn');
  setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
  }, 1000);
}

// Set an interval to automatically move to the next slide every 5 seconds (adjust as needed)
let autoSlideInterval = setInterval(nextSlide, 5000);

// Stop the automatic sliding when the mouse is over the slider
slideContainer.addEventListener('mouseover', () => {
  clearInterval(autoSlideInterval);
});

// Resume automatic sliding when the mouse leaves the slider
slideContainer.addEventListener('mouseout', () => {
  autoSlideInterval = setInterval(nextSlide, 5000);
});

btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', function() {
  if (slideCounter === 0) {
      slideCounter = sliderImages.length;
  }
  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
  ),url(${sliderImages[slideCounter - 1].src})`;
  sliderText.innerHTML = sliderImages[slideCounter - 1].text;
  slideCounter--;
  slideContainer.classList.add('fadeIn');
  setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
  }, 1000);
});

document.addEventListener('DOMContentLoaded', startSlider);


// first animation 

// Get the reference to the text container element
const textContainer = document.getElementById('text-container');

// Array of texts to be displayed in a cycle
const texts = ["Learn HTML.", "Learn CSS.", "Learn Javascript.","Learn Python.","Learn PHP.","Learn React.","Learn Bootstrap."];

// Index to keep track of the current text
let currentTextIndex = 0;

// Function to update the text content
function updateText() {
  // Set the content of the text container to the current text
  textContainer.innerHTML = texts[currentTextIndex];

  // Move to the next text in the array, cycling back to the first one if needed
  currentTextIndex = (currentTextIndex + 1) % texts.length;
}

// Call updateText initially
updateText();

// Update text every 3 seconds (adjust as needed)
setInterval(updateText, 3000);
