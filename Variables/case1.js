// Sebuah toko sedang mengadakan promo, memberikan diskon 15% untuk semua barang.
// Hitunglah harga akhir sebuah produk yang awalnya seharga Rp 150.000

const HargaAwal = 150000;
const Diskon = 0.15;

// Menghitung harga akhir setelah diskon
const HargaAkhir = HargaAwal - (HargaAwal * Diskon);

console.log(`Harga Awal: Rp ${HargaAwal}`);
console.log(`Diskon: ${Diskon * 100}%`);
console.log(`Harga Akhir: Rp ${HargaAkhir}`);