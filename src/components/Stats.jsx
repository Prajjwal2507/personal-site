import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_MS = 24 * 60 * 60 * 1000;
const WEEKS = 53;

function cellColor(level) {
  return `var(--heatmap-${level > 4 ? 4 : level})`;
}

// Bucket a LeetCode `submissionCalendar` ({ unix_seconds: count }) into a
// 53-week grid ending today, using 0-4 intensity levels.
function buildHeatmap(calendar) {
  if (!calendar || typeof calendar !== "object") return { grid: [], months: [], total: 0 };

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const endDay = today.getDay();
  const start = new Date(today.getTime() - ((WEEKS - 1) * 7 + endDay) * DAY_MS);

  const byDate = new Map();
  let total = 0;
  for (const [ts, count] of Object.entries(calendar)) {
    const seconds = Number(ts);
    if (!Number.isFinite(seconds)) continue;
    const d = new Date(seconds * 1000);
    d.setHours(0, 0, 0, 0);
    const key = d.getTime();
    byDate.set(key, (byDate.get(key) || 0) + Number(count));
    total += Number(count);
  }

  const grid = [];
  const monthLabels = new Array(WEEKS).fill(null);
  const seenMonths = new Set();

  for (let w = 0; w < WEEKS; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const day = new Date(start.getTime() + (w * 7 + d) * DAY_MS);
      day.setHours(0, 0, 0, 0);
      const count = byDate.get(day.getTime()) || 0;
      let level = 0;
      if (count >= 1) level = 1;
      if (count >= 3) level = 2;
      if (count >= 5) level = 3;
      if (count >= 9) level = 4;
      week.push({ level, count, date: day });

      // Label a month only at the first Sunday inside that month (day-of-month
      // <= 7). This avoids the "Aug / Sep" overlap when week 0 is a stub week.
      if (d === 0) {
        const dom = day.getDate();
        const m = day.getMonth();
        if (dom <= 7 && !seenMonths.has(m)) {
          seenMonths.add(m);
          monthLabels[w] = MONTHS[m];
        }
      }
    }
    grid.push(week);
  }

  return { grid, months: monthLabels, total };
}

