import { useState, useMemo, useCallback } from "react";
import { ageGroups, Domain } from "@/data/denverMilestones";
import { AgeNav } from "@/components/AgeNav";
import { DomainFilter } from "@/components/DomainFilter";
import { MilestoneCard } from "@/components/MilestoneCard";
import { MilestoneSearch } from "@/components/MilestoneSearch";

const allDomains = new Set<Domain>([
  "gross-motor",
  "fine-motor",
  "self-help",
  "problem-solving",
  "social-emotional",
  "receptive-language",
  "expressive-language",
]);

const Index = () => {
  const [activeAgeId, setActiveAgeId] = useState(ageGroups[0].id);
  const [activeDomains, setActiveDomains] = useState<Set<Domain>>(new Set(allDomains));

  const handleToggleDomain = useCallback((domain: Domain) => {
    setActiveDomains((prev) => {
      const next = new Set(prev);
      if (next.has(domain)) {
        if (next.size > 1) next.delete(domain);
      } else {
        next.add(domain);
      }
      return next;
    });
  }, []);

  const activeGroup = useMemo(
    () => ageGroups.find((ag) => ag.id === activeAgeId) ?? ageGroups[0],
    [activeAgeId]
  );

  const filteredMilestones = useMemo(
    () => activeGroup.milestones.filter((ms) => activeDomains.has(ms.domain)),
    [activeGroup, activeDomains]
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
          <h1 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Developmental Milestones
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Reference tool for developmental milestones from birth to 6 years, organized by age and domain.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
        <section>
          <h2 className="mb-2 font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Age Group
          </h2>
          <AgeNav ageGroups={ageGroups} activeId={activeAgeId} onSelect={setActiveAgeId} />
        </section>

        <section className="mt-6">
          <h2 className="mb-2 font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Filter by Domain
          </h2>
          <DomainFilter activeDomains={activeDomains} onToggle={handleToggleDomain} />
        </section>

        <section className="mt-8">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-lg font-semibold text-foreground">
              {activeGroup.label}
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                — {activeGroup.sublabel}
              </span>
            </h2>
            <span className="text-xs tabular-nums text-muted-foreground">
              {filteredMilestones.length} milestone{filteredMilestones.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMilestones.map((ms) => (
              <MilestoneCard key={ms.id} milestone={ms} />
            ))}
          </div>

          {filteredMilestones.length === 0 && (
            <p className="mt-8 text-center text-sm text-muted-foreground">
              No milestones match the selected filters.
            </p>
          )}
        </section>

        <footer className="mt-12 border-t pt-6 pb-8">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Based on "Developmental Milestones" by Scharf, Scharf, & Stroustrup (Pediatrics in Review, 2016).
            Published by the American Academy of Pediatrics. This tool is for reference purposes only and
            should not replace professional developmental assessment.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
