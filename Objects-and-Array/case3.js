// Buatlah daftar buku. Setiap buku memiliki judul, penulis, tahun terbit, dan status ketersediaan (tersedia/dipinjam). 
// Cari buku berdasarkan judul dan ubah statusnya.

const buku = [
    {
        judul: "Atomic Habits",
        penulis: "James Clear",
        tahunTerbit: 2018,
        status: "tersedia"
    },
    {
        judul: "The alchemist",
        penulis: "Paulo Coelho",
        tahunTerbit: 1988,
        status: "dipinjam"
    },
    {
        judul: "Psychology of Money",
        penulis: "Morgan Housel",
        tahunTerbit: 2020,
        status: "tersedia"
    },
    {
        judul: "Rich Dad Poor Dad",
        penulis: "Robert Kiyosaki",
        tahunTerbit: 1997,
        status: "tersedia"
    }   
]

console.log("Daftar Buku:");
console.log(buku);

// cari buku berdasarkan judul dan ubah statusnya
console.log("\nMencari buku berdasarkan judul dan mengubah statusnya:");
const judulDicari = "Rich Dad Poor Dad";
for (let i = 0; i < buku.length; i++) {
    if (buku[i].judul === judulDicari) {
        console.log(`Buku ditemukan: ${buku[i].judul} oleh ${buku[i].penulis}, Tahun Terbit: ${buku[i].tahunTerbit}, Status: ${buku[i].status}`);
        
        // ubah status buku menjadi 'tersedia'
        buku[i].status = "dipinjam";
        console.log(`Status buku "${buku[i].judul}" telah diubah menjadi: ${buku[i].status}`);
        break;
    }
}
console.log("\nSetelah mengubah status buku:");
console.log(buku);