import { z } from "zod";
import { createTaskSchema } from "./schema";

export interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
  startAt: Date;
  updatedAt: Date;
  createdAt: Date;
}

export type CreateTask = z.infer<typeof createTaskSchema>;
