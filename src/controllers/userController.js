
class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getUser(req, res) {
    const id = req.params.id;

    try {
      const user = await this.userService.getUser(id);
      return res.json(user);
    } catch (e) {
      console.log("todo mal", e);
      return res.sendStatus(400);
    }
  }

  async getUsers(req, res) {
    try {
      const users = await this.userService.getUsers();
      return res.json(users);
    } catch (e) {
      console.log("todo mal", e);
      return res.sendStatus(400);
    }
  }

  async saveUser(req, res) {
    const data = req.body;

    try {
      await this.userService.saveUser(data);
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
      await this.userService.modifyUser(id, data);
      return res.status(200).json(data);
    } catch (e) {
      console.log("todo mal", e);
      return res.sendStatus(400);
    }
  }
}

module.exports = UserController;
