// Menggunakan Rest Operator dalam Parameter Fungsi
console.log("\nContoh Rest Operator dalam Parameter Fungsi\n");

const tampilkanData = (...data) => {
    return data;
}

console.log(tampilkanData("Hakim", 30, "Jakarta"));
console.log(tampilkanData("Hallo"))

// Menggunakan Rest Operator dalam Array Destructuring
console.log("\nContoh Rest Operator dalam Array Destructuring\n");
const warna = ["Merah", "Hijau", "Biru", "Kuning"];
const [warna1, warna2, ...warnaLain] = warna;
console.log(warna1); // Output: Merah
console.log(warna2); // Output: Hijau
console.log(warnaLain); // Output: [ 'Biru', 'Kuning' ]

const [a, b, ...rest] = [1,2]
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(rest); // Output: [] karena tidak ada elemen lain

//  Menggunakan Rest Operator dalam Object Destructuring
console.log("\nContoh Rest Operator dalam Object Destructuring\n");
const productDetail = {
    id: 101,
    nama: "Smartphone",
    price: 3000000,
    brand: "BrandX",
    stock: 50
};

const {id, nama, ...otherDetails} = productDetail
console.log(id);
console.log(nama);
console.log(otherDetails); // Output: { price: 3000000, brand: 'BrandX', stock: 50 }
