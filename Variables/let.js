// let adalah cara lain untuk mendeklarasikan variabel di JavaScript.
// let memiliki scope yang lebih terbatas dibandingkan var, yaitu block scoped.

let kota = "Jakarta";
console.log(kota);

// let kota = "Bandung"; // ERROR! Tidak bisa dideklarasikan ulang dalam scope yang sama

kota = "Bandung"; // OK! Bisa diubah nilainya
console.log(kota);

// Contoh penggunaan let dalam blok
if (true) {
    let negara = "Indonesia";
    console.log(negara); // OK! Bisa diakses di dalam blok
}

// console.log(negara); // ERROR! Tidak bisa diakses di luar blok