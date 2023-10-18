// function ciftmitekmi(sayi) {
//   if (sayi % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let ciftSayi;

// ciftSayi = ciftmitekmi(6);

// if (ciftSayi) {
//   console.log("çift sayıdır");
// } else {
//   console.log("tek sayıdır");
// }

let name = "tugay";
let surname = "tuna";

function fullnameGenerator(name, surname) {
  let fullname = name + " " + surname;
  return fullname;
}

let fullname1 = fullnameGenerator("tugay", "tuna");
let fullname2 = fullnameGenerator("esma", "sağlam");

console.log(fullname1);
console.log(fullname2);
