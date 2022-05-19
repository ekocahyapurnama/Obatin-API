const Joi = require('joi');
const { joiPassword } = require('joi-password');
//
const doc = {
  postUsersDoc: {
    description: 'User register',
    notes: 'This endpoint used for user register. Payload contains email, password, passwordConfirmation, username, and fullname field, after you fill payload and send request to server, server will response 201 and data contains user id.',
    tags: ['api', 'users'],
    validate: {
      payload: Joi.object({
        email: Joi.string().email().required(),
        password: joiPassword
          .string()
          .required(),
        passwordConfirmation: joiPassword
          .string()
          .required(),
        username: joiPassword
          .string()
          .required(),
        fullname: Joi.string().required(),
      }),
    },
    response: {
      status: {
        201: Joi.object({
          status: Joi.string(),
          message: Joi.string(),
          data: {
            id: Joi.string(),
          },
        }),
        400: undefined,
      },
    },
  },
};

module.exports = doc;
