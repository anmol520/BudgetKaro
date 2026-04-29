import { Router } from 'express';
import { analyticsByCategory, createBudget, deleteBudget, getBudgets } from '../controllers/budgetController.js';
import { auth } from '../middleware/auth.js';

const router = Router();

router.use(auth);
router.get('/', getBudgets);
router.post('/', createBudget);
router.delete('/:id', deleteBudget);
router.get('/analytics', analyticsByCategory);

export default router;
