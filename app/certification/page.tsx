import { PageShell } from "@/app/components/common/PageShell";
import { EmptyState } from "@/app/components/ui/EmptyState";
import { Award } from "lucide-react";

export default function CertificationPage() {
  return (
    <PageShell className="bg-gray-50">
      <EmptyState
        icon={Award}
        iconColorClass="text-green-500"
        iconBgClass="bg-green-50"
        title="My Certification"
        description="Coming soon - your certificates and achievements will appear here."
      />
    </PageShell>
  );
}
