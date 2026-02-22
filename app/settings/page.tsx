import { PageShell } from "@/app/components/common/PageShell";
import { EmptyState } from "@/app/components/ui/EmptyState";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <PageShell className="bg-gray-50">
      <EmptyState
        icon={Settings}
        iconColorClass="text-gray-500"
        iconBgClass="bg-gray-100"
        title="Settings"
        description="Coming soon - account and app settings will appear here."
      />
    </PageShell>
  );
}
