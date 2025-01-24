startProgressBar = (duration, pauseTime) => {
  const indicator = document.getElementById("indicator");

  // Enable the transition / fill animation
  indicator.style.transition = "width 5s linear";
  indicator.style.width = "100%";

  // Call this function after the provided duration.
  setTimeout(() => {

    // makes sure that the transition won't play backwards & indicator resets instantly.
    indicator.style.transition = "none";
    indicator.style.width = "0%";

    // Restart the progress bar after a short pause, without a pause the progress bar will break.
    setTimeout( () => {
      startProgressBar(duration, pauseTime);
    }, pauseTime);

  }, duration);
}
