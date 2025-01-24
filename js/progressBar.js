startProgressBar = (duration, pauseInterval) => {
  const indicator = document.getElementById("indicator");

  indicator.style.transition = "width 5s linear";
  indicator.style.width = "100%";

  setTimeout(() => {
    indicator.style.transition = "none";
    indicator.style.width = "0%";

    setTimeout( () => {
      startProgressBar(duration, pauseInterval);
    }, pauseInterval);

  }, duration);
}
