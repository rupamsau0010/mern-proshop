require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const cors = require("cors");
const color = require("colors");

const app = express();

// Connecting Database MongoDB...
connectDB();

app.get("/", (req, res) =>{
    res.send("API is running.")
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

app.use(cors());

app.listen(process.env.PORT || 5000, function(){
    console.log(`Server is running on port 5000 or ${process.env.PORT}`.yellow.bold);
});