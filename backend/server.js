require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes")
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const cors = require("cors");
const color = require("colors");

const app = express();
app.use(express.json())

// Connecting Database MongoDB...
connectDB();

app.get("/", (req, res) =>{
    res.send("API is running.")
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);

app.use(errorHandler);

app.use(cors());

app.listen(process.env.PORT || 5000, function(){
    console.log(`Server is running on port ${process.env.PORT} or 5000`.yellow.bold);
});