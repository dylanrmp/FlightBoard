setHeaderColor = (color) => {
  document.getElementById("headers").style.backgroundColor = color;
  document.getElementById("blue").style.backgroundColor = color;
}

setHeaderTextColor = (color) => {
  document.getElementById("headers").style.color = color;
}

setSpacerColor = (color) => {
  const elements = document.getElementsByClassName("gray");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = color;
  }
}

setRowColor = (color) => {
  const table = document.getElementById('flights');
  const rows = table.rows;

  for (let i = 1; i < rows.length; i++) {
    rows[i].style.backgroundColor = color;
  }
}

setRowTextColor = (textColor) => {
  const table = document.getElementById('flights');
  const rows = table.rows;

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].cells;

    for (let j = 0; j < cells.length; j++) {
      cells[j].style.color = textColor;
    }
  }
}
