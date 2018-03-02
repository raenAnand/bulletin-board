import * as CONSTANT from '../const';
import * as tokenService from '../services/tokenService';

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export default function ensureToken(req, res, next) {
  req.token = req.headers.authorization.substring(CONSTANT.BEARER_LENGTH);

  tokenService
    .verifyAccessToken(req.token)
    .then(response => {
      req.id = response.encryptedData.id;
      console.log(req.id);
      return next();
    })
    .catch(error => next(error));
}
