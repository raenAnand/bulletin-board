import Session from '../models/session';

/**
 * Creates new session for new login
 * @param {*} userParams 
 */

export function createSession(userParams) {
  return new Session({
    user_id: userParams.user.id,
    username: userParams.user.username,
    refresh_token: userParams.tokens.refreshToken
  }).save()
    .then(Session => Session.refresh());
}

/**
 * Deletes Session after logout
 * @param {*} id 
 */

export function deleteSession(refreshToken) {
  return new Session({ refresh_token: refreshToken })
    .fetch()
    .then(session => session.destroy());
}
