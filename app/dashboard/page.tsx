import { PageShell } from "@/app/components/common/PageShell";
import { EmptyState } from "@/app/components/ui/EmptyState";
import { LayoutDashboard } from "lucide-react";

export default function DashboardPage() {
  return (
    <PageShell className="bg-gray-50">
      <EmptyState
        icon={LayoutDashboard}
        iconColorClass="text-blue-500"
        iconBgClass="bg-blue-50"
        title="Dashboard"
        description="Coming soon - your learning overview will appear here."
      />
    </PageShell>
  );
}
