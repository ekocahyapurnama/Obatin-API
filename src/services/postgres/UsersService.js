const bcrypt = require('bcrypt');
const { nanoid } = require('nanoid');
const { Op } = require('sequelize');
const { users } = require('../../models');

const InvariantError = require('../../exceptions/InvariantError');
const AuthenticationError = require('../../exceptions/AuthenticationError');

class UsersService {
  constructor() {
    this._model = users;
  }

  // register
  async addUser({
    email,
    password,
    username,
    fullname,
  }) {
    let result = null;
    const hashedPassword = await bcrypt.hash(password, 10); // enkripsi password dengan bycrypt
    const id = `user-${nanoid(12)}`;
    await this.verifyNewUserName(username);

    try {
      result = await this._model.create({
        id,
        email,
        password: hashedPassword,
        username,
        fullname,
      }, { raw: true });
      if (!result.id) {
        throw new InvariantError('registration fail');
      }
    } catch (error) {
      console.log(error);
    }
    return result.id;
  }

  async verifyNewUserName(username) {
    const result = await this._model.findOne({ where: { username } });
    if (result) {
      throw new InvariantError('username alredy used');
    }
  }

  // login
  async verifyUserCredential({ username, password }) {
    const result = await this._model.findOne({
      where: {
        [Op.or]: [{ username }, { email: username }],
      },
    });
    if (result === null) {
      throw new AuthenticationError('wrong credentials');
    }

    const { id, password: hashedPassword } = result;

    const match = await bcrypt.compare(password, hashedPassword);
    if (!match) {
      throw new AuthenticationError('wrong credentials');
    }
    return id;
  }
}

module.exports = UsersService;
