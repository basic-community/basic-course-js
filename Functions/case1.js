// Buat empat fungsi terpisah (satu untuk setiap operasi: tambah, kurang, kali, bagi) 
// yang menerima dua angka sebagai input dan mengembalikan hasilnya. 
// Gunakan arrow function untuk semua fungsi.

const tambah = (a, b) => a + b;
const kurang = (a, b) => a - b;
const kali = (a, b) => a * b;

const bagi = (a, b) =>{
    if (b === 0) {
        return "Tidak dapat membagi dengan nol";
    }
    return a / b;
}

// Contoh penggunaan fungsi
console.log(`Hasil penjumlahan 5 dan 3 adalah ${tambah(5, 3)}.`);
console.log(`Hasil pengurangan 5 dan 3 adalah ${kurang(5, 3)}.`);
console.log(`Hasil perkalian 5 dan 3 adalah ${kali(5, 3)}.`);
console.log(`Hasil pembagian 5 dan 3 adalah ${bagi(5, 3)}.`);
console.log(`Hasil pembagian 5 dan 0 adalah ${bagi(5, 0)}.`);