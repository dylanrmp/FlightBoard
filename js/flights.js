flightEntries = [
  [
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
  ],

  [
    { time: "17:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
  ],

  [
    { time: "18:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
  ],

];

currentPage = 0;

updateTable = (pageNumber) => {
  const table = document.getElementById("flights");

  const page = flightEntries[pageNumber];

  const rows = table.rows.length;
  for (let i = rows - 1; i > 0; i--) {
    table.deleteRow(i);
  }

  for (let i = 0; i < page.length; i++) {
    const row = table.insertRow(i + 1);
    const time = row.insertCell(0);
    const destination = row.insertCell(1);
    const flight = row.insertCell(2);
    const airline = row.insertCell(3);
    const status = row.insertCell(4);

    time.innerText = page[i].time;
    destination.innerText = page[i].destination;
    flight.innerText = page[i].flight;
    airline.innerText = page[i].airline;
    status.innerText = page[i].status;
  }
}

renderPageButtons = () => {
  for (let i = 0; i < flightEntries.length; i++) {
    document.getElementById("pageNumbers").innerHTML += `<div id=\"pageNumber ${i}\">${i+1}</div>`;

    if (i === 0) {
      document.getElementById(`pageNumber ${i}`).style.background = "yellow";
    }
  }
}

nextPage = () => {
  const previousPage = currentPage;

  if (currentPage !== flightEntries.length - 1) {
    currentPage += 1;
  }
  else {
    currentPage = 0;
  }

  document.getElementById(`pageNumber ${previousPage}`).style.background = "#ded6cb";
  document.getElementById(`pageNumber ${currentPage}`).style.background = "yellow";

  updateTable(currentPage);
}


