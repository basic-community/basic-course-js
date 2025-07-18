import { api, tambah } from "./utils.js";

import { Calculator as calc } from "./utils.js";

const calculator = new calc();

console.log(api);
console.log("Hasil penjumlahan 5 + 10:", tambah(5, 10));
console.log("Hasil perkalian 5 * 10:", calculator.kali(5, 10));
