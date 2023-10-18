let name = "tugay";

let age = 20;
let isStudent = true;

function profilCheck(isim, yas) {
  console.log(isim + " hoşgeldin");
  if (yas < 18 && isStudent) {
    console.log("Lise öğrencisisin sanırım.");
  } else if (yas > 18 && yas < 25 && isStudent) {
    console.log("Üniversite öğrencisi");
  } else {
    console.log("Çalışan birey.");
  }
}

profilCheck("esma", 22);

profilCheck("tugay", 30);

profilCheck("emir", 15);
