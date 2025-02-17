// hashMap
// bagaimana cara menggunakan hashmap menggunakan pengkondisian
// 1. Object

// const colorTable = {
//   red: "#ff0000",
//   blue: "#0000ff",
//   black: "#000000",
//   white: "#ffffff",
// };

const color = "green";
// const colorCode = colorTable[color];
// console.log(colorCode);

const colorMap = new Map();

colorMap.set("red", "#ff0000");
colorMap.set("blue", "#0000ff");
colorMap.set("white", "#ffffff");
colorMap.set("black", "#000000");

// colorMap.delete(color);

colorCode = colorMap.get(color);
console.log(colorCode);
// console.log(colorMap);
