// Ambil data cuaca untuk Jakarta dari http://goweather.xyz/weather/jakarta 
// dan tampilkan suhu, kecepatan angin, dan deskripsi.

async function getWeather(city) {
    console.log(`Mengambil data cuaca untuk ${city}...`);
    const apiUrl = `http://goweather.xyz/weather/${city}`;

    try {
        console.log("Memulai permintaan data...");
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(`Data cuaca untuk ${city} berhasil diambil.`);
        console.log(`Suhu: ${data.temperature}`);
        console.log(`Kecepatan Angin: ${data.wind}`);
        console.log(`Deskripsi: ${data.description}`);
    } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data cuaca:", error.message);
    }
}

// Memanggil fungsi getWeather untuk Jakarta
getWeather("jakarta");
console.log("Permintaan cuaca telah diproses, tunggu beberapa saat untuk melihat hasilnya.");