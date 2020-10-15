const bcrypt = require("bcryptjs");

const users = [
    {
        name: "Admin User",
        email: "rupam@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name: "Jhon Deo",
        email: "rupamsa@gmail.com",
        password: bcrypt.hashSync("123456", 10)
    },
    {
        name: "John Gren",
        email: "rupamsau123@gmail.com",
        password: bcrypt.hashSync("123456", 10)
    },
]

module.exports = users;