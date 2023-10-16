function sayiAnaliz(num1) {
  console.log("Senin sayın: ", num1);
  console.log("Sayının karesi: ", num1 * num1);

  if (num1 % 2 == 0) {
    console.log("Sayınız çifttir.");
  } else {
    console.log("Sayınız tektir.");
  }

  console.log("Bu sayı " + num1.toString().length + " basamaklıdır.");

  console.log("* Teşekkürler *");
}

// sayiAnaliz(156);

// sayiAnaliz(2549);

// sayiAnaliz(11);

function girisYap() {
  console.log("giriş yapılıyor...");
}

// let sayi = 12;

// console.log(sayi);
// console.log(sayi.toString().length);
