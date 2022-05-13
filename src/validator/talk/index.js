const talkPayloadSchema = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

const TalkValidator = {
  // fungsi untuk memvalidasi payload talk
  validateTalkPayload: (payload) => {
    const result = talkPayloadSchema.validate(payload);
    // jika divalidasi hasilnya error maka panggil InvariantError
    if (result.error) {
      throw new InvariantError(result.error.message);
    }
  },
};

module.exports = TalkValidator;
