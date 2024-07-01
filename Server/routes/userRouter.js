const express = require("express");
const UserController = require("../controllers/userController");
const router = express.Router()


router.post("/register", UserController.register)
router.post("/login", UserController.login)
router.post('/googleLogin', UserController.loginGoogle)

// router.get("/:id", UserController.userPerId)
// router.put("/:id", UserController.editUser)
// router.delete("/:id", UserController.deleteUser)

module.exports = router