"use server";

import { revalidatePath } from "next/cache";
import { CreateTask, Task } from "./types";
import { axiosInstance } from "./utils/axios";

export const getAllTasks = async () => {
  const res = await axiosInstance.get<Task[]>("/api/tasks");

  return res.data;
};

export const getCompletedTasks = async () => {
  const res = await axiosInstance.get<Task[]>("/api/tasks/completed");

  return res.data;
};

export const getUncompletedTasks = async () => {
  const res = await axiosInstance.get<Task[]>("/api/tasks/uncompleted");

  return res.data;
};

export const createTask = async (createTask: CreateTask) => {
  await axiosInstance.post<Task>("/api/tasks", {
    name: createTask.name,
    startAt: createTask.startAt === "" ? undefined : createTask.startAt,
  });

  revalidatePath("/tasks");
};

export const updateTask = async (task: Task) => {
  const res = await axiosInstance.put<Task>(`/api/tasks/${task.id}`, {
    name: task.name,
    isCompleted: task.isCompleted,
    startAt: task.startAt,
  });

  return res.data;
};

export const deleteTask = async (task: Task) => {
  await axiosInstance.delete(`/api/tasks/${task.id}`);

  revalidatePath("/tasks");
};
