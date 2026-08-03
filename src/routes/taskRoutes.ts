import { Router } from 'express';
import * as taskController from '../controllers/taskController.ts';

const router = Router();

router.get('/tasks', taskController.list);
router.get('/tasks/:id', taskController.getById);
router.post('/tasks', taskController.create);
router.put('/tasks/:id', taskController.update);
router.delete('/tasks/:id', taskController.remove);

export const taskRoutes = router;