// Buatlah daftar produk yang masing-masing memiliki nama, harga, dan kategori. 
// Tambahkan produk baru dan ubah harga produk yang sudah ada.

const produk = [
    {
        id: 'P001',
        nama: "Laptop",
        harga: 25000000,
        kategori: "Elektronik"
    },
    {
        id: 'P002',
        nama: "Smartphone",
        harga: 15000000,
        kategori: "Elektronik"
    },
    {
        id: 'P003',
        nama: "Kamera",
        harga: 5000000,
        kategori: "Fotografi"
    }
]

console.log("Produk awal:");
console.log(produk);

// Tambahkan produk baru
produk.push({
    id: 'P004',
    nama: "Tablet",
    harga: 7000000,
    kategori: "Elektronik"
});

const produkBaru = {
    id: 'P005',
    nama: "Smartwatch",
    harga: 3000000,
    kategori: "Aksesori"
};
produk.push(produkBaru);

console.log("\nSetelah menambahkan produk baru:");
console.log(produk);

// ubah harga produk yang sudah ada

produk[4].harga = 11000000; // ubah harga smartphone


for (let i = 0; i < produk.length; i++) {
    if (produk[i].id === 'P002') { // ubah harga smartphone
        produk[i].harga = 14000000;
    }
}

console.log("\nSetelah mengubah harga produk:");    
console.log(produk);