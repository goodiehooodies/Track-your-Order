document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Tech section
  const techSection = document.getElementById("tech-section");
  const trackBtn = document.getElementById("trackBtn");
  const orderInput = document.getElementById("orderInput");
  const errorText = document.getElementById("errorText");

  // Valentine section
  const valentineSection = document.getElementById("valentine-section");
  const video = document.getElementById("valentineVideo");
  const choiceSection = document.getElementById("choice-section");
  const finalMessage = document.getElementById("final-message");

  // Buttons
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  const REQUIRED_CODE = "080731";

  trackBtn.addEventListener("click", () => {
    const input = orderInput.value.trim();

    if (input === "") {
      showError("Please enter your Order ID");
      return;
    }

    if (!/^\d+$/.test(input)) {
      showError("Order ID must contain only numbers");
      return;
    }

    if (input !== REQUIRED_CODE) {
      showError("Invalid Order ID");
      return;
    }

    errorText.classList.add("hidden");
    orderInput.style.borderColor = "#2a3566";

    techSection.classList.add("hidden");
    valentineSection.classList.remove("hidden");

    body.classList.remove("tech-theme");
    body.classList.add("valentine-theme");

    video.play().catch(() => {
      console.log("Autoplay blocked, user interaction required");
    });
  });

  video.addEventListener("ended", () => {
    choiceSection.classList.remove("hidden");
  });

  yesBtn.addEventListener("click", () => {
    choiceSection.classList.add("hidden");
    finalMessage.classList.remove("hidden");
  });

  noBtn.addEventListener("click", () => {
    noBtn.style.transition = "opacity 0.4s ease";
    noBtn.style.opacity = "0";
    setTimeout(() => {
      noBtn.style.display = "none";
    }, 400);
  });

  function showError(message) {
    errorText.textContent = message;
    errorText.classList.remove("hidden");
    orderInput.style.borderColor = "#ff6b6b";
  }
});
