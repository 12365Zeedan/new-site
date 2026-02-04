import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { User } from '../models/User.js';
import { env } from '../config/env.js';

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  locale: z.enum(['en', 'ar']).default('en')
});

export const register = async (req, res, next) => {
  try {
    const payload = registerSchema.parse(req.body);
    const existing = await User.findOne({ email: payload.email });

    if (existing) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const passwordHash = await bcrypt.hash(payload.password, 12);
    const user = await User.create({
      name: payload.name,
      email: payload.email,
      passwordHash,
      locale: payload.locale
    });

    return res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      locale: user.locale
    });
  } catch (error) {
    return next(error);
  }
};

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const login = async (req, res, next) => {
  try {
    const payload = loginSchema.parse(req.body);
    const user = await User.findOne({ email: payload.email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const valid = await user.comparePassword(payload.password);

    if (!valid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { sub: user.id, role: user.role, locale: user.locale },
      env.jwtSecret,
      { expiresIn: env.jwtExpiresIn }
    );

    return res.json({ token });
  } catch (error) {
    return next(error);
  }
};
