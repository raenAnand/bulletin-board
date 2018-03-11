import { Router } from 'express';

import * as CONSTANT from '../const';
import * as authService from '../services/authService';
import * as tokenService from '../services/tokenService';
import validateRefreshToken from '../middlewares/validateToken';

const router = Router();

/**
 * POST /api/login
 */
router.post('/login', (req, res, next) => {
  authService
    .loginUser(req.body)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

/**
 * GET /api/refresh
 */
router.get('/refresh', validateRefreshToken, (req, res, next) => {
  tokenService
    .verifyRefreshToken(req.token)
    .then(data => res.json({ accessToken: data }))
    .catch(err => next(err));
});

/**
 * DELETE /api/logout
 */
router.delete('/logout', (req, res, next) => {
  let requestToken = req.headers.authorization.substring(
    CONSTANT.BEARER_LENGTH
  );

  authService
    .logoutUser(requestToken)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

export default router;
