let baslik = document.getElementById("baslik");
let altbaslik = document.getElementsByClassName("altbaslik");

let dizi1 = ["tugay", "esma", "emir", "tolga", "ahmet"];

// console.log(dizi1);

dizi1.push("esma");

function guncelle() {
  baslik.innerText = "Hoşgeldiniz";

  //   dizi1.sort();

  for (let i = 0; i < altbaslik.length; i++) {
    // if (dizi1[i] == null) {
    //   altbaslik[i].innerText = "Bulunamadı";
    // } else {
    //   altbaslik[i].innerText = dizi1[i].toUpperCase();
    // }

    altbaslik[i].innerText =
      dizi1[i] == null ? "Bulunamadı" : dizi1[i].toUpperCase();
  }
}

// altbaslik[0].innerText = "Deneme 1";
// altbaslik[1].innerText = "Deneme 2";
// altbaslik[2].innerText = "Deneme 3";
