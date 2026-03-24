import { useState, useMemo, useRef, useEffect } from "react";
import { ageGroups, domainLabels, domainColors } from "@/data/milestones";
import { Search, X } from "lucide-react";
import { DomainBadge } from "./DomainBadge";

interface SearchResult {
  milestone: { id: string; title: string; domain: string };
  ageLabel: string;
  ageSublabel: string;
  score: number;
}

function fuzzyMatch(query: string, text: string): number {
  const q = query.toLowerCase();
  const t = text.toLowerCase();
  if (t.includes(q)) return 2;
  // simple fuzzy: check if all query chars appear in order
  let qi = 0;
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) qi++;
  }
  if (qi === q.length) return 1;
  // word-start matching
  const words = t.split(/\s+/);
  const qWords = q.split(/\s+/);
  const matched = qWords.filter((qw) =>
    words.some((w) => w.startsWith(qw))
  );
  if (matched.length === qWords.length) return 1.5;
  if (matched.length > 0) return 0.5;
  return 0;
}

export const MilestoneSearch = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim();
    if (q.length < 2) return [];
    const hits: SearchResult[] = [];
    for (const ag of ageGroups) {
      for (const ms of ag.milestones) {
        const score = fuzzyMatch(q, ms.title);
        if (score > 0) {
          hits.push({
            milestone: ms,
            ageLabel: ag.label,
            ageSublabel: ag.sublabel,
            score,
          });
        }
      }
    }
    hits.sort((a, b) => b.score - a.score);
    return hits.slice(0, 12);
  }, [query]);

  return (
    <div ref={ref} className="relative w-full max-w-sm">
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search milestones…"
          className="h-8 w-full rounded-md border border-input bg-background pl-8 pr-8 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setOpen(false); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <div className="absolute top-full left-0 z-50 mt-1 w-full min-w-[320px] overflow-hidden rounded-md border bg-popover shadow-lg">
          <ul className="max-h-[300px] overflow-y-auto py-1">
            {results.map((r, i) => (
              <li
                key={`${r.milestone.id}-${i}`}
                className="flex flex-col gap-1 px-3 py-2 hover:bg-accent/50 transition-colors"
              >
                <span className="text-sm font-medium leading-snug text-foreground">
                  {r.milestone.title}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs tabular-nums text-muted-foreground">
                    {r.ageLabel} — {r.ageSublabel}
                  </span>
                  <DomainBadge domain={r.milestone.domain as any} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {open && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-md border bg-popover p-3 shadow-lg">
          <p className="text-center text-sm text-muted-foreground">No milestones found.</p>
        </div>
      )}
    </div>
  );
};
