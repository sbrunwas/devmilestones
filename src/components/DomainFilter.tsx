import { Domain, domainLabels } from "@/data/denverMilestones";

const allDomains: Domain[] = [
  "gross-motor",
  "fine-motor",
  "self-help",
  "problem-solving",
  "social-emotional",
  "receptive-language",
  "expressive-language",
];

const filterColors: Record<Domain, { active: string; inactive: string }> = {
  "gross-motor": {
    active: "bg-domain-gross-motor/30 border-domain-gross-motor/60 text-foreground",
    inactive: "bg-transparent border-border text-muted-foreground hover:border-domain-gross-motor/40",
  },
  "fine-motor": {
    active: "bg-domain-fine-motor/30 border-domain-fine-motor/60 text-foreground",
    inactive: "bg-transparent border-border text-muted-foreground hover:border-domain-fine-motor/40",
  },
  "self-help": {
    active: "bg-domain-self-help/30 border-domain-self-help/60 text-foreground",
    inactive: "bg-transparent border-border text-muted-foreground hover:border-domain-self-help/40",
  },
  "problem-solving": {
    active: "bg-domain-problem-solving/30 border-domain-problem-solving/60 text-foreground",
    inactive: "bg-transparent border-border text-muted-foreground hover:border-domain-problem-solving/40",
  },
  "social-emotional": {
    active: "bg-domain-social-emotional/30 border-domain-social-emotional/60 text-foreground",
    inactive: "bg-transparent border-border text-muted-foreground hover:border-domain-social-emotional/40",
  },
  "receptive-language": {
    active: "bg-domain-receptive-language/30 border-domain-receptive-language/60 text-foreground",
    inactive: "bg-transparent border-border text-muted-foreground hover:border-domain-receptive-language/40",
  },
  "expressive-language": {
    active: "bg-domain-expressive-language/30 border-domain-expressive-language/60 text-foreground",
    inactive: "bg-transparent border-border text-muted-foreground hover:border-domain-expressive-language/40",
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
