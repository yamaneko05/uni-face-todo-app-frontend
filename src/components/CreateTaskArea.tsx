"use client";

import { createTask } from "@/api";
import { CreateTask } from "@/types";
import { useState } from "react";

export default function CreateTaskArea() {
  const [task, setTask] = useState<CreateTask>({
    name: "",
    startAt: "",
  });

  const handleClick = async () => {
    setTask({ name: "", startAt: "" });
    await createTask(task);
  };

  return (
    <div className="border p-2 rounded">
      <input
        type="text"
        value={task.name}
        placeholder="テキストを入力"
        onChange={(e) => setTask({ ...task, name: e.target.value })}
        className="w-full outline-none"
      />
      <div className="mt-1 text-xs">
        <input
          type="date"
          className="border py-0.5 px-1 rounded"
          value={task.startAt}
          onChange={(e) => setTask({ ...task, startAt: e.target.value })}
        />
      </div>
      <div className="mt-2">
        <button
          onClick={handleClick}
          className="bg-black text-white font-bold rounded py-1.5 px-3 text-sm"
        >
          作成
        </button>
      </div>
    </div>
  );
}
