import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    const payload = jwt.verify(token, env.jwtSecret);
    req.user = payload;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export const authorize = (roles = []) => (req, res, next) => {
  if (!roles.length) {
    return next();
  }

  if (!req.user || !roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  return next();
};
