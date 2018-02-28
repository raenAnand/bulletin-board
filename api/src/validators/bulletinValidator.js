import Joi from 'joi';
import validate from '../utils/validate';

const SCHEMA = {
  title: Joi.string()
    .label('title')
    .max(90)
    .required(),
  owner: Joi.string()
    .label('owner')
    .max(90)
    .required(),
  priority: Joi.number()
    .label('priority')
    .required(),
  duration: Joi.number()
    .label('duration')
    .min(1)
    .required(),
  url: Joi.string()
    .label('url')
    .max(90)
    .required()
};

/**
 * Validate create/update bulletin request.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {Promise}
 */
export function bulletinValidator(req, res, next) {
  return validate(req.body, SCHEMA)
    .then(() => next())
    .catch(err => next(err));
}
