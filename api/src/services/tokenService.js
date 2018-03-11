import * as jwt from '../utils/jwt';

/** 
 * Generates Access Token
*/
export function generateAccessToken() {
  return jwt.generateAccessToken();
}

/**
 * Generate both Access Token and Refresh Token 
 * @param {*} id 
 */
export function generateTokens(id) {
  return jwt.generateTokens(id);
}

/**
 * Verify Access Token
 * @param {*} accessToken 
 */
export function verifyAccessToken(accessToken) {
  return jwt.verifyAccessToken(accessToken);
}

/**
 * Verify Refresh Token
 * @param {*} refreshToken 
 */
export async function verifyRefreshToken(refreshToken) {
  let decodedToken = await jwt.verifyRefreshToken(refreshToken);

  return jwt.generateAccessToken(decodedToken.encryptedData);
}
