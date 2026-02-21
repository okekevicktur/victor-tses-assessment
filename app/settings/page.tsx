import { Sidebar } from "@/app/components/common/Sidebar";
import { TopBar } from "@/app/components/common/TopBar";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-[220px]">
        <TopBar />
        <main className="px-8 py-6 flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-gray-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings</h1>
            <p className="text-gray-500 text-sm">
              Coming soon - account and app settings will appear here.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
