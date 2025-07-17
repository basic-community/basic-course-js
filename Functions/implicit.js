// implicit return dengan 1 para
const square = (x) => x * x;
// memanggil fungsi square
console.log(`Kuadrat dari 4 adalah ${square(4)}.`);

// implicit return dengan beberapa parameter
const multiply = (a, b) => a * b;
// memanggil fungsi multiply
console.log(`Hasil perkalian 5 dan 3 adalah ${multiply(5, 3)}.`);

// implicit return tanpa parameter
const sayHello = () => "Hello, World!";
// memanggil fungsi sayHello
console.log(sayHello());

// implicit return dengan objek
const createUser = (nama, umur) => ({ nama, umur });
// memanggil fungsi createUser
console.log(createUser("Rio", 21));