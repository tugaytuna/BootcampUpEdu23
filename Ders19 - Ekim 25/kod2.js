let ciftSayilar = [];

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    ciftSayilar.push(i);
  }
}

for (let i = 0; i < ciftSayilar.length; i++) {
  if (ciftSayilar[i] % 3 == 0) {
    console.log(ciftSayilar[i]);
  }
}

// console.log(ciftSayilar);

let name = "tugay";
let crypName = "tugay";

for (let i = 0; i < name.length; i++) {
  crypName[i] = "j";

  console.log(crypName);
}

function cyrpt(ch) {
  switch (ch) {
    case "a":
      return "y";
    case "t":
      return "j";

    default:
      return "a";
  }
}
