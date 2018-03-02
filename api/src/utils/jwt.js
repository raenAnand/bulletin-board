import Boom from 'boom';
import jwt from 'jsonwebtoken';

let CONFIG = require('../config.json');

/**
 * 
 * @param {*} userData 
 */
export function generateTokens(userData) {
  return {
    accessToken: generateAccessToken(userData),
    refreshToken: generateRefreshToken(userData)
  };
}

/**
 * 
 * @param {*} data 
 */
export function generateAccessToken(data) {
  return jwt.sign({ encryptedData: data }, CONFIG.ACCESS_TOKEN_SALT, {
    expiresIn: CONFIG.ACCESS_EXPIRY_TIME
  });
}

/**
 * 
 * @param {*} data 
 */
export function generateRefreshToken(data) {
  return jwt.sign(
    {
      encryptedData: data
    },
    CONFIG.REFRESH_TOKEN_SALT,
    {
      expiresIn: CONFIG.REFRESH_EXPIRY_TIME
    }
  );
}

/**
 * 
 * @param {*} token 
 */
export function verifyAccessToken(token) {

  return jwt.verify(token, CONFIG.ACCESS_TOKEN_SALT, (err, decode) => {
    if (!err) {

      return Promise.resolve(decode);
    } else {
      return Promise.reject(Boom.unauthorized('Access Token Unauthorized'));
    }
  });
}

/**
 * 
 * @param {*} token 
 */
export function verifyRefreshToken(token) {
  return jwt.verify(token, CONFIG.REFRESH_TOKEN_SALT, (err, decode) => {
    if (!err) {
      return decode;
    } else {
      throw Boom.unauthorized('Refresh Token Unauthorized');
    }
  });
}
