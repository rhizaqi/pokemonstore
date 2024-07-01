const { comparePassword } = require("../helper/bcrypt");
const { makeToken } = require("../helper/jwt");
const { User } = require("../models/");
const { OAuth2Client } = require(`google-auth-library`);

module.exports = class UserController {
  static async register(req, res, next) {
    try {
      const { fullName, email, password, phoneNumber, address } = req.body;

      const reg = await User.create({
        fullName,
        email,
        password,
        phoneNumber,
        address,
      });

      res.status(201).json({
        fullName:reg.fullName,
        email:reg.email,
        phoneNumber:reg.phoneNumber,
        address:reg.address
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw {
          name: "BadRequest",
          message: "Please insert your email/password",
        };
      }

      console.log(password, `<<`);
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        throw { name: "NotFound" };
      }

      const checkPassword = comparePassword(password, user.password);

      if (!checkPassword) {
        throw { name: "InvalidCredential" };
      }

      const access_token = makeToken({
        id: user.id,
        role: user.role,
      });

      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }

  // static async userPerId(req, res, next){
  //   try {

  //   } catch (error) {
  //       next(error)
  //   }
  // }

  // static async editUser(req, res, next){
  //   try {

  //   } catch (error) {
  //       next(error)
  //   }
  // }

  // static async deleteUser(req, res, next){
  //   try {

  //   } catch (error) {
  //       next(error)
  //   }
  // }

  static async loginGoogle(req, res, next) {
    console.log("masuk server");
    const token = req.headers["google-token"];
    const client = new OAuth2Client()

    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.ID_google,
      });

      const payload = ticket.getPayload();
      const email = payload.email;

      let data = await User.findOne({
        where: {
          email,
        },
      });

      if (!data) {
        data = await User.create({
          fullName: payload.name,
          email,
          password: String(Math.random()),
          imgUrl: `-`,
          phoneNumber: `-`,
          address: `-`,
          role: `Buyer`,
        });
      }

      let access_token = makeToken({
        id: data.id,
      });

      console.log(access_token);
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
};
