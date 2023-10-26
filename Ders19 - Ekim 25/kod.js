// let sayac = 1;

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 == 0) {
//     console.log(sayac + ".Sayı: " + i);
//     sayac++;
//   }
// }

// for (let i = 1, j = 1; i <= 20; i++) {
//   if (i % 3 == 0) {
//     console.log(j + ".Sayı: " + i);
//     j++;
//   }
// }

//--------------------------------

let dizi1 = ["tugay", "esma", "emir"];
dizi1.push("tolga");

// dizi1.push("tUgAY");

// for (let i = 0; i < dizi1.length; i++) {
//   console.log(dizi1[i]);
// }

for (let i = 0; i < dizi1.length; i++) {
  dizi1[i] = dizi1[i].toUpperCase();
}

console.log(dizi1);
