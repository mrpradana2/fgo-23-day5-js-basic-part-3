// soal no 2 - program calculator
const angka1 = 20;
const angka2 = 23;
const operator = "*";

function calculator(angka1, angka2, operator) {
  //    validasi input angka
  if (typeof angka1 !== "number" || typeof angka2 !== "number") {
    return console.log("Input yang anda masukkan bukan angka");
  }

  //   validasi input operator
  if (
    operator !== "*" &&
    operator !== "/" &&
    operator !== "+" &&
    operator !== "-"
  ) {
    return console.log(`Tanda ${operator} bukan operator matematika`);
  }

  //   jika semua input benar, maka jalankan fungsi berikut ini:
  if (operator === "*") {
    console.log(
      `Hasil perkalian dari ${angka1} dan ${angka2} adalah ${angka1 * angka2}`
    );
  } else if (operator === "/") {
    console.log(
      `Hasil pembagian dari ${angka1} dan ${angka2} adalah ${angka1 / angka2}`
    );
  } else if (operator === "+") {
    console.log(
      `Hasil penjumlahan dari ${angka1} dan ${angka2} adalah ${angka1 + angka2}`
    );
  } else {
    console.log(
      `Hasil pengurangan dari ${angka1} dan ${angka2} adalah ${angka1 - angka2}`
    );
  }
}

calculator(angka1, angka2, operator);
