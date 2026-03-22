import { Domain, domainLabels } from "@/data/denverMilestones";

const allDomains: Domain[] = ["gross-motor", "fine-motor", "language", "personal-social"];

const filterColors: Record<Domain, { active: string; inactive: string }> = {
  "gross-motor": {
    active: "bg-domain-gross-motor/30 border-domain-gross-motor/60 text-foreground",
    inactive: "bg-transparent border-border text-muted-foreground hover:border-domain-gross-motor/40",
  },
  "fine-motor": {
    active: "bg-domain-fine-motor/50 border-domain-fine-motor/70 text-foreground",
    inactive: "bg-transparent border-border text-muted-foreground hover:border-domain-fine-motor/50",
  },
  "language": {
    active: "bg-domain-language/40 border-domain-language/60 text-foreground",
    inactive: "bg-transparent border-border text-muted-foreground hover:border-domain-language/40",
  },
  "personal-social": {
    active: "bg-domain-personal-social/30 border-domain-personal-social/50 text-foreground",
    inactive: "bg-transparent border-border text-muted-foreground hover:border-domain-personal-social/40",
  },
};

interface DomainFilterProps {
  activeDomains: Set<Domain>;
  onToggle: (domain: Domain) => void;
}

export const DomainFilter = ({ activeDomains, onToggle }: DomainFilterProps) => (
  <div className="flex flex-wrap gap-2">
    {allDomains.map((d) => {
      const isActive = activeDomains.has(d);
      return (
        <button
          key={d}
          onClick={() => onToggle(d)}
          className={`rounded border px-3 py-1.5 text-xs font-medium transition-colors duration-150 active:scale-[0.97] ${
            isActive ? filterColors[d].active : filterColors[d].inactive
          }`}
        >
          {domainLabels[d]}
        </button>
      );
    })}
  </div>
);
