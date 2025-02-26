"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    path: "/tasks",
    name: "全て",
  },
  {
    path: "/tasks/completed",
    name: "完了済",
  },
  {
    path: "/tasks/uncompleted",
    name: "未完了",
  },
];

export default function Navigation() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="flex gap-2">
      {navItems.map((navItem, i) => (
        <Link
          key={i}
          href={navItem.path}
          className={`rounded py-1.5 px-3 text-sm font-bold ${
            navItem.path === pathname
              ? "bg-blue-700 text-white"
              : "text-gray-500"
          }`}
        >
          {navItem.name}
        </Link>
      ))}
    </div>
  );
}
