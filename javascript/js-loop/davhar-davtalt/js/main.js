// 1. Давхар давталт 1

let count = "";
for (let i = 1; i <= 5; i++) {
  console.log((count += i + " "));
}

// 2. Давхар давталт 2

for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = i; j >= 1; j--) {
    row += j + " ";
  }
  console.log(row);
}
