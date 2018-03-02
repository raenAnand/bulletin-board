import { Router } from 'express';

import * as CONSTANT from '../const';
import * as authService from '../services/authService';
import * as tokenService from '../services/tokenService';
import validateRefreshToken from '../middlewares/validateToken';

const router = Router();

/**
 * Login user
 */
router.post('/login', (req, res, next) => {
  if (!req.token) {
    authService
      .loginUser(req.body)
      .then(data => res.json({ data }))
      .catch(err => next(err));
  } else {
    next('route');
  }
});

/**
 * Refresh access token
 */
router.get('/refresh',validateRefreshToken, (req, res, next) => {

  tokenService
    .verifyRefreshToken(req.token)
    .then(data => res.json({ accessToken: data }))
    .catch(err => next(err));
})

/**
 * Logout user
 */
router.delete('/logout', (req, res, next) => {
  let requestToken = req.headers.authorization.substring(CONSTANT.BEARER_LENGTH);

  authService
    .logoutUser(requestToken)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

export default router;
