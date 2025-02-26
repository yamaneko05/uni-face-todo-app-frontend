import CreateTaskArea from "@/components/CreateTaskArea";
import Navigation from "@/components/Navigation";
import { ReactNode } from "react";

export default function TasksLayout({ children }: { children: ReactNode }) {
  return (
    <div className="pt-3 pb-24 relative">
      <div className="pl-6">
        <Navigation />
      </div>
      <div className="mt-4">{children}</div>
      <div className="fixed bottom-0 left-0 w-full">
        <div className="max-w-screen-sm mx-auto p-3">
          <div className="pl-6">
            <CreateTaskArea />
          </div>
        </div>
      </div>
    </div>
  );
}
