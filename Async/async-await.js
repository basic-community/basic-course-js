// Sebuah Promise yang mensimulasikan operasi yang memakan waktu

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function greet() {
    console.log("Loading, silakan tunggu...");
    await delay(2000); // Tunggu selama 2 detik
    console.log("Hello, World!");
}

// Memanggil fungsi greet
greet()
console.log("Fungsi greet telah dipanggil, tunggu beberapa saat untuk melihat hasilnya.");