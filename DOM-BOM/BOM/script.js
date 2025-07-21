console.log("--- BOM: Window Object ---");

// alert('Ini adalah pesan dari window.alert!'); // Akan muncul di browser

// const userConfirmed = confirm('Apakah Anda yakin?');
// console.log('User mengkonfirmasi:', userConfirmed); // true atau false

// const userName = prompt('Masukkan nama Anda:', 'Pengguna');
// console.log('Nama yang dimasukkan:', userName);

// Menggunakan setTimeout
console.log("Mulai hitungan mundur...");
setTimeout(() => {
  console.log("Waktu habis! (setelah 3 detik)");
}, 3000);

// Menggunakan setInterval (hati-hati, bisa looping terus!)
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log("Interval berjalan:", counter);
  if (counter >= 3) {
    clearInterval(intervalId); // Hentikan interval setelah 3 kali
    console.log("Interval dihentikan.");
  }
}, 1000);

console.log("\n--- BOM: Navigator Object ---");
console.log("User Agent:", navigator.userAgent);
console.log("Platform:", navigator.platform);

console.log("\n--- BOM: Location Object ---");
console.log("Current URL:", location.href);
console.log("Hostname:", location.hostname);
console.log("Pathname:", location.pathname);

// location.reload(); // Ini akan me-reload halaman jika dijalankan!

console.log("\n--- BOM: History Object ---");
console.log("Panjang History:", history.length);
// history.back(); // Akan kembali ke halaman sebelumnya jika ada