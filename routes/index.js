var express = require('express');
var router = express.Router();

const userController = require('./../src/controllers/userController')

router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getUser)
router.post('/user', userController.saveUser)
router.put('/user/:id', userController.modifyUser)

module.exports = router;