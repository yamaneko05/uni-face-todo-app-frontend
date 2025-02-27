import { getCompletedTasks } from "@/api";
import TaskCard from "@/components/TaskCard";

export default async function Page() {
  const tasks = await getCompletedTasks();

  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
