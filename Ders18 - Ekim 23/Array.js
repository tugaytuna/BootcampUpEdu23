let name = "tugay";
let age = 18;
let isAdmin = true;

// Array

let dizi1 = ["tugay", "esma", "emir"];
let dizi2 = ["tugay", 18, true, "ahmet", 254];
let dizi3 = ["tugay", [1, 2, 5, 7, 9], "ahmet", 18];

dizi1.push("tolga");
// dizi1[3] = "tolga";

// dizi1.pop(); // son elemanı siler
// dizi1.shift(); // ilk elemanı siler

// console.log(dizi2.indexOf(254));  // 4

// console.log(dizi1.length);

// function diziGoster() {
//   console.log(dizi1[0]);
//   console.log(dizi1[1]);
//   console.log(dizi1[2]);
//   console.log(dizi1[3]);
// }

// diziGoster();

// for döngüler - loop

// for (değişken oluşturma; koşul ifadesi; koşulu bozan ifade)

// for (let i = 1; i <= 10; i++) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
// }

dizi1.push("ahmet");

dizi1[0] = "arda";

dizi1.push("deneme123");

for (let i = 0; i < dizi1.length; i++) {
  console.log(dizi1[i]);
}
