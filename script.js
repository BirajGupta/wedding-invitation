window.addEventListener("load", () => {
  const videoBox = document.getElementById("videoBox");
  const video = document.getElementById("heroVideo");
  const loader = document.getElementById("loader");

  // Animate video container
  setTimeout(() => {
    videoBox.classList.add("show");
  }, 1000);

  // Function to hide loader safely
  const hideLoader = () => {
    if (!loader.classList.contains("hide")) {
      loader.classList.add("hide");
    }
  };

  // MOST reliable event
  video.addEventListener("loadeddata", hideLoader, { once: true });

  // Fallback 1: video can play
  video.addEventListener("canplay", hideLoader, { once: true });

  // Fallback 2: absolute safety timeout
  setTimeout(hideLoader, 6000);

  // Enable sound on first interaction
  const enableSound = async () => {
    if (video.muted) {
      video.muted = false;
      try {
        await video.play();
      } catch (e) {}
    }
    document.removeEventListener("click", enableSound);
    document.removeEventListener("touchstart", enableSound);
  };

  document.addEventListener("click", enableSound);
  document.addEventListener("touchstart", enableSound);
});
