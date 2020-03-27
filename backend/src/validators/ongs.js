const { celebrate, Segments, Joi } = require('celebrate');

const checkBody = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().min(8).required(),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
});

module.exports = checkBody;