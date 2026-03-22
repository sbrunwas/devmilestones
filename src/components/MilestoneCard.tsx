import { Milestone, domainColors } from "@/data/denverMilestones";
import { DomainBadge } from "./DomainBadge";

interface MilestoneCardProps {
  milestone: Milestone;
}

export const MilestoneCard = ({ milestone }: MilestoneCardProps) => (
  <div
    className={`group relative rounded border px-4 py-3 transition-shadow duration-200 hover:shadow-md ${domainColors[milestone.domain]}`}
  >
    <div className="flex items-start justify-between gap-2">
      <p className="text-sm font-medium leading-snug">{milestone.title}</p>
      {milestone.percentPassing && (
        <span className="shrink-0 rounded bg-background/60 px-1.5 py-0.5 text-[10px] font-semibold tabular-nums text-muted-foreground">
          {milestone.percentPassing}
        </span>
      )}
    </div>
    <div className="mt-2">
      <DomainBadge domain={milestone.domain} />
    </div>
  </div>
);
