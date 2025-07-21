const greeting = true;
const name = "John";

greeting && console.log(`Hello, ${name}!`); // Output: Hello, John!

const isAdmin = false;
isAdmin && console.log("Anda memiliki akses admin."); // Tidak ada output karena isAdmin adalah false

const Loading = true;
Loading && console.log("Loading, silakan tunggu..."); // Output: Loading, silakan tunggu...

const itemCount = 3;
itemCount > 0 && console.log(`Anda memiliki ${itemCount} item di keranjang.`); // Output: Anda memiliki 3 item di keranjang.