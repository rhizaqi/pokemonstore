if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { hashPassword } = require("./helper/bcrypt");
const { makeToken, verifyToken } = require("./helper/jwt");
const secret = process.env.JWT_SECRET;

// const jwt = require("jsonwebtoken");

let a = hashPassword("123456");

console.log(a, `<<<< password`, 9999999);

let b = makeToken("12335676545676543");

console.log(b, `<<<<`);

let hasil = verifyToken(b)

console.log(hasil,`<<xxxxx??`);
