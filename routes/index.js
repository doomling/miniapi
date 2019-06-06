const express = require("express");
const router = express.Router();

const UserController = require("./../src/controllers/userController");
const UserService = require("./../src/services/userService");
const UserInstance = new UserController(new UserService());

router.get("/user", UserInstance.getUsers);
router.get("/user/:id", UserInstance.getUser);
router.post("/user", UserInstance.saveUser);
router.put("/user/:id", UserInstance.modifyUser);

module.exports = router;
