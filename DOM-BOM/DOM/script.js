const appDiv = document.getElementById('app');
console.log(appDiv);

const title = document.createElement('title');
console.log(title.textContent);

const paragraph = document.createElement('p');
console.log(paragraph.length);

const button = document.getElementById('myButton');
console.log(button); // Menampilkan elemen button#myButton

console.log("\n--- DOM: Memanipulasi Konten ---");

title.textContent = "Selamat Datang di Web!"; // Mengubah teks
console.log(title.textContent); // Output: Selamat Datang di Web!

appDiv.innerHTML = '<h2>Konten Baru!</h2><p>Ini diganti semua.</p>'; // Mengganti seluruh konten HTML
console.log(appDiv.innerHTML);

button.setAttribute('disabled', 'true'); // Menambahkan atribut disabled
console.log(button.outerHTML); // Output: <button id="myButton" disabled="true">Klik Saya</button>

console.log("\n--- DOM: Memanipulasi Gaya ---");

title.style.color = "blue";
title.style.backgroundColor = "#f0f0f0";
console.log(title.outerHTML); // Output: <h1 class="title" style="color: blue; background-color: rgb(240, 240, 240);">Selamat Datang di Web!</h1>

console.log("\n--- DOM: Membuat & Menghapus Elemen ---");

const newParagraph = document.createElement('p');
newParagraph.textContent = "Ini paragraf yang baru dibuat JavaScript.";
appDiv.appendChild(newParagraph); // Menambahkan ke dalam div#app
console.log("Setelah menambah p baru:", appDiv.outerHTML);

// Menghapus elemen (contoh: mencoba menghapus button yang mungkin sudah diganti innerHTMLnya)
// Pastikan elemen ada sebelum dihapus!
const currentButton = document.getElementById('myButton'); // Cari lagi setelah innerHTML diubah
if (currentButton) {
  currentButton.remove(); // Cara modern menghapus elemen itu sendiri
  console.log("Tombol dihapus.");
} else {
  console.log("Tombol sudah tidak ada (mungkin karena innerHTML diubah).");
}

// Mengambil kembali button karena innerHTML appDiv sudah berubah
// Kita asumsikan ada button baru dengan id "actionButton" di HTML
// <button id="actionButton">Tekan Saya</button>
// Atau kita buat baru:
const actionButton = document.createElement('button');
actionButton.id = 'actionButton';
actionButton.textContent = 'Tekan Saya';
document.body.appendChild(actionButton); // Tambahkan ke body

console.log("\n--- DOM: Event Handling ---");

actionButton.addEventListener('click', () => {
  alert('Tombol ditekan!');
  actionButton.textContent = 'Sudah ditekan!';
});

// Anda bisa mengklik tombol di halaman HTML yang dirender