export default function Stats() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [gh, setGh] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/leetcode-stats")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then((json) => !cancelled && setData(json))
      .catch((err) => !cancelled && setError(err.message || "Failed to load."));
    fetch("/api/github-stats")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then((json) => !cancelled && setGh(json))
      .catch(() => {
        /* GitHub card is non-critical; ignore failures. */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const heatmap = useMemo(() => buildHeatmap(data?.calendar), [data]);

  const stats = data?.stats;
  const totalSolved = stats?.total ?? null;
  const easy = stats?.easy ?? 0;
  const medium = stats?.medium ?? 0;
  const hard = stats?.hard ?? 0;

  const distTotal = Math.max(1, easy + medium + hard);
  const distribution = [
    { label: "Easy", count: easy, pct: `${(easy / distTotal) * 100}%`, color: "#34d399" },
    { label: "Medium", count: medium, pct: `${(medium / distTotal) * 100}%`, color: "#fbbf24" },
    { label: "Hard", count: hard, pct: `${(hard / distTotal) * 100}%`, color: "#f87171" },
  ];

  return (
    <section id="stats" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="mb-16">
          <p className="section-label">Metrics</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Consistent <span className="gradient-text">growth.</span>
          </h2>
          <p className="text-sm text-[var(--fg-muted)] mt-4 max-w-xl">
            Live data pulled from my{" "}
            <a
              href={`https://leetcode.com/${data?.username || "prajjwal_rajput"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted hover:text-[var(--accent)]"
            >
              LeetCode profile
            </a>
            {error ? " — falling back to last known snapshot." : "."}
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 flex flex-col gap-8">
            <FadeIn delay={0.1} className="card p-8 flex-1 flex flex-col justify-center">
              <p className="text-[var(--fg-muted)] text-sm mb-2">Problems Solved</p>
              <p className="text-5xl font-bold text-[var(--accent)] mb-4">
                {totalSolved !== null ? totalSolved.toLocaleString() : "…"}
              </p>
              <div className="flex justify-between text-xs font-mono text-[var(--fg-dim)] border-t border-[var(--border)] pt-4">
                <span>
                  {data?.streak != null ? `Streak · ${data.streak}` : "DSA · DP · Graphs"}
                </span>
                <span>
                  {data?.ranking ? `Global rank #${data.ranking.toLocaleString()}` : "Live LeetCode"}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="card p-8 flex-1 flex flex-col justify-center">
              <p className="text-[var(--fg-muted)] text-sm mb-4">Problem Distribution</p>
              <div className="space-y-4">
                {distribution.map((d) => (
                  <div key={d.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-[var(--fg-muted)]">{d.label}</span>
                      <span className="font-mono">{d.count.toLocaleString()}</span>
                    </div>
                    <div className="h-1.5 bg-[var(--surface-2)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: d.pct }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: d.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8">
            <FadeIn delay={0.3} className="card p-8 flex-1 overflow-x-auto">
              <div className="flex justify-between items-end mb-8 min-w-[600px]">
                <div>
                  <h3 className="font-bold text-lg mb-1">Activity Map</h3>
                  <p className="text-sm text-[var(--fg-muted)]">
                    {data
                      ? `${heatmap.total.toLocaleString()} submissions in the last year${
                          data.totalActiveDays ? ` · ${data.totalActiveDays} active days` : ""
                        }`
                      : "Loading live LeetCode calendar…"}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--fg-dim)]">
                  <span>Less</span>
                  {[0, 1, 2, 3, 4].map((n) => (
                    <div key={n} className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: cellColor(n) }} />
                  ))}
                  <span>More</span>
                </div>
              </div>

              <p className="md:hidden text-[10px] font-mono uppercase tracking-widest text-[var(--fg-dim)] mb-3">
                ← swipe to view the full year →
              </p>

              <div className="min-w-[600px]">
                <div className="flex mb-2 ml-6 text-xs text-[var(--fg-dim)]">
                  {heatmap.grid.length > 0
                    ? heatmap.months.map((m, i) => (
                        <div key={i} className="flex-1 text-center min-w-[10px]">
                          {m || ""}
                        </div>
                      ))
                    : MONTHS.map((m) => (
                        <div key={m} className="flex-1 text-center">{m}</div>
                      ))}
                </div>
                <div className="flex gap-1">
                  {(heatmap.grid.length > 0
                    ? heatmap.grid
                    : Array.from({ length: WEEKS }, () => Array.from({ length: 7 }, () => ({ level: 0 })))
                  ).map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-1 flex-1">
                      {week.map((cell, di) => (
                        <div
                          key={di}
                          className="w-full aspect-square rounded-sm"
                          title={
                            cell.date
                              ? `${cell.count || 0} submissions · ${cell.date.toDateString()}`
                              : undefined
                          }
                          style={{ backgroundColor: cellColor(cell.level) }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} className="grid grid-cols-2 gap-8">
              <a
                href={`https://leetcode.com/${data?.username || "prajjwal_rajput"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 flex items-center justify-between group"
              >
                <div>
                  <p className="font-bold">LeetCode</p>
                  <p className="text-sm text-[var(--fg-muted)]">
                    {totalSolved !== null ? `${totalSolved.toLocaleString()} solved` : "Live profile"}
                  </p>
                </div>
                <span className="text-[var(--border-focus)] group-hover:text-[var(--accent)] transition-colors">↗</span>
              </a>
              <a
                href={`https://github.com/${gh?.username || "Prajjwal2507"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 flex items-center justify-between group"
              >
                <div>
                  <p className="font-bold">GitHub</p>
                  <p className="text-sm text-[var(--fg-muted)]">
                    {gh
                      ? `${gh.publicRepos} repos · ${gh.totalStars ?? 0} ★ · ${gh.followers} followers`
                      : "@Prajjwal2507"}
                  </p>
                </div>
                <span className="text-[var(--border-focus)] group-hover:text-[var(--accent)] transition-colors">↗</span>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
