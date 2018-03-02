import Boom from 'boom';
import jwt from 'jsonwebtoken';

let CONFIG = require('../config.json');

export function generateTokens(userData) {
  return {
    accessToken: generateAccessToken(userData),
    refreshToken: generateRefreshToken(userData)
  };
}

export function generateAccessToken(data) {
  return jwt.sign({ encryptedData: data }, CONFIG.ACCESS_TOKEN_SALT, {
    expiresIn: 10
  });
}

export function generateRefreshToken(data) {
  return jwt.sign(
    {
      encryptedData: data
    },
    CONFIG.REFRESH_TOKEN_SALT,
    {
      expiresIn: 80000
    }
  );
}

export function verifyAccessToken(token) {
  return jwt.verify(token, CONFIG.ACCESS_TOKEN_SALT, (err, decode) => {
    if (!err) {

      return Promise.resolve(decode);
    } else {
      return Promise.reject(Boom.unauthorized('Access Token Unauthorized'));
    }
  });
}

export function verifyRefreshToken(token) {
  return jwt.verify(token, CONFIG.REFRESH_TOKEN_SALT, (err, decode) => {
    if (!err) {
      return decode;
    } else {
      throw Boom.unauthorized('Refresh Token Unauthorized');
    }
  });
}
