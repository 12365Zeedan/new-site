import { Router } from 'express';
import authRoutes from './auth.js';
import productRoutes from './products.js';
import postRoutes from './posts.js';
import adminRoutes from './admin.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/posts', postRoutes);
router.use('/admin', adminRoutes);

export default router;
