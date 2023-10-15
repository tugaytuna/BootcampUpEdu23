let name = "esma";
let surname = "tuna";

let fullName;

let age = 10;
let isAdmin = true;
let isValid = false;

//boolean

fullName = name + " " + surname;

name = "esma";
surname = "yılmaz";

console.log(fullName);
console.log(surname);

// age = age + 2;

// let con1 = age > 18;
// console.log(con1);

// if (age >= 18) {
//   console.log("sitemize girebilirsiniz");
// } else {
//   console.log("yaşınız 18'den küçüktür, siteye giremezsiniz!");
// }

if (age >= 18 || name == "tugay") {
  console.log("hoşgeldin siteye giriş yapabilirsiniz");
} else {
  console.log("siteye giriş yapamazsınız!");
}
