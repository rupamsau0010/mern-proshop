const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({})
    res.json(products)
});

const getProductById = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id);

    if(product) {
        res.json(product);
    } else {
        console.log("I was here");
        res.json({ message: "Products not Found "});
    }
})

 module.exports = {getProducts, getProductById};