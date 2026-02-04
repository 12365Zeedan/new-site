import { Router } from 'express';
import { listProducts, createProduct } from '../controllers/productController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();

router.get('/', listProducts);
router.post('/', authenticate, authorize(['admin', 'editor']), createProduct);

export default router;
