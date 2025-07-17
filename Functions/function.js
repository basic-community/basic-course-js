// fungsi tanpa parameter
function greet() {
    console.log("Hello, World!");
}

// memanggil fungsi greet
greet();

// fungsi dengan parameter
function greetUser(nama) {
    console.log(`Hello, ${nama}!`);
}

// memanggil fungsi greetUser dengan argumen
greetUser("Hakim");

// fungsi dengan beberapa parameter
function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}
// memanggil fungsi luasPersegiPanjang dengan argumen
const panjang = 5;
const lebar = 3;
const luas = luasPersegiPanjang(panjang, lebar);
console.log(`Luas persegi panjang dengan panjang ${panjang} dan lebar ${lebar} adalah ${luas}.`);

