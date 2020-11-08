const express = require("express");
const router = express.Router();
const { getUser, getUserProfile, registerUser } = require("../controllers/userControllers");
const protect = require("../middlewares/authMiddleware");

router.post("/login", getUser)
router.post("/", registerUser)
router.get("/profile", protect, getUserProfile)

module.exports = router;