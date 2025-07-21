// Anda memiliki data produk dan ingin membuat fitur untuk menambah, memperbarui, 
// atau menampilkan detail produk dengan fleksibel.

// Buat fungsi untuk menambahkan produk baru ke daftar yang sudah ada.
// Buat fungsi untuk memperbarui detail produk tertentu tanpa mengubah properti lain.
// Tampilkan detail produk, tapi pisahkan properti utama dari properti tambahan.

const products = [
    { id: 1, nama: "Laptop", price: 15000000, brand: "BrandA" },
    { id: 2, nama: "Smartphone", price: 8000000, brand: "BrandB" },
]

// 1. Fungsi untuk menambahkan produk
const addProduct = (existingProducts, newProduct) => {
    return [...existingProducts, newProduct];
}

const newProduct = { id: 3, nama: "Tablet", price: 5000000, brand: "BrandC" };
const updatedProducts = addProduct(products, newProduct);
console.log("Daftar Produk Setelah Penambahan:");
console.log(updatedProducts);

// 2. Fungsi untuk memperbarui produk
const updateProduct = (productList, productId, updatedDetails) => {
    return productList.map(product => {
        if (product.id === productId) {
            return { ...product, ...updatedDetails };
        }
        return product;
    });
};

const updatedProductDetails = { price: 14000000, brand: "BrandA Updated" };
const productsAfterUpdate = updateProduct(updatedProducts, 1, updatedProductDetails);
console.log("\nDaftar Produk Setelah Pembaruan:");
console.log(productsAfterUpdate);

// 3. Tampilkan detail produk dengan pisahkan properti utama dari properti tambahan
const displayProductDetails = (products) => {
    const {id, nama, ...additionalDetails} = products
    console.log(`ID: ${id}, Nama: ${nama}`);
    console.log("Detail Tambahan:", additionalDetails);
    
}
