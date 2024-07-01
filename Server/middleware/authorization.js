const { verifyToken } = require("../helper/jwt");

const authorization = async (req, res, next) => {
  try {
    const {role} = req.user
    console.log(role, `<<<`);

    if (role === "Buyer") {
      throw { name: "Unauthorized", message: "You aren't authorized" };
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authorization;
