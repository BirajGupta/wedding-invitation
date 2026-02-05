window.addEventListener("load", () => {
  const videoBox = document.getElementById("videoBox");
  const video = document.getElementById("heroVideo");

  // Show video after animation
  setTimeout(() => {
    videoBox.classList.add("show");
  }, 1200);

  // Enable sound on first interaction
  const enableSound = async () => {
    video.muted = false;
    try {
      await video.play();
    } catch (e) {}
    document.removeEventListener("click", enableSound);
    document.removeEventListener("touchstart", enableSound);
  };

  document.addEventListener("click", enableSound);
  document.addEventListener("touchstart", enableSound);
});
