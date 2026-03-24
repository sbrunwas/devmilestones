import { Milestone, domainColors } from "@/data/milestones";
import { DomainBadge } from "./DomainBadge";

interface MilestoneCardProps {
  milestone: Milestone;
}

export const MilestoneCard = ({ milestone }: MilestoneCardProps) => (
  <div
    className={`group relative rounded border px-4 py-3 transition-shadow duration-200 hover:shadow-md ${domainColors[milestone.domain]}`}
  >
    <p className="text-sm font-medium leading-snug">{milestone.title}</p>
    <div className="mt-2">
      <DomainBadge domain={milestone.domain} />
    </div>
  </div>
);
