let bosDiv = document.getElementById("bosDiv");
let baslikH1 = document.getElementById("baslikH1");
let list1 = document.getElementById("list1");

list1.innerHTML = "";
list1.innerHTML += "<li>Js ile eklendi</li>";

let ornekdizi = ["Python", "Javascript", "Node.js", "Html", "Css", "Swift"];

for (let i = 0; i < ornekdizi.length; i++) {
  list1.innerHTML += "<li>" + ornekdizi[i] + "</li>";
}
