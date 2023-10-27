let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");

let title = document.getElementsByClassName("baslik1");

let users = [
  {
    username: "tugaytuna",
    password: 1234,
    fullname: "Tugay Tuna",
    email: "tugay@outlook.com",
    isAdmin: true,
    age: 18,
    favorites: ["C#", "Javascript", "HTML"],
  },
  {
    username: "esma",
    password: 555,
    fullname: "Esma Sağlam",
    email: "esma@outlook.com",
    isAdmin: true,
    age: 20,
    favorites: ["Javascript", "HTML", "CSS"],
  },
  {
    username: "emir",
    password: 888,
    fullname: "Emir Kabadayı",
    email: "emir@outlook.com",
    isAdmin: true,
    age: 19,
    favorites: ["HTML", "CSS", "Python"],
  },
  {
    username: "tolga",
    password: 111,
    fullname: "Tolga Tuna",
    email: "tolga@outlook.com",
    isAdmin: false,
    age: 22,
    favorites: ["CSS", "Python", "Java"],
  },
];

function loginButtonClicked() {
  //   if (
  //     user1.username == usernameInput.value &&
  //     user1.password == passwordInput.value
  //   ) {
  //     title[0].innerHTML = user1.fullname + " Hoşgeldiniz!";
  //   } else if (
  //     user2.username == usernameInput.value &&
  //     user2.password == passwordInput.value
  //   ) {
  //     title[0].innerHTML = user2.fullname + " Hoşgeldiniz!";
  //   }

  for (let i = 0; i < users.length; i++) {
    if (
      usernameInput.value == users[i].username &&
      passwordInput.value == users[i].password
    ) {
      title[0].innerHTML = users[i].fullname + " Hoşgeldiniz!";
    }
  }
}
