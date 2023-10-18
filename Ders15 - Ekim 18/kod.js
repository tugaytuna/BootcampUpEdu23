let name = "tugay";
let surname = "tuna";
let age = 19;
let isStudent = true;

function ciftmitekmi(sayi) {
  if (sayi % 2 == 0) {
    console.log("çifttir");
  } else {
    console.log("tektir");
  }
}

function carp(sayi1, sayi2 = 1) {
  //   let carpim = sayi1 * sayi2;
  //   return carpim;

  return sayi1 * sayi2;
}

console.log("Bu iki sayının çarpımı: " + carp(5, 2));
