// Sebuah lampu lalu lintas memiliki tiga status: Merah, Kuning, Hijau.
// Simulasikan perubahan status lampu secara berurutan dari Merah ke Kuning, lalu ke Hijau, dan kembali ke Merah.

const LampuMerah = "Merah";
const LampuKuning = "Kuning";
const LampuHijau = "Hijau";

let statusLampu = LampuMerah; // Status awal lampu adalah Merah
console.log(`Status lampu saat ini: ${statusLampu}`);

// --- Perubahan Status Pertama: Merah ke Kuning ---
console.log("\nSesaat lagi lampu akan berubah...");
statusLampu = LampuKuning; // Mengubah status ke Kuning
console.log("Status Lampu Sekarang:", statusLampu);

// --- Perubahan Status Kedua: Kuning ke Hijau ---
console.log("\nLampu akan segera berubah lagi...");
statusLampu = LampuHijau; // Mengubah status ke Hijau
console.log("Status Lampu Sekarang:", statusLampu);

// --- Perubahan Status Ketiga: Hijau ke Merah ---
console.log("\nLampu akan kembali ke Merah...");
statusLampu = LampuMerah; // Mengubah status kembali ke Merah
console.log("Status Lampu Sekarang:", statusLampu);