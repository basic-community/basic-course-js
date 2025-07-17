// Buatlah sebuah fungsi yang menerima sebuah array objek belanja (setiap objek memiliki properti nama dan harga) 
// dan mengembalikan total harga dari semua item.

const keranjangBelanja = [
    { nama: "Buku", harga: 50000 },
    { nama: "Pensil", harga: 2000 },
    { nama: "Penghapus", harga: 3000 },
    { nama: "Penggaris", harga: 15000 },
    { nama: "Spidol", harga: 10000 }
];

function hitungTotal(keranjang) {
    let total = 0;
    for (let i = 0; i < keranjang.length; i++) {
        total += keranjang[i].harga;
    }
    return total;
}

// contoh penggunaan fungsi
const total = hitungTotal(keranjangBelanja);
console.log(`Total harga belanjaan adalah: Rp ${total}.`);

// contoh dengan object kosong
const keranjangKosong = [];
const totalKosong = hitungTotal(keranjangKosong);
console.log(`Total harga belanjaan kosong adalah: Rp ${totalKosong}.`);
