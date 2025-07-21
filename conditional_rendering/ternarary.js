const suhu = 28
const cuaca = suhu > 25 ? "Panas" : "Normal";
console.log(`Cuaca hari ini adalah ${cuaca}.`); // Output: Cuaca

const isUserLoggedIn = true;
const statusLog = isUserLoggedIn ? "Anda sudah masuk." : "Silakan masuk terlebih dahulu.";
console.log(statusLog); // Output: Anda sudah masuk.

const cartItems = 4;
const cartMessage = cartItems > 0 ? `Anda memiliki ${cartItems} item di keranjang.` : "Keranjang Anda kosong.";
console.log(cartMessage); // Output: Keranjang Anda kosong.