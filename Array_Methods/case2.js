// Diberikan array objek siswa, temukan siswa yang nilainya di atas atau sama dengan 75 ( dianggap lulus), 
// kemudian hitung rata-rata nilai mereka.

const daftarSiswa = [
  { nama: "Andi", nilai: 80 },
  { nama: "Budi", nilai: 65 },
  { nama: "Cici", nilai: 90 },
  { nama: "Dodi", nilai: 75 },
  { nama: "Eka", nilai: 70 },
];

// siswa yang nilainya diatas atau sama dengan 74
const lulus = daftarSiswa.filter((siswa) => siswa.nilai >= 75)
console.log("Siswa Lulus:")
lulus.forEach((siswa) => {
    console.log(`${siswa.nama} Nilai: ${siswa.nilai}`)
})

// rata-rata nilai:
const totalNilai = lulus.reduce((total, siswa) => total + siswa.nilai, 0);
const rataRataNilai = totalNilai / lulus.length;
console.log(`Rata-rata nilai siswa yang lulus: ${rataRataNilai.toFixed(2)}`);