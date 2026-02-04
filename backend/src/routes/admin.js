import { Router } from 'express';
import { getDashboard } from '../controllers/adminController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();

router.get('/dashboard', authenticate, authorize(['admin']), getDashboard);

export default router;
