import { Domain, domainBadgeColors, domainLabels } from "@/data/milestones";

interface DomainBadgeProps {
  domain: Domain;
  className?: string;
}

export const DomainBadge = ({ domain, className = "" }: DomainBadgeProps) => (
  <span
    className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium tracking-wide ${domainBadgeColors[domain]} ${className}`}
  >
    {domainLabels[domain]}
  </span>
);
