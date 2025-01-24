flightEntries = [
  [
    { time: "16:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "18:00", destination: "paramaribo (pbm)", flight: "py 993", airline: "surinam airways", status: "gate geopend"},
    { time: "18:10", destination: "london luton (ltn)", flight: "ezy 2160", airline: "easyjet", status: "gate sluit"},
    { time: "19:00", destination: "cairo (cai)", flight: "ms 758", airline: "egypt air", status: "vertrokken"},
    { time: "19:22", destination: "kos (kgs)", flight: "or 265", airline: "tui fly", status: "gate veranderd"},
    { time: "19:39", destination: "hurghada (hrg)", flight: "cnd 217", airline: "corendon dutch airlines", status: "gate geopend"},
    { time: "19:50", destination: "lyon (lys)", flight: "af 8423", airline: "air france", status: "gate geopend"},
    { time: "20:00", destination: "dublin (dub)", flight: "su 3406", airline: "aeroflot", status: "op schema"},
    { time: "20:10", destination: "belfast city airport (bhd)", flight: "su 3406", airline: "air france", status: "boarden gestart"},
    { time: "20:18", destination: "birmingham (bhx)", flight: "af 8423", airline: "flybe", status: "op schema"},
  ],

  [
    { time: "17:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "17:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "17:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "gate geopend"},
    { time: "17:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "gate geopend"},
    { time: "17:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "17:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "17:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "17:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "gate sluit"},
    { time: "17:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "17:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
  ],

  [
    { time: "18:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "18:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "gate sluit"},
    { time: "18:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "boarden gestart"},
    { time: "18:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
    { time: "18:20", destination: "dubai (dxb)", flight: "af 8423", airline: "air france", status: "vertrokken"},
  ],

]; // usually you'd fetch this from a web api

currentPage = 0; // usually you'd fetch this from a web api aswell

updateTable = (pageNumber) => {
  const table = document.getElementById("flights");

  const page = flightEntries[pageNumber];

  // Clear the current table
  const rows = table.rows.length;
  for (let i = rows - 1; i > 0; i--) {
    table.deleteRow(i);
  }

  // Populate the table
  for (let i = 0; i < page.length; i++) {

    // Insert the rows & cells
    const row = table.insertRow(i + 1);
    const time = row.insertCell(0);
    const destination = row.insertCell(1);
    const flight = row.insertCell(2);
    const airline = row.insertCell(3);
    const status = row.insertCell(4);

    // Insert the fetched data
    time.innerText = page[i].time;
    destination.innerText = page[i].destination;
    flight.innerText = page[i].flight;
    airline.innerText = page[i].airline;
    status.innerText = page[i].status;

    // Adjust the color on the status type
    switch(page[i].status) {
      case "vertrokken":
        status.style.color = "gray";
        break;
      case "gate geopend":
        status.style.color = "green";
        break;
      case "gate sluit":
        status.style.color = "red";
        break;
      case "op schema":
        status.style.color = "blue";
        break;
      case "boarden gestart":
        status.style.color = "#ff4d01";
        break;
      case "gate veranderd":
        status.style.color = "#ff4d01";
        break;
      default:
        status.style.color = "black";
    }
  }
}

// Renders an amount of pagination indicators based on the page count provided by the api.
renderPageButtons = () => {
  for (let i = 0; i < flightEntries.length; i++) {
    // render the indicator
    document.getElementById("pageNumbers").innerHTML += `<div id=\"pageNumber ${i}\">${i+1}</div>`;

    if (i === 0) {
      // we want to highlight the first indicator, because we start at the first page.
      document.getElementById(`pageNumber ${i}`).style.background = "yellow";
    }
  }
}

// Switches to the next page
// Updates the page indicator color
// Updates the table content
nextPage = () => {
  const previousPage = currentPage;

  if (currentPage !== flightEntries.length - 1) {
    // if current page is not the last page, continue
    currentPage += 1;
  }
  else {
    // start over
    currentPage = 0;
  }

  // paints the indicator of the current page yellow, previous page back to default
  document.getElementById(`pageNumber ${previousPage}`).style.background = "#ded6cb";
  document.getElementById(`pageNumber ${currentPage}`).style.background = "yellow";

  updateTable(currentPage);
}


