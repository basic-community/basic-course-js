//  Buat sebuah fungsi yang menerima objek pengguna (dengan properti firstName dan lastName) 
// dan mengembalikan string yang berisi nama lengkap dan inisialnya.

const user1 = {
    firstName: "Hakim",
    lastName: "Abdurrahman"
}

const user2 = {
    firstName: "John",
    lastName: "Doe"
}

function formatUser(user) {
    fullName = `${user.firstName} ${user.lastName}`;
    initials = `${user.firstName.charAt(0)}.${user.lastName.charAt(0)}.`;
    return `Nama Lengkap: ${fullName}, Inisial: ${initials}`;
}

console.log(formatUser(user1)); // Output: Nama Lengkap: Hakim Abdurrahman, Inisial: H.A.
console.log(formatUser(user2)); // Output: Nama Lengkap: John Doe, Inisial: J.D.