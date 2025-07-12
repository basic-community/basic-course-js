const PI = 3.14159;
console.log("The value of PI is:", PI);

// PI = 3.14; // ERROR! Tidak bisa mengubah nilai dari const

const user = {
    nama: "Alice",
    usia: 25
};
console.log(`Nama saya ${user.nama} dan saya berusia ${user.usia} tahun.`);

user.umur = 30; // OK! Bisa mengubah properti dari objek yang dideklarasikan dengan const

// user = { nama: "Rina", umur: 30 }; // ERROR! Tidak bisa di-reassign objeknya

console.log(user); // Output: { nama: 'Dian', umur: 26 }