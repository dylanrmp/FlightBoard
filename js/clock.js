startClock = () => {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
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
