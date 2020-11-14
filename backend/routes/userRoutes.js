const express = require("express");
const router = express.Router();
const { getUser, getUserProfile, registerUser, updateUserProfile } = require("../controllers/userControllers");
const protect = require("../middlewares/authMiddleware");

router.post("/login", getUser)
router.post("/", registerUser)
router.get("/profile", protect, getUserProfile)
router.put("/profile", protect, updateUserProfile)

module.exports = router;