const Joi = require('joi');
//
const doc = {
  postTalkDoc: {
    description: 'Talk to bot',
    notes: 'This is endpoint to talking with Obatin bot. Payload only contain message field, after you fill message field, server will response back with 200 status code and data is response from bot',
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
