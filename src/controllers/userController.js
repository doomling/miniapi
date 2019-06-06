const self = {};
const dbService = require("./../services/dbConnect");

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getUser(req, res) {
    const id = req.params.id;

    try {
      const user = await dbService.getUser(id);
      return res.json(user);
    } catch (e) {
      console.log("todo mal", e);
      return res.sendStatus(400);
    }
  }

  async getUsers(req, res) {
    try {
      const users = await dbService.getUsers();
      return res.json(users);
    } catch (e) {
      console.log("todo mal", e);
      return res.sendStatus(400);
    }
  }

  async saveUser(req, res) {
    const data = req.body;

    try {
      await dbService.saveUser(data);
      return res.status(200).json(data);
    } catch (e) {
      console.log("todo mal", e);
      return res.sendStatus(400);
    }
  }

  async modifyUser(req, res) {
    const id = req.params.id;
    const data = req.body;

    try {
      await dbService.modifyUser(id, data);
      return res.status(200).json(data);
    } catch (e) {
      console.log("todo mal", e);
      return res.sendStatus(400);
    }
  }
}

module.exports = UserController;
