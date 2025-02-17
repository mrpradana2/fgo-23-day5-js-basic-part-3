// const hobbies = ["Reading", "Hiking", "Gardening", "Swimming", "Gaming"];

// hobbies.sort((rigth, left) => {
//   if (rigth < left) return -1;
//   //   jika hasilnya negatif, maka posisi ditukar
//   if (rigth > left) return 1;
//   //   jika hasilnya positif, maka posisi tetap
//   return 0;
//   //   jika return 0, maka nilainya sama
// });

// console.log(hobbies);

// string literals
// digunakan untuk menempelkan sebuah ekspresi dalam sebuah string
// kegunaan
// multiline string

// const num1 = 4;
// const num2 = 7;

// // jika menggunakan string biasa
// console.log(
//   "BIlangan ke 1 adalah = " +
//     num1 +
//     "\n" +
//     "Bilangan ke 2 adalah = " +
//     num2 +
//     "\n" +
//     "Hasil kedua bilangan adalah " +
//     (num1 + num2)
// );

// jika menggunakan teplate literals
// console.log(
//   `Bilangan ke 1 adalah = ${num1}
// Bilangan ke 2 adalah = ${num2}
// Hasil kedua bilangan adalah ${num1 + num2}`
// );

// spread operator
// menggunakan operator titik tiga dan diikuti dengan nama array yang akan di copy atau digabungkan
// digunakan untuk mencopy atau menggabungkan element pada array
// const a = [1, 2];
// const b = [3, 4];

// const c = [...a, 0, ...b];
// console.log(c);

// mengcopy atau menggabungkan object
// const p1 = {
//   name: "Donny",
//   age: 20,
//   isMarried: true,
// };

// const p2 = {
//   name: "Bobby",
// };

// const p3 = {
//   ...p1,
//   gender: "male",
//   ...p2,
// };

// console.log(p3);

// distructuring

const animals = ["Buffalo", "Dog", "Goat", "Cat"];
const [a, b, c, d] = animals;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

const buah = ["Salak", "Mangga", "Jeruk", "Kelengkeng"];
const [e, f, ...sisa] = buah;
console.log(sisa);

const person = {
  name: "Bobby",
  //   lastName: "Pangestu",
  age: 23,
  isMarried: true,
};

const { lastName = "nama tidak ada", name: n, isMarried, ...sis } = person;

console.log(n);
console.log(isMarried);
console.log(sis);
console.log(lastName);
