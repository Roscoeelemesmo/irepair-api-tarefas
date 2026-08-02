import { Request, Response } from 'express';
import { taskService } from '../services/taskService.ts';

export const taskController = {
  list(req: Request, res: Response) {
    const { completed } = req.query;
    const tasks = taskService.getAll(completed as string | undefined);
    return res.status(200).json(tasks);
  },

  getById(req: Request, res: Response) {
    const { id } = req.params;
    const task = taskService.getById(String(id));

    if (!task) {
      return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    return res.status(200).json(task);
  },

  create(req: Request, res: Response) {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'O título da tarefa é obrigatório.' });
    }

    const newTask = taskService.create(title);
    return res.status(201).json(newTask);
  },

  update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, completed } = req.body;

    const updatedTask = taskService.update(String(id), { title, completed });

    if (!updatedTask) {
      return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    return res.status(200).json(updatedTask);
  },

  delete(req: Request, res: Response) {
    const { id } = req.params;
    const success = taskService.delete(String(id));

    if (!success) {
      return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    return res.status(204).send();
  }
};