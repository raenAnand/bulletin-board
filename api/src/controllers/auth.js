import { Router } from 'express';

import * as authService from '../services/authService';

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
 * Logout user
 */
router.delete('/logout',(req, res, next) => {
  const BEARER_LENGTH = 7;
  let requestToken = req.headers.authorization.substring(BEARER_LENGTH);
  
  authService
    .logoutUser(requestToken)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

export default router;
