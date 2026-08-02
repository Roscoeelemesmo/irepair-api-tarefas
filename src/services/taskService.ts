export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

let tasks: Task[] = [];

export const taskService = {
  getAll(completedFilter?: string) {
    if (completedFilter !== undefined) {
      const isCompleted = completedFilter === 'true';
      return tasks.filter(task => task.completed === isCompleted);
    }
    return tasks;
  },

  getById(id: string) {
    return tasks.find(task => task.id === id);
  },

  create(title: string) {
    const newTask: Task = {
      id: Math.random().toString(36).substring(2, 9), 
      title,
      completed: false, 
    };
    tasks.push(newTask);
    return newTask;
  },

  update(id: string, data: { title?: string; completed?: boolean }) {
    const task = tasks.find(task => task.id === id);
    if (!task) return null;

    if (data.title !== undefined) task.title = data.title;
    if (data.completed !== undefined) task.completed = data.completed;

    return task;
  },

  delete(id: string) {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return false;

    tasks.splice(index, 1);
    return true;
  }
};