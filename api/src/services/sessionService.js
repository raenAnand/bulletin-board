import Session from '../models/session';

/**
 * 
 * @param {*} userParams 
 */

export function createSession(userParams) {
  return new Session({
    user_id: userParams.user.id,
    username: userParams.user.username,
    refresh_token: userParams.tokens.refreshToken
  })
    .save()
    .then(Session => Session.refresh());
}

/**
 * 
 * @param {*} id 
 */

export function deleteSession(refreshToken) {
  return new Session({ refresh_token: refreshToken })
    .fetch()
    .then(session => session.destroy());
}
