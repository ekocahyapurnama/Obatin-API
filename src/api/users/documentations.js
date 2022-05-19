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
          .minOfSpecialCharacters(1)
          .minOfLowercase(1)
          .minOfUppercase(2)
          .minOfNumeric(3)
          .noWhiteSpaces()
          .required()
          .messages({
            'password.minOfUppercase': '{#label} should contain at least {#min} uppercase character',
            'password.minOfSpecialCharacters':
                  '{#label} should contain at least {#min} special character',
            'password.minOfLowercase': '{#label} should contain at least {#min} lowercase character',
            'password.minOfNumeric': '{#label} should contain at least {#min} numeric character',
            'password.noWhiteSpaces': '{#label} should not contain white spaces',
          }),
        passwordConfirmation: Joi.any().valid(Joi.ref('password')).required(),
        username: joiPassword
          .string()
          .noWhiteSpaces()
          .required()
          .messages({
            'username.noWhiteSpaces': '{#label} should not contain white spaces',
          }),
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
