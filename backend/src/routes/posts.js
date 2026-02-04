import { Router } from 'express';
import { listPosts, createPost } from '../controllers/postController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();

router.get('/', listPosts);
router.post('/', authenticate, authorize(['admin', 'editor']), createPost);

export default router;
