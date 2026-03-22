import { AgeGroup } from "@/data/denverMilestones";

interface AgeNavProps {
  ageGroups: AgeGroup[];
  activeId: string;
  onSelect: (id: string) => void;
}

export const AgeNav = ({ ageGroups, activeId, onSelect }: AgeNavProps) => (
  <nav className="flex gap-1 overflow-x-auto pb-1 scrollbar-none">
    {ageGroups.map((ag) => (
      <button
        key={ag.id}
        onClick={() => onSelect(ag.id)}
        className={`shrink-0 rounded px-3 py-2 text-sm font-medium transition-colors duration-150 active:scale-[0.97] ${
          activeId === ag.id
            ? "bg-primary text-primary-foreground shadow-sm"
            : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
        }`}
      >
        <span className="block">{ag.label}</span>
        <span className="block text-[10px] opacity-70">{ag.sublabel}</span>
      </button>
    ))}
  </nav>
);
