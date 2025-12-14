const express = require("express");
const app = express();
const port = 3100;

// Import vendor
const vendorAData = require("./VendorA/vendorA");
const vendorBData = require("./VendorB/vendorB");
const vendorCData = require("./VendorC/vendorC");

// Import integrator
const { getAllProducts } = require("./integrator/integrator");



app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
