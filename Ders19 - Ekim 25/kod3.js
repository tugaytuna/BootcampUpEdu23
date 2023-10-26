let name = "tugay";

let ogrenci1 = {
  name: "tugay",
  surname: "tuna",
  classNo: 1674,
  isActive: true,
  lessons: ["math", "science", "art"],
};

let ogrenci2 = {
  name: "esma",
  surname: "sağlam",
  classNo: 454,
  isActive: true,
  lessons: ["science", "art"],
};

console.log(ogrenci1.name);
console.log(ogrenci1["name"]);

let ogrenciler = [
  {
    name: "tugay",
    surname: "tuna",
    classNo: 1674,
    isActive: true,
    lessons: ["math", "science", "art"],
  },
  {
    name: "esma",
    surname: "sağlam",
    classNo: 454,
    isActive: true,
    lessons: ["science", "art"],
  },
];

// let ogrenciler2 = [ogrenci1, ogrenci2];

console.log(ogrenciler);

console.log(ogrenciler[1].name);
