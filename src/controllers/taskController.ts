import { Request, Response } from 'express';
import * as taskService from '../services/taskService';

export const list = async (req: Request, res: Response) => {
  try {
    const tasks = await taskService.getAllTasks();
    return res.json(tasks); 
  } catch (error) {
    console.error(error); 
    return res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await taskService.getTaskById(id);
    if (!task) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tarefa' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'O título é obrigatório' });
    }
    const newTask = await taskService.createTask(title);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { completed, title } = req.body;
    const updatedTask = await taskService.updateTask(id, completed, title);
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await taskService.deleteTask(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar tarefa' });
  }
};