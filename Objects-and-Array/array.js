// Array dalam JavaScript adalah kumpulan nilai yang berurutan. 
// Setiap nilai dalam array disebut elemen, dan setiap elemen memiliki indeks numerik yang dimulai dari 0. 
// Array digunakan untuk menyimpan daftar item.

const angka = [1, 2, 3, 4, 5];
const buah = ["apel", "jeruk", "mangga", "pisang"];
const campuran = [1, "dua", true, null, { nama: "John" }, [1, 2, 3]];
console.log("Contoh print array\n");
console.log(angka);
console.log(buah);
console.log(campuran);

// Akses elemen array menggunakan indeks
console.log("\nContoh akses elemen array\n");

console.log(angka[0]); // akses elemen pertama
console.log(buah[2]); // akses elemen ketiga
console.log(campuran[4].nama); // akses properti nama dari objek dalam array campuran
console.log(campuran[5][1]); // akses elemen kedua dari array dalam array campuran

// menambah, mengubah, dan menghapus elemen array
console.log("\nContoh menambah, mengubah, dan menghapus elemen array\n");

// menambah elemen baru ke array
angka.push(6); // menambah elemen 6 ke akhir array angka
console.log(angka);

angka.unshift(0); // menambah elemen 0 ke awal array angka
console.log(angka);

// mengubah elemen berdasarkan indeks
buah[2] = "semangka"; // mengubah elemen ketiga menjadi semangka
console.log(buah);

// menghapus elemen dari array
angka.pop(); // menghapus elemen terakhir dari array angka
console.log(angka);
buah.shift(); // menghapus elemen pertama dari array buah
console.log(buah);

// Menghapus elemen di posisi tertentu (splice)
angka.splice(1, 3); // menghapus 3 elemen mulai dari indeks 1
console.log(angka);
