let n = Number(prompt("Enter number of rows"));

for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n; j++) {
    row += " *";
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let column = " *";
  for (let j = 0; j < n; j++) {
    column += " ";
  }
  column += " *";
  console.log(column);
}

for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n; j++) {
    row += " *";
  }
  console.log(row);
}
