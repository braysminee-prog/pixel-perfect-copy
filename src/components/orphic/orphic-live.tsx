import { useEffect, useState } from "react";

const activities = [
  { text: "Raka baru saja membeli VPS 4GB", meta: "Hosting & Infrastructure" },
  { text: "NexusStore mendapat rating 5.0", meta: "Penilaian penjual" },
  { text: "Anya membeli Script PHP", meta: "Software & Development" },
  { text: "Dimas menulis ulasan untuk Aurora UI Kit", meta: "Design & Creative" },
];

const CYCLE_MS = 4200;

export function OrphicLive() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % activities.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, []);

  const activity = activities[index];

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-hairline bg-card/40 px-6 py-14 md:px-14 md:py-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/8 to-transparent" />

          <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="orphic-eyebrow">See real activity</p>
              <h2 className="orphic-display mt-3 text-[1.75rem] text-foreground md:text-4xl">
                Orphic Live
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Aktivitas marketplace yang sedang berjalan di dalam Orphic.
              </p>
            </div>

            <div
              className="min-h-[4.5rem] md:min-h-[5.5rem] md:max-w-md md:text-right"
              aria-live="polite"
            >
              <p
                key={index}
                className="orphic-display text-xl leading-snug text-foreground md:text-2xl"
                style={{ animation: `orphic-activity ${CYCLE_MS}ms var(--ease-orphic) both` }}
              >
                {activity.text}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {activity.meta}
              </p>
            </div>
          </div>

          <p className="relative mt-10 text-[11px] text-muted-foreground/70">
            Data aktivitas pada tampilan ini masih contoh untuk prototipe visual.
          </p>
        </div>
      </div>
    </section>
  );
}
