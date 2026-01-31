import React, { useMemo } from "react";

const AIInsights = ({ filters, aiCards = [], totals }) => {
  const computed = useMemo(() => {
    const base = aiCards.map((c) => ({ ...c }));

    // simple dynamic mapping (dummy, but LIVE)
    const withLive = base.map((c) => {
      if (c.key === "books") return { ...c, value: totals.books };
      if (c.key === "papers") return { ...c, value: totals.papers };
      if (c.key === "implants") return { ...c, value: totals.implants };
      if (c.key === "devices") return { ...c, value: totals.devices };
      return c;
    });

    return withLive;
  }, [aiCards, totals]);

  const trendColor = (trend) => {
    if (trend === "up") return "rgba(34,197,94,0.95)";
    if (trend === "down") return "rgba(239,68,68,0.95)";
    return "rgba(100,116,139,0.95)";
  };

  return (
    <>
      <style>{`
      /* ... inside <style> ... */
.ai-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; /* Added for mobile */
  gap: 10px;
  padding: 10px 12px;
}

@media (max-width: 600px) {
  .ai-grid {
    grid-template-columns: 1fr 1fr; /* 2 columns on mobile */
    gap: 8px;
  }
  .ai-top {
    flex-direction: column;
    align-items: flex-start;
  }
}
        .ai-wrap {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ai-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 18px;
          background: rgba(248,250,252,0.75);
          border: 1px solid rgba(15,23,42,0.06);
          color: #334155;
          font-size: 12px;
          font-weight: 800;
        }

        .ai-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .ai-card {
          border-radius: 18px;
          background: rgba(255,255,255,0.75);
          border: 1px solid rgba(15,23,42,0.08);
          backdrop-filter: blur(10px);
          padding: 12px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .ai-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 40px rgba(15,23,42,0.12);
        }

        .ai-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .ai-title {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #0f172a;
          font-weight: 900;
          font-size: 13px;
        }

        .ai-icon {
          width: 34px;
          height: 34px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(90deg, rgba(56,189,248,0.25), rgba(139,92,246,0.20));
          border: 1px solid rgba(56,189,248,0.22);
          font-size: 16px;
        }

        .ai-value {
          font-size: 16px;
          font-weight: 900;
          color: #0f172a;
        }

        .ai-sub {
          margin-top: 8px;
          font-size: 12px;
          color: #64748b;
          line-height: 1.6;
        }

        .trend {
          font-size: 11px;
          font-weight: 900;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(15,23,42,0.08);
          background: rgba(248,250,252,0.75);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
      `}</style>

      <div className="ai-wrap">
        <div className="ai-top">
          <span>
            Active: <b>{filters.topic}</b> • <b>{filters.contentType}</b>
          </span>
          <span>
            Years: <b>{filters.yearFrom}</b> - <b>{filters.yearTo}</b>
          </span>
        </div>

        <div className="ai-grid">
          {computed.map((c) => (
            <div key={c.id} className="ai-card">
              <div className="ai-row">
                <div className="ai-title">
                  <div className="ai-icon">{c.icon}</div>
                  {c.title}
                </div>

                <div style={{ textAlign: "right" }}>
                  <div className="ai-value">{c.value}</div>
                  <div
                    className="trend"
                    style={{
                      color: trendColor(c.trend),
                      borderColor: "rgba(15,23,42,0.08)",
                    }}
                  >
                    {c.trend === "up" ? "▲" : c.trend === "down" ? "▼" : "•"} {c.trendLabel}
                  </div>
                </div>
              </div>

              <div className="ai-sub">{c.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AIInsights;
