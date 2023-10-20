let name = "tugay";

let baslik = document.getElementById("baslik");
let input1 = document.getElementById("inputName");

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
    case "EMIR":
      return "BEY";
    default:
      return "";
  }
}

function buttonClicked() {
  name = input1.value;
  name = textCapitalized(name);
  let title = titles(name);
  baslik.innerText = "Hoşgeldiniz " + name + " " + title;

  //   if (name == "ESMA") {
  //     baslik.className = "titleLogin";
  //   } else {
  //     baslik.className = "";
  //   }

  baslik.className = name == "ESMA" ? "titleLogin" : "";

  //   baslik.setAttribute("style", "color:red");
  //   baslik.style = "color: red";
}

// console.log(input1);
