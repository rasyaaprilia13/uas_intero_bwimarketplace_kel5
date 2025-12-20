const express = require("express");
const app = express();
const port = 3100;

// Import vendor
const vendorAData = require("./VendorA/vendorA");
const vendorBData = require("./VendorB/vendorB");
const vendorCData = require("./VendorC/vendorC");

// Import integrator
const { getAllProducts } = require("./integrator/integrator");

// Endpoint Vendor A
app.get("/vendorA", (req, res) => {
    res.json({
        status: "success",
        message: "Berhasil mengambil data dari Vendor A",
        total: vendorAData.length,
        data: vendorAData
    });
});

// Endpoint Vendor B
app.get("/vendorB", (req, res) => {
    res.json({
        status: "success",
        message: "Berhasil mengambil data dari Vendor B",
        total: vendorBData.length,
        data: vendorBData
    });
});

// Endpoint Vendor C
app.get("/vendorC", (req, res) => {
    res.json({
        status: "success",
        message: "Berhasil mengambil data dari Vendor C",
        total: vendorCData.length,
        data: vendorCData
    });
});

// Endpoint Integrasi /products
app.get("/products", (req, res) => {
    try {
        const allProducts = getAllProducts();
        res.json({
            status: "success",
            message: "Berhasil menggabungkan data dari semua vendor",
            total: allProducts.length,
            data: allProducts
        });
    } catch (error) {
        console.error("Error di integrator:", error);
        res.status(500).json({
            status: "error",
            message: "Gagal mengambil data",
            error: error.message
        });
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
