// export variable
export const api = "https://api.basic.id"

// export function
export function tambah(a, b) {
  return a + b;
}

// export class
export class Calculator {
  constructor() {
    console.log("Calculator initialized");
  }

  kali(a, b) {
    return a * b;
  }
}

// kita juga bisa definisikan dahulu lalu diekspor
const buah = ["apel", "jeruk", "mangga"];
// export { buah as buahBuahan }; // jika ingin mengekspor dengan nama lain
export { buah };