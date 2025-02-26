import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Link
        href="/tasks"
        className="py-2 px-6 rounded bg-blue-500 text-white font-bold"
      >
        タスク一覧
      </Link>
    </div>
  );
}
