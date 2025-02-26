"use client";

import { deleteTask, updateTask } from "@/api";
import { Task } from "@/types";
import { dayjsInstance } from "@/utils/dayjs";
import { ChangeEvent, useRef, useState } from "react";
import Checkbox from "./Checkbox";

export default function TaskCard({ task: defaultTask }: { task: Task }) {
  // const [name, setName] = useState(task.name);
  // const [isCompleted, setIsCompleted] = useState(task.isCompleted);
  // const [startAt, setStartAt] = useState(task.startAt);
  // const [updatedAt, setUpdatedAt] = useState(task.updatedAt);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const [task, setTask] = useState(defaultTask);

  const handleCheckboxClick = async () => {
    const newTask: Task = { ...task, isCompleted: !task.isCompleted };
    setTask(newTask);

    const { updatedAt } = await updateTask(newTask);
    setTask({ ...newTask, updatedAt });
  };

  const handleTextChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newTask: Task = { ...task, name: e.target.value };
    setTask(newTask);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(async () => {
      const { updatedAt } = await updateTask(newTask);
      setTask({ ...newTask, updatedAt });
    }, 1000);
  };

  const handleDateChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newTask: Task = { ...task, startAt: new Date(e.target.value) };
    setTask(newTask);

    const { updatedAt } = await updateTask(newTask);
    setTask({ ...newTask, updatedAt });
  };

  const handleDeleteClick = async () => {
    await deleteTask(task);
  };

  return (
    <div className="flex gap-3">
      <button onClick={handleCheckboxClick}>
        <Checkbox checked={task.isCompleted} />
      </button>
      <div className="flex-1">
        <input
          type="text"
          value={task.name}
          className="w-full outline-none"
          onChange={handleTextChange}
        />
        <div className="mt-1 text-xs">
          <input
            type="date"
            className="border py-0.5 px-1 rounded"
            value={
              task.startAt
                ? dayjsInstance(task.startAt).format("YYYY-MM-DD")
                : ""
            }
            onChange={handleDateChange}
          />
        </div>
        <div className="mt-1.5 text-xs flex gap-2">
          <button onClick={handleDeleteClick} className="underline">
            削除
          </button>
          <span>作成: {dayjsInstance(task.createdAt).fromNow()}</span>
          {task.updatedAt && (
            <span>最終更新: {dayjsInstance(task.updatedAt).fromNow()}</span>
          )}
        </div>
      </div>
    </div>
  );
}
