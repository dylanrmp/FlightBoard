startClock = () => {
  const currentDate = new Date();
  document.getElementById("clock").innerText = currentDate.toLocaleTimeString();

  setTimeout(startClock, 1000);
}
