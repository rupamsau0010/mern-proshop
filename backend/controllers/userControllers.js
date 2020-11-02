const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { use } = require("../routes/userRoutes");

const getUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })

    // Checking user exits or not...
    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: null
        });
    } else {
        res.status(401);
        throw new Error("Invalid Error or Password");
    }
});

module.exports = {getUser}