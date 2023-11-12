let users = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
    username: "emir",
    password: 888,
    fullname: "Emir Kabadayı",
    email: "emir@outlook.com",
    isAdmin: true,
    age: 19,
    profilePic: "images/emir.jpg",
    favorites: ["HTML", "C#", "Python"],
  },
  {
    id: 3,
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
    id: 4,
    username: "ahmet",
    password: 125,
    fullname: "Ahmet Tuna",
    email: "ahmet@outlook.com",
    isAdmin: false,
    age: 30,
    profilePic: "images/tugay.jpg",
    favorites: ["CSS", "GO", "Java"],
  },
];

// let inputText1 = document.getElementById("inputText1");
let inputText2 = document.getElementById("inputText2");
let label1 = document.getElementById("label1");

function sorgula() {
  for (let i = 0; i < users.length; i++) {
    users[i].favorites.filter((x) => {
      if (inputText2.value == x) {
        // console.log(users[i].fullname);
        label1.innerText += users[i].fullname;
        label1.innerText += " ";
      }
    });
  }
}
