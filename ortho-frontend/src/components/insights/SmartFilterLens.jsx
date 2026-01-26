import React, { useMemo } from "react";

const SmartFilterLens = ({ filters, setFilters, topics = [] }) => {
  const topicOptions = useMemo(() => ["All", ...topics], [topics]);

  return (
    <>
      <style>{`
        .lens {
  position: fixed;
  right: 18px;
  top: 230px;   /* ✅ FIXED */
  width: 280px;
  border-radius: 22px;
  background: rgba(255,255,255,0.72);
  border: 1px solid rgba(15,23,42,0.10);
  backdrop-filter: blur(14px);
  padding: 12px;
  z-index: 999;
  box-shadow: 0 20px 50px rgba(15,23,42,0.12);
}


        .lens-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 8px;
          font-size: 13px;
        }

        .lens-chip {
          font-size: 11px;
          font-weight: 900;
          padding: 6px 10px;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(56,189,248,0.22), rgba(139,92,246,0.18));
          border: 1px solid rgba(56,189,248,0.22);
          color: #0f172a;
        }

        .lens-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .lens-input,
        .lens-select {
          width: 100%;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid rgba(15,23,42,0.10);
          outline: none;
          background: rgba(255,255,255,0.78);
          color: #0f172a;
          font-weight: 700;
          font-family: inherit;
          font-size: 13px;
        }

        .lens-input::placeholder {
          color: #94a3b8;
        }

        .range-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .hint {
          font-size: 11px;
          color: #64748b;
          line-height: 1.5;
          margin-top: 2px;
        }

        @media (max-width: 900px) {
          .lens {
            position: sticky;
            top: 0;
            right: 0;
            width: 100%;
            margin-bottom: 16px;
          }
        }
      `}</style>

      <div className="lens">
        <div className="lens-title">
          Smart Filter Lens
          <span className="lens-chip">Live</span>
        </div>

        <div className="lens-grid">
          <input
            className="lens-input"
            placeholder="Search anything (knee, trauma, cement...)"
            value={filters.search}
            onChange={(e) => setFilters((p) => ({ ...p, search: e.target.value }))}
          />

          <select
            className="lens-select"
            value={filters.topic}
            onChange={(e) => setFilters((p) => ({ ...p, topic: e.target.value }))}
          >
            {topicOptions.map((t) => (
              <option key={t} value={t}>
                Topic: {t}
              </option>
            ))}
          </select>

          <select
            className="lens-select"
            value={filters.contentType}
            onChange={(e) => setFilters((p) => ({ ...p, contentType: e.target.value }))}
          >
            {["All", "Books", "Papers", "Implants", "Devices"].map((x) => (
              <option key={x} value={x}>
                Type: {x}
              </option>
            ))}
          </select>

          <div className="range-row">
            <select
              className="lens-select"
              value={filters.yearFrom}
              onChange={(e) => setFilters((p) => ({ ...p, yearFrom: Number(e.target.value) }))}
            >
              {[2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026].map((y) => (
                <option key={y} value={y}>
                  From: {y}
                </option>
              ))}
            </select>

            <select
              className="lens-select"
              value={filters.yearTo}
              onChange={(e) => setFilters((p) => ({ ...p, yearTo: Number(e.target.value) }))}
            >
              {[2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026].map((y) => (
                <option key={y} value={y}>
                  To: {y}
                </option>
              ))}
            </select>
          </div>

          <div className="hint">
            ✅ Filters affect timeline, AI insights, and the live results panel.
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartFilterLens;
