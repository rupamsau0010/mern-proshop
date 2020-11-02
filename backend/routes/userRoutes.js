const express = require("express");
const router = express.Router();
const { getUser } = require("../controllers/userControllers")

router.post("/login", getUser);

module.exports = router;