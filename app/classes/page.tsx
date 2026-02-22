import { Sidebar } from "@/app/components/common/Sidebar";
import { TopBar } from "@/app/components/common/TopBar";
import { Users } from "lucide-react";

export default function ClassesPage() {
  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <TopBar />
        <main className="px-8 py-6 flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Classes</h1>
            <p className="text-gray-500 text-sm">
              Coming soon - your enrolled classes will appear here.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
