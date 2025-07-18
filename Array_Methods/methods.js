const angka = [1, 2, 3, 4, 5];

console.log("Contoh penggunaan metode forEach:");
angka.forEach((num, index) => {
    console.log(`Indeks ${index}: ${num}`);
});

const buah = ["apel", "jeruk", "pisang", "mangga"];
buah.forEach((item, index) => {
    console.log(`Buah ke-${index + 1}: ${item}`);
});

console.log("\nContoh penggunaan metode map:");
const kuadrat = angka.map(num => num * num);
console.log("Hasil kuadrat:", kuadrat);

const produk = [
    { nama: "Laptop", harga: 10000000 },
    { nama: "Smartphone", harga: 5000000 },
    { nama: "Tablet", harga: 3000000 }
];

const namaProduk = produk.map(item => item.nama)
console.log("Nama produk:", namaProduk);

const hargaProduk = produk.map(item => item.harga);
console.log("Harga produk:", hargaProduk);

console.log("\nContoh penggunaan metode filter:");
const umur = [15, 20, 25, 30, 35];
const dewasa = umur.filter(num => num >= 18);
console.log("Umur dewasa:", dewasa);

const user = [
    {
        nama: "budi",
        status: "aktif"
    },
    {
        nama: "siti",
        status: "non-aktif"
    },
    {
        nama: "andi",
        status: "aktif"
    }
]

const userAktif = user.filter(item => item.status === "aktif");
console.log("User aktif:", userAktif);

console.log("Contoh penggunaan metode reduce:");
const total = angka.reduce((acc, num) => acc + num, 0);
console.log("Total angka:", total);

console.log("\nContoh penggunaan metode reduce:");
const totalHarga = produk.reduce((acc, item) => acc + item.harga, 0);
console.log("Total harga produk:", totalHarga);

console.log("\nContoh penggunaan metode find:");

const buku = [
  { id: 1, judul: "Harry Potter", penulis: "JK Rowling" },
  { id: 2, judul: "The Hobbit", penulis: "J.R.R. Tolkien" },
  { id: 3, judul: "Harry Potter", penulis: "JK Rowling" }, // Ada duplikat
];

const bukuID = buku.find((item => item.id == 2));
console.log("Buku dengan ID 2:", bukuID);

const bukuHp = buku.find((item => item.judul === "Harry Potter"));
console.log("Buku dengan judul 'Harry Potter':", bukuHp);

// mencari buku yang tidak ada
const bukuTidakAda = buku.find((item => item.judul === "Buku Tidak Ada"));
console.log("Buku yang tidak ada:", bukuTidakAda);

console.log("\nContoh penggunaan metode findIndex:");
const indexBuku = buku.findIndex(item => item.id === 2);
console.log("Index buku dengan ID 2:", indexBuku);

const indexHp = buku.findIndex(item => item.judul === "Harry Potter");
console.log("Index buku dengan judul 'Harry Potter':", indexHp);

console.log("\nContoh penggunaan metode some:");

const angkaCek = [1, 2, 3, 4, 5];
const genap = angkaCek.some(num => num % 2 === 0);
console.log("Apakah ada angka genap?", genap);

const over100 = angkaCek.some(num => num > 100);
console.log("Apakah ada angka lebih dari 100?", over100);

console.log("\nContoh penggunaan metode every:");
const nilai = [55, 75, 85, 90];
const semuaLulus = nilai.every(num => num >= 60);
console.log("Apakah semua nilai lulus?", semuaLulus);