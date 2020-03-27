const { celebrate, Segments, Joi } = require('celebrate');

module.exports.idValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }) 
});

module.exports.pageValidator = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
});