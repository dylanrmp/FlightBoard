const flightEntries = [
  { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
  { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
  { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
  { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
  { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
  { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
  { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
  { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
  { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
  { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"}
];

initializeTable = () => {
  const table = document.getElementById("flights");

  for (let i = 0; i < flightEntries.length; i++) {
    const row = table.insertRow(i + 1);
    const time = row.insertCell(0);
    const destination = row.insertCell(1);
    const flight = row.insertCell(2);
    const airline = row.insertCell(3);
    const status = row.insertCell(4);

    time.innerText = flightEntries[i].time;
    destination.innerText = flightEntries[i].destination;
    flight.innerText = flightEntries[i].flight;
    airline.innerText = flightEntries[i].airline;
    status.innerText = flightEntries[i].status;
  }
}
