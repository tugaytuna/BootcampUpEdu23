let name = "esma";
let surname = "tuna";

// let x = 10;
// let y = 20;

let age = 20;
let isStudent = false;

function showMessage(isim) {
  if (isim == "tugay") {
    console.log("admin hoşgeldin!");
  } else {
    console.log("hoşgeldiniz " + isim);
  }
}

function topla(sayi1, sayi2) {
  console.log("Birinci sayı: ", sayi1);
  console.log("İkinci sayı: ", sayi2);
  console.log("Toplamları: " + (sayi1 + sayi2));
}

showMessage("asdasdasd");

topla(10, 15);

topla(25, 45);
