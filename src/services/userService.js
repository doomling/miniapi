const User = require("../../models/User");

class UserService {
   getUsers() {
    const data = User.find({})
      .then(data => {
        return data;
      })
      .catch(function(err) {
        console.log(err);
        return err;
      });
    return data;
  }

  getUser(id) {
    const user = User.findById(id)
      .then(data => {
        return data;
      })
      .catch(err => {
        return err;
      });
    return user;
  }

  saveUser(data) {
    const user = new User(data);
    return user.save();
  }

  modifyUser(id, data) {
    User.findOneAndUpdate({ _id: id }, data, { new: true }, data => {
      return data;
    }).catch(err => {
      return err;
    });
  }
}

module.exports = UserService;
