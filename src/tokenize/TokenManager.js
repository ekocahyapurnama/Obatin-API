const Jwt = require('@hapi/jwt');
const InvariantError = require('../exceptions/InvariantError');

const TokenManager = {
  generateAccessToken: (payload) => Jwt.token.generate(payload, process.env.ACCESS_TOKEN_KEY),
  generateRefreshToken: (payload) => Jwt.token.generate(payload, process.env.REFRESH_TOKEN_KEY),
  verifyRefreshToken: ({ refreshToken }) => {
    const artifacts = Jwt.token.decode(refreshToken);
    try {
      Jwt.token.verifySignature(artifacts, process.env.REFRESH_TOKEN_KEY);
      Jwt.token.verifyPayload(artifacts, {
        aud: false,
        iss: false,
        sub: false,
        maxAgeSec: 60,
      });
      const { payload } = artifacts.decoded;
      return payload;
    } catch (error) {
      throw new InvariantError('invalid refresh token');
    }
  },
};

module.exports = TokenManager;
