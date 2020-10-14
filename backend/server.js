require("dotenv").config();

const express = require("express");
const products = require("./data/products");
const cors = require("cors");

const app = express();

app.get("/", (req, res) =>{
    res.send("API is running.")
});

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product);
});

app.use(cors());

app.listen(process.env.PORT || 5000, function(){
    console.log("Server is running on port 5000 or "+ process.env.PORT);
});