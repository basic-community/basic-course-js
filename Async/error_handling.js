// simulasi Promise yang gagal
async function fetchData() {
  // Simulasikan Promise yang gagal
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Ada masalah!")), 1000);
  });
}

async function handleFetchData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
    } finally {
        console.log("Operasi fetchData selesai.");
    }
}
handleFetchData();