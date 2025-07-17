// Buatlah objek mahasiswa yang memiliki nama, NIM, dan daftar mata kuliah yang diambil (masing-masing mata kuliah memiliki nama dan SKS). 
// Tampilkan data tersebut.

const mahasiswa = {
    nama: "Budi",
    NIM: "123456789",
    jurusam: "Informatika",
    mataKuliah: [
        { nama: "Intro to AI", SKS: 3 },
        { nama: "Web Development", SKS: 4 },
        { nama: "Database Systems", SKS: 3 }
    ],
    status: "Aktif",
};

// tampilkan data mahasiswa
console.log("Data Mahasiswa:");
console.log(`Nama: ${mahasiswa.nama}`);
console.log(`NIM: ${mahasiswa.NIM}`);
console.log(`Jurusan: ${mahasiswa.jurusam}`);
console.log(`Status: ${mahasiswa.status}`);
console.log("Mata Kuliah yang Diambil:");

for (let i = 0; i < mahasiswa.mataKuliah.length; i++) {
    const mk = mahasiswa.mataKuliah[i];
    console.log(`- ${mk.nama} (${mk.SKS} SKS)`);
}

// menambahkan mata kuliah baru
mahasiswa.mataKuliah.push({
    nama: "Mobile Development",
    SKS: 3
})
console.log("\nSetelah menambahkan mata kuliah baru:");
console.log("Mata Kuliah yang Diambil:");
for (let i = 0; i < mahasiswa.mataKuliah.length; i++) {
    const mk = mahasiswa.mataKuliah[i];
    console.log(`- ${mk.nama} (${mk.SKS} SKS)`);
}