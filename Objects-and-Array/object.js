// Ketika kita mendeklarasikan objek dengan const
// Kita tidak bisa mengalihkan (reassign) variabel objek tersebut ke objek lain. 
// Namun, kita bisa mengubah properti di dalam objek tersebut.

const user = {
    nama: "John",
    usia: 21,
    alamat: {
        jalan: "cendrawasih no.25",
        postal_code: "12345",
        kota: "South Tangerang",
        provinsi: "banten",
        negara: "Indonesia"
    },
    hobi: ["bermain game", "coding", "trading"],
    isMarried: false,
    greet: function() {
        return `Halo, nama saya ${this.nama}, dari kota ${this.alamat.kota}.`;
    }
}

console.log("Contoh print object\n")
console.log(user)

console.log("\nContoh akses properti object\n")

// cara mengakses properti object
console.log(user.nama); // akses properti nama
console.log(user["usia"]); // akses properti usia dengan bracket notation
console.log(user.alamat); // akses method greet
console.log(user.alamat.jalan); // akses properti jalan dalam objek alamat
console.log(user.hobi); // akses array hobi
console.log(user.hobi[0]); // akses elemen pertama dari array hobi
console.log(user.isMarried); // akses properti isMarried
console.log(user.greet()); // akses method greet


// menambah, mengubah, dan menghapus properti object
const produk = {
    nama: "Laptop",
    harga: 25000000,
    tag: ["elektronik", "komputer", "gadget"],
    tersedia: true,
}
console.log("\nContoh menambah, mengubah, dan menghapus properti object\n")

// menambah properti baru
produk.stok = 20;
produk.deskripsi = function() {
    return `Produk: ${this.nama}, Harga: ${this.harga}, Stok: ${this.stok}`;
}
console.log(produk);
console.log(produk.deskripsi());
// mengubah properti yang sudah ada
produk.harga = 24000000;
console.log(`Harga produk setelah diubah: ${produk.harga}`);
produk.deskripsi = function() {
    return `Nama produk: ${this.nama}, Harga: ${this.harga}, Stok: ${this.stok}`;
}
console.log(produk.deskripsi());

// menghapus properti
delete produk.tersedia;
console.log(produk);