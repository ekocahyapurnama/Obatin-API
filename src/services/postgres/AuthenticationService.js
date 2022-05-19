const InvariantError = require('../../exceptions/InvariantError');
const { authentications } = require('../../models');

class AuthenticationService {
  constructor() {
    this._model = authentications;
  }

  async addRefreshToken(refreshToken) {
    try {
      await this._model.create({ token: refreshToken });
    } catch (error) {
      console.log(error);
    }
  }

  async verifyRefreshToken({ refreshToken }) {
    const result = await this._model.findOne({ where: { token: refreshToken } });

    if (result === null) {
      throw new InvariantError('Invalid refresh token');
    }
  }

  async deleteRefreshToken({ refreshToken }) {
    try {
      await this._model.destroy({ where: { token: refreshToken } });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AuthenticationService;
