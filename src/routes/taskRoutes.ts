import { Router } from 'express';
import { taskController } from '../controllers/taskController.ts';

const router = Router();

router.get('/tasks', taskController.list);
router.get('/tasks/:id', taskController.getById);
router.post('/tasks', taskController.create);
router.put('/tasks/:id', taskController.update);
router.delete('/tasks/:id', taskController.delete);

export const taskRoutes = router;