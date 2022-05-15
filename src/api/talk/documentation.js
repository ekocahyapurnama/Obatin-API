const Joi = require('joi');
//
const doc = {
  postTalkDoc: {
    description: 'Talk to BOT',
    notes: 'This is endpoint where you can talk with Obatin BOT. Payload only contain message field, after you fill message field and sending request to server, server will response 200 and data field is response from BOT.',
    tags: ['api', 'talk'],
    validate: {
      payload: Joi.object({
        message: Joi.string().required(),
      }),
    },
    response: {
      status: {
        200: Joi.object({
          status: Joi.string(),
          data: {
            response: Joi.string(),
          },
        }),
        400: undefined,
      },
    },
  },
};

module.exports = doc;
