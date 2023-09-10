const { users } = require("../models");

class usersRepository {
  static async create({ name, email, password, room, role }) {
    const createdUser = users.create({
      name: name,
      email: email,
      password: password,
      room: room,
      role: role,
    });
    return createdUser;
  }

  static async getByEmail({ email }) {
    const getUser = await users.findOne({ where: { email: email } });
    return getUser;
  }

  static async getByRoom({ room }) {
    const getUser = await users.findOne({ where: { room: room } });
    return getUser;
  }
}

module.exports = usersRepository;
