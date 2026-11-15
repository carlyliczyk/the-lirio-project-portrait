import { competitive } from "@/content/lirio";

/** Competitor feature scores (out of 10) with inline bars. The Lirio column is highlighted. */
export function ScoreTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left text-caption">
        <caption className="sr-only">Competitive feature scores out of 10</caption>
        <thead>
          <tr className="border-b border-border">
            <th scope="col" className="eyebrow px-5 py-4 font-normal">
              Feature
            </th>
            {competitive.columns.map((c, i) => (
              <th key={c} scope="col" className="px-4 py-4 text-center font-medium">
                <span className={`pill ${i === 0 ? "pill-solid pill-dot" : ""}`}>{c}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {competitive.rows.map((row) => (
            <tr key={row.feature} className="border-b border-border last:border-0">
              <th scope="row" className="px-5 py-3.5 text-body font-normal text-foreground">
                {row.feature}
              </th>
              {row.scores.map((s, i) => (
                <td key={i} className={`px-4 py-3.5 ${i === 0 ? "bg-secondary" : ""}`}>
                  <div className="flex items-center justify-center gap-3">
                    <span className="h-1.5 w-14 overflow-hidden rounded-full bg-border">
                      <span
                        className={`block h-full rounded-full ${i === 0 ? "bg-foreground" : "bg-muted-foreground/60"}`}
                        style={{ width: `${s * 10}%` }}
                      />
                    </span>
                    <span
                      className={`w-5 text-right font-mono tabular-nums ${s === 0 ? "text-muted-foreground" : "text-foreground"}`}
                    >
                      {s}
                    </span>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
