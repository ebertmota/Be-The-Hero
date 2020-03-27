const { celebrate, Segments, Joi } = require('celebrate');

const checkAuthorization = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
})

module.exports = checkAuthorization;