import * as jwt from '../utils/jwt'

/** */
export  function generateAcessToken() {
  return jwt.generateAccessToken();
}

/**
 * 
 * @param {*} id 
 */
export function generateTokens(id) {
  return jwt.generateTokens(id);
}

/**
 * 
 * @param {*} accessToken 
 */
export function verifyAccessToken(accessToken) {
  return jwt.verifyAccessToken(accessToken);
}

/**
 * 
 * @param {*} refreshToken 
 */
export async function verifyRefreshToken(refreshToken) {
  let decodedToken = await jwt.verifyRefreshToken(refreshToken);

  return jwt.generateAccessToken(decodedToken.encryptedData);
}
