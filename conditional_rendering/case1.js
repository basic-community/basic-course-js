// Anda ingin menampilkan pesan yang berbeda kepada pengguna berdasarkan status login 
// dan apakah mereka memiliki hak akses admin.

// Jika pengguna sudah login, tampilkan pesan selamat datang.
// Jika pengguna belum login, minta mereka untuk login.
// Jika pengguna adalah admin, tampilkan juga tombol "Dashboard Admin".

const isLoggedIn = true;
const isAdmin = true;

// contoh dengan if statement
if (isLoggedIn) {
    console.log("Selamat datang, pengguna!");
    if (isAdmin) {
        console.log("Anda memiliki akses admin. Silakan klik tombol 'Dashboard Admin'.");
    }
} else {
    console.log("Silakan login untuk melanjutkan.");
}

// contoh dengan ternary operator
const greetingMessage = isLoggedIn ? "Halo, pengguna!" : "Silakan login untuk melanjutkan.";
isAdmin ? console.log(`${greetingMessage} Dashboard Admin.`) : console.log(greetingMessage);