import { z } from "zod";

export const createTaskSchema = z.object({
  name: z.string().min(1).max(100),
  startAt: z.string().date().optional(),
});
