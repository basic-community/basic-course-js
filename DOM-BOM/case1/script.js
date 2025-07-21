// script.js
console.log("--- Studi Kasus 1: Penghitung Sederhana ---");

let count = 0; // Variabel untuk menyimpan nilai hitungan

// Mengambil referensi elemen DOM
const counterValueElement = document.getElementById('counterValue');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');

// Fungsi untuk memperbarui tampilan di DOM
function updateCounterDisplay() {
  counterValueElement.textContent = count;
}

// Menambahkan event listener ke tombol
incrementButton.addEventListener('click', () => {
  count++; // Menambah nilai count
  updateCounterDisplay(); // Memperbarui tampilan
  console.log("Nilai penghitung:", count);
});

decrementButton.addEventListener('click', () => {
  count--; // Mengurangi nilai count
  updateCounterDisplay(); // Memperbarui tampilan
  console.log("Nilai penghitung:", count);
});

// Inisialisasi tampilan awal
updateCounterDisplay();