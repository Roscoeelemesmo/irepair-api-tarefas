import prisma from '../prisma';

export const getAllTasks = async () => {
  return await prisma.task.findMany();
};

export const createTask = async (title: string) => {
  return await prisma.task.create({
    data: {
      title,
    },
  });
};

export const getTaskById = async (id: string) => {
  return await prisma.task.findUnique({
    where: { id },
  });
};

export const updateTask = async (id: string, completed?: boolean, title?: string) => {
  return await prisma.task.update({
    where: { id },
    data: {
      ...(completed !== undefined && { completed }),
      ...(title !== undefined && { title }),
    },
  });
};

export const deleteTask = async (id: string) => {
  return await prisma.task.delete({
    where: { id },
  });
};