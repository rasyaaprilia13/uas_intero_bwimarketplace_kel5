const vendorA = require("../VendorA/vendorA");
const vendorB = require("../VendorB/vendorB");
const vendorC = require("../VendorC/vendorC");

function integrateVendorA(data) {
  return data.map(item => ({
    id: item.kd_produk,
    nama: item.nm_brg,
    // Diskon 10% dan dibulatkan
    harga_final: Math.round(parseInt(item.hrg) * 0.9), 
    status: item.ket_stok === "ada" ? "Tersedia" : "Habis",
    sumber: "Vendor A"
  }));
}

function integrateVendorB(data) {
  return data.map(item => ({
    id: item.sku,
    nama: item.productName,
    harga_final: item.price,
    status: item.isAvailable ? "Tersedia" : "Habis", // Status tersedia/habis
    sumber: "Vendor B"
  }));
}

function integrateVendorC(data) {
  return data.map(item => ({
    id: item.id.toString(),
    // Jika kategori "Food", tambahkan label "(Recommended)"
    nama: item.details.name + (item.details.category === "Food" ? " (Recommended)" : ""),
    harga_final: item.pricing.base_price + item.pricing.tax,
    status: item.stock > 0 ? "Tersedia" : "Habis",
    sumber: "Vendor C"
  }));
}

// Fungsi utama untuk menggabungkan semua data vendor
function getAllProducts() {
  const dataA = integrateVendorA(vendorA);
  const dataB = integrateVendorB(vendorB);
  const dataC = integrateVendorC(vendorC);

  return dataA.concat(dataB, dataC);
}

// Export fungsi supaya bisa dipakai di server.js
module.exports = { getAllProducts };
