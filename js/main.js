const popupOverlay = document.querySelector(".popup-overlay");
const skipButton = document.querySelector(".popup-container .skip-button");
const visitButton = document.querySelector(".popup-container .visit-button");

let remainingTime = 5;
let allowedToSkip = false;
let popupTimer;

const showAd = () => {
  popupOverlay.classList.add("active");
  popupTimer = setInterval(() => {
    skipButton.innerHTML = `Skip in ${remainingTime}s`;
    remainingTime--;

    if (remainingTime < 0) {
      allowedToSkip = true;
      skipButton.innerHTML = "Skip";
      clearInterval(popupTimer);
    }
  }, 1000);
};

const skipAd = () => {
  popupOverlay.classList.remove("active");
  popupOverlay.remove(); // Remove the popup overlay
};

skipButton.addEventListener("click", () => {
  if (allowedToSkip) {
    skipAd();
  }
});

showAd(); // Show the popup overlay every time the page loads
