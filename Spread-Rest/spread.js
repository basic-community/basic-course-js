// contoh menggabungkan dua array dengan spread operator
console.log("Contoh Spread Operator pada Array:");
console.log("\nMenggabungkan Array dengan Spread Operator\n");
const buah = ["apel", "jeruk", "mangga"];
const sayur = ["wortel", "bayam", "brokoli"];

const makanan = [...buah, ...sayur];
console.log(makanan); // Output: ["apel", "jeruk", "mangga", "wortel", "bayam", "brokoli"]

// contoh dengan menam
// bahkan elemen baru
const daftarBelanja = [...buah, "pisang", ...sayur, "tomat"];
console.log(daftarBelanja); // Output: ["apel", "jeruk", "mangga", "pisang", "wortel", "bayam", "brokoli", "tomat"]

// contoh membuat copy dari array
console.log("\nContoh Spread Operator untuk Membuat Copy Array\n");
const nomor = [1, 2, 3, 4, 5];
const copiedNomor = [...nomor];
console.log(copiedNomor); // Output: [1, 2, 3, 4, 5]

// menambahkan elemen baru ke dalam array yang sudah ada
copiedNomor.push(6,7);
console.log(copiedNomor); // Output: [1, 2, 3, 4, 5, 6]

// menggunakan elemen array sebagai parameter fungsi
console.log("\nContoh Spread Operator untuk Parameter Fungsi\n");
const sum = (a, b, c) => {
    return a + b + c;
}
const angka = [1, 2, 3];
const total = sum(...angka);
console.log(`Total dari ${angka} adalah ${total}.`); // Output: Total dari 1,2,3 adalah 6.

console.log("\nContoh Spread Operator pada Objek:\n");
// contoh menggabungkan dua objek dengan spread operator

const userProfile = {
    name: "Hakim",
    age: 30,
};
const userAddress = {
    city: "Jakarta",
    country: "Indonesia",
};

const user = {
    ...userProfile,
    ...userAddress,
}

console.log(user);

// jika ada properti dengan nama yang sama, yang terakhir akan menimpa yang sebelumnya
const userWithDuplicate = {
    ...userProfile,
    age: 35, // ini akan menimpa age dari userProfile
    ...userAddress,
};
console.log(userWithDuplicate);

// contoh membuat copy dari objek
const product = {
    id: 1,
    name: "Laptop",
    price: 15000000,   
}

const copiedProduct = { ...product };
console.log(copiedProduct); // Output: { id: 1, name: "Laptop", price: 15000000 }

// mengubah nilai dari properti tertentu
copiedProduct.price = 14000000;
console.log(copiedProduct); // Output: { id: 1, name: "Laptop", price: 14000000 }