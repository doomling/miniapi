const express = require("express");
const router = express.Router();

const UserController = require("./../src/controllers/userController");
const UserService = require("./../src/services/userService");
const UserInstance = new UserController(new UserService());

router.get("/user", (req, res) => UserInstance.getUsers(req, res));
router.get("/user/:id", (req, res) => UserInstance.getUser(req, res));
router.post("/user", (req, res) => UserInstance.saveUser(req, res));
router.put("/user/:id", (req, res) => UserInstance.modifyUser(req, res));

module.exports = router;
