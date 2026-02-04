document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     PAGE 1: TRACK ORDER (index.html)
     =============================== */

  const trackBtn = document.getElementById("track-btn");

  if (trackBtn) {
    const orderInput = document.getElementById("order-id");
    const errorMessage = document.getElementById("error-message");

    const REQUIRED_CODE = "080731";

    trackBtn.addEventListener("click", () => {
      const value = orderInput.value.trim();

      if (value === "") {
        errorMessage.textContent = "Please enter Order ID";
        return;
      }

      if (value !== REQUIRED_CODE) {
        errorMessage.textContent = "Invalid Order ID";
        return;
      }

      // ✅ Redirect to Valentine page
      window.location.href = "valentine.html";
    });
  }

  /* ===============================
     PAGE 2: VALENTINE (valentine.html)
     =============================== */

  const video = document.getElementById("valentine-video");

  if (video) {
    const videoWrapper = document.getElementById("video-wrapper");
    const questionSection = document.getElementById("valentine-content");
    const questionText = document.getElementById("question-text");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");

    video.addEventListener("ended", () => {
      videoWrapper.style.display = "none";
      questionSection.classList.remove("hidden");
    });

    yesBtn.addEventListener("click", () => {
      questionText.innerHTML = `
        If you’re comfortable…<br>
        let’s talk about this.
      `;
      document.querySelector(".button-group").style.display = "none";
    });

    noBtn.addEventListener("click", () => {
      noBtn.style.opacity = "0";
      setTimeout(() => {
        noBtn.style.display = "none";
      }, 400);
    });
  }

});
