function fullnameGenerator(name, surname) {
  //   let fullname = name + " " + surname;
  //   return fullname;

  let newName = textCapitalized(name);
  let newSurname = textCapitalized(surname);

  let title = titles(newName);

  return newName + " " + newSurname + " " + title;
}

function textCapitalized(text = "") {
  let textMod = text.toUpperCase();
  return textMod;
}

function titles(name) {
  switch (name) {
    case "TUGAY":
      return "BEY";
    case "ESMA":
      return "HANIM";
    case "EMİR":
      return "BEY";
    default:
      console.log("isim tanımlanmadı...");
  }
}

// console.log(textCapitalized("tuGaY"));

let fullname = fullnameGenerator("tuGaY", "TuNa");
let fullname2 = fullnameGenerator("Emİr", "kabadayı");
let fullname3 = fullnameGenerator("esma", "SağLam");

console.log("Hoşgeldiniz " + fullname);
console.log("Hoşgeldiniz " + fullname2);
console.log("Hoşgeldiniz " + fullname3);

console.log(fullnameGenerator("esma", "sağlam"));

function deneme1() {
  console.log("deneme");
}

//Arrow-Function
let deneme2 = () => {
  console.log("deneme2");
};

deneme2();
