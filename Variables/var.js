// var adalah salah satu cara untuk mendeklarasikan variabel di JavaScript.
// var memiliki scope yang lebih luas dibandingkan let atau const.

// Berikut adalah contoh penggunaan var:
var nama1 = "John";

console.log(nama1);

var name2 = "Jane";

console.log(name2);


// problem di sini adalah var itu function scoped, bukan block scoped
// sehingga jika kita mendeklarasikan variabel di dalam blok if,
// variabel tersebut masih dapat diakses di luar blok tersebut.
if (true) {
    var usia = 30;
}
// contoh ini akan tetap mencetak nilai usia meskipun dideklarasikan di dalam blok if
// ini karena var tidak memiliki block scope
console.log(usia);

// combine with f string like syntax
var greeting = `Halo nama saya ${nama1} dan saya berusia ${usia} tahun.`;
console.log(greeting);