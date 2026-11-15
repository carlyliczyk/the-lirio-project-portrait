import { competitive } from "@/content/lirio";

export function ScoreTable() {
  return (
    <div className="reveal overflow-x-auto rounded-lg border border-border bg-card">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="eyebrow px-5 py-4 font-medium">Feature</th>
            {competitive.columns.map((c, i) => (
              <th
                key={c}
                className={`px-4 py-4 text-center font-display text-base ${i === 0 ? "bg-ink text-ink-foreground" : ""}`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {competitive.rows.map((row) => (
            <tr key={row.feature} className="border-b border-border last:border-0">
              <td className="px-5 py-3.5 text-foreground">{row.feature}</td>
              {row.scores.map((s, i) => (
                <td key={i} className={`px-4 py-3.5 ${i === 0 ? "bg-secondary" : ""}`}>
                  <div className="flex flex-col items-center gap-1.5">
                    <span
                      className={`tabular-nums ${s === 0 ? "text-muted-foreground" : "text-foreground"}`}
                    >
                      {s}
                    </span>
                    <span className="h-0.5 w-12 bg-hairline">
                      <span
                        className={`block h-full ${i === 0 ? "bg-gold" : "bg-ink"}`}
                        style={{ width: `${s * 10}%` }}
                      />
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
