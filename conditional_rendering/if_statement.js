// if statement adalah cara paling dasar dan umum untuk mengeksekusi blok kode hanya jika suatu kondisi terpenuhi.

const isUserLoggedIn = true;
const notificationCount = 5;

if (isUserLoggedIn) {
    console.log("Selamat datang kembali, pengguna!");
}
if (notificationCount > 0) {
    console.log(`Anda memiliki ${notificationCount} notifikasi baru.`);
} else {
    console.log("Tidak ada notifikasi baru.");
}

const role = "admin";
if (role === "admin") {
    console.log("Anda memiliki akses penuh ke sistem.");
} else if (role === "editor") {
    console.log("Anda dapat mengedit konten.");
} else {
    console.log("Anda hanya dapat melihat konten.");
}