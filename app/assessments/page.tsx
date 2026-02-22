import { PageShell } from "@/app/components/common/PageShell";
import { EmptyState } from "@/app/components/ui/EmptyState";
import { ClipboardCheck } from "lucide-react";

export default function AssessmentsPage() {
  return (
    <PageShell className="bg-[#F8F8F8]">
      <EmptyState
        icon={ClipboardCheck}
        iconColorClass="text-orange-500"
        iconBgClass="bg-orange-50"
        title="Assessments"
        description="Coming soon - your assessments and results will appear here."
      />
    </PageShell>
  );
}
