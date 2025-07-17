// dengan satu paramter

const greetUser = (nama) => {
    return `Hello, ${nama}!`;
}
// memanggil fungsi greetUser dengan argumen
console.log(greetUser("Hakim"));

// fungsi dengan beberapa parameter
const tambah = (a, b) => {
    return a + b;
}
console.log(`Hasil penjumlahan 5 dan 3 adalah ${tambah(5, 3)}.`);

// tanpa parameter
const greet = () => {
    return "Hello, World!";
}
// memanggil fungsi greet
console.log(greet());