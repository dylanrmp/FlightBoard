startClock = () => {
  const currentDate = new Date();
  document.getElementById("clock").innerText = currentDate.toLocaleTimeString();

  setTimeout(startClock, 1000);
}

addZero = (time) => {
  if (time < 10) {
    time = "0" + time;
    return time;
  }

  else {
    return time;
  }
}
