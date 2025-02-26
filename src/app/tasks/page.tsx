import { getAllTasks } from "@/api";
import TaskCard from "@/components/TaskCard";

export default async function Page() {
  const tasks = await getAllTasks();

  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
