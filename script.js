// CHECKPOINT 1
const hargaAwal = 1000000
const persenDiskon = 25

const besarDiskon = hargaAwal * (persenDiskon / 100)
const hargaAkhir = hargaAwal - besarDiskon

console.log("Harga Akhirnya adalah: " + hargaAkhir)

// CHECKPOINT 2
const hasilPerhitungan = {
    potonganHarga: besarDiskon,
    hargaFinal: hargaAkhir
}

console.log("Potongan Harga: " + hasilPerhitungan.potonganHarga)
console.log("Harga Akhir: " + hasilPerhitungan.hargaFinal)

// CHECKPOINT 3
const hitungDiskon = (harga, diskon) => {
    if (diskon > 100) {
        console.log("diskon tidak boleh lebih dari 100%")
    }
    else {
        const besarDiskon = harga * (diskon / 100)
        const hargaAkhir = harga - besarDiskon
        return hargaAkhir
    }
}

const finalPrice = hitungDiskon(50000,10)
console.log("Final price: " + finalPrice)

// CHECKPOINT 3

const inputHarga = document.querySelector("#harga-awal")
const inputDiskon = document.querySelector("#diskon")
const tombolHitung = document.querySelector("#hitung-btn")
const hasil = document.querySelector("#hasil")

tombolHitung.addEventListener('click', () => {
    const hargaInput = inputHarga.value
    const diskonInput = inputDiskon.value

    if (hargaInput === "") {
        alert("Harga Harus diisi")
    }
    if (diskonInput === "") {
        alert("Diskon harus diisi")
    }

    const harga = Number(hargaInput)
    const diskon = Number(diskonInput)

    const hargaAkhir = hitungDiskon(harga, diskon)

    hasil.innerHTML = "Harga Akhir: Rp." + hargaAkhir
    hasil.style.display = "block"
})