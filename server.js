const express = require("express");
const app = express();
const port = 3100;

const vendorA = require("./VendorA/vendorA");
const vendorB = require("./VendorB/vendorB");
const vendorC = require("./VendorC/vendorC");


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});