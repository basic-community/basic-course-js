// Buat sebuah fungsi hitungTotal yang dapat menerima berapapun 
// jumlah angka sebagai argumen dan mengembalikan jumlah totalnya.
const sum = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);

};

const angka = [10, 20, 30, 40];
const total = sum(...angka);
console.log(`Total dari ${angka} adalah ${total}.`); // Output: Total dari 10,20,30,40 adalah 100.