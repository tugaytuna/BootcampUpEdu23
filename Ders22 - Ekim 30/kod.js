let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");

let button1 = document.getElementById("button1");

let loginFullName = document.getElementById("loginFullName");
let loginAge = document.getElementById("loginAge");
let loginEmail = document.getElementById("loginEmail");
let loginImage = document.getElementById("loginImage");

let title = document.getElementsByClassName("baslik1");

let users = [
  {
    username: "tugay",
    password: 1234,
    fullname: "Tugay Tuna",
    email: "tugay@outlook.com",
    isAdmin: true,
    age: 18,
    profilePic: "images/tugay.jpg",
    favorites: ["C#", "Javascript", "HTML"],
  },
  {
    username: "esma",
    password: 555,
    fullname: "Esma Sağlam",
    email: "esma@outlook.com",
    isAdmin: true,
    age: 20,
    profilePic: "images/esma.jpg",
    favorites: ["Javascript", "HTML", "CSS"],
  },
  {
    username: "emir",
    password: 888,
    fullname: "Emir Kabadayı",
    email: "emir@outlook.com",
    isAdmin: true,
    age: 19,
    profilePic: "images/emir.jpg",
    favorites: ["HTML", "CSS", "Python"],
  },
  {
    username: "tolga",
    password: 111,
    fullname: "Tolga Tuna",
    email: "tolga@outlook.com",
    isAdmin: false,
    age: 22,
    profilePic: "images/tolga.jpg",
    favorites: ["CSS", "Python", "Java"],
  },
  {
    username: "ahmet",
    password: 125,
    fullname: "Ahmet Tuna",
    email: "ahmet@outlook.com",
    isAdmin: false,
    age: 30,
    profilePic: "images/tugay.jpg",
    favorites: ["CSS", "Python", "Java"],
  },
];

function loginButtonClicked() {
  if (button1.innerText == "Giriş Yap") {
    for (let i = 0; i < users.length; i++) {
      if (
        usernameInput.value == users[i].username &&
        passwordInput.value == users[i].password
      ) {
        title[0].innerHTML = users[i].fullname + " Hoşgeldiniz!";

        loginFullName.innerText = users[i].fullname;
        loginAge.innerText = users[i].age;
        loginEmail.innerText = users[i].email;

        loginImage.setAttribute("src", users[i].profilePic);

        girisYap();
      }
    }
  } else if (button1.innerText == "Çıkış Yap") {
    location.reload();
  }
}

function girisYap() {
  usernameInput.remove();
  passwordInput.remove();

  button1.innerText = "Çıkış Yap";
  button1.style = "background-color: red;";
}
