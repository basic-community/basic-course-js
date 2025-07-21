// script.js
console.log("\n--- Studi Kasus 2: Perubahan Tema ---");

const themeToggleButton = document.getElementById('themeToggleButton');
const bodyElement = document.body; // Objek body adalah properti dari document

themeToggleButton.addEventListener('click', () => {
  // Menggunakan classList.toggle untuk menambahkan/menghapus kelas
  bodyElement.classList.toggle('dark-theme');

  // Opsional: mengubah teks tombol
  if (bodyElement.classList.contains('dark-theme')) {
    themeToggleButton.textContent = 'Mode Terang';
  } else {
    themeToggleButton.textContent = 'Mode Gelap';
  }
  console.log("Tema diubah.");
});