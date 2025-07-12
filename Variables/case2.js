// Buat program yang menyimpan nama pengguna, email, dan status aktif. 
// Awalnya, pengguna aktif, tetapi setelah beberapa waktu, statusnya berubah menjadi tidak aktif.

const Username = "Hakim";
const Email = "hakim@basic.id";
let isActive = true; // Status awal pengguna adalah aktif

console.log('Profile Pengguna:');
console.log(`Nama: ${Username}`);
console.log(`Email: ${Email}`);
console.log(`Status Aktif: ${isActive ? 'Aktif' : 'Tidak Aktif'}`);

// Simulasikan perubahan status pengguna setelah beberapa waktu
isActive = false; // Status berubah menjadi tidak aktif
console.log('\nSetelah beberapa waktu, status pengguna berubah:');
console.log(`Nama: ${Username}`);
console.log(`Email: ${Email}`);
console.log(`Status Aktif: ${isActive ? 'Aktif' : 'Tidak Aktif'}`);