import { PageShell } from "@/app/components/common/PageShell";
import { EmptyState } from "@/app/components/ui/EmptyState";
import { Users } from "lucide-react";

export default function ClassesPage() {
  return (
    <PageShell className="bg-gray-50">
      <EmptyState
        icon={Users}
        iconColorClass="text-purple-500"
        iconBgClass="bg-purple-50"
        title="Classes"
        description="Coming soon - your enrolled classes will appear here."
      />
    </PageShell>
  );
}
