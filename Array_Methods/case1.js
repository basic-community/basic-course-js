//  Diberikan daftar item belanja, tampilkan hanya item yang belum dibeli, 
// kemudian hitung total harga dari item yang belum dibeli tersebut.
const daftarBelanja = [
    { nama: "Buku", harga: 50000, dibeli: false },
    { nama: "Pensil", harga: 2000, dibeli: true },
    { nama: "Penghapus", harga: 5000, dibeli: false },
    { nama: "Penggaris", harga: 15000, dibeli: true },
    { nama: "Spidol", harga: 10000, dibeli: false }
];

// item yang belum dibeli
const belumdibeli = daftarBelanja.filter(item =>item.dibeli === false);
console.log("Item yang belum dibeli:", belumdibeli);

const totalBelumDibeli = belumdibeli.reduce((acc, item) => acc + item.harga, 0);
console.log("Total harga item yang belum dibeli:", totalBelumDibeli);