import React from "react";

const CoverageHeatmap = ({ heatmap, onSelectCell }) => {
  if (!heatmap) return null;

  const { topics = [], types = [], matrix = [] } = heatmap;

  const intensity = (val) => {
    // return 0..1
    const max = 30;
    const v = Math.min(val || 0, max);
    return v / max;
  };

  return (
    <>
      <style>{`
        .heatmap-wrap {
          width: 100%;
          overflow-x: auto;
          border-radius: 18px;
          border: 1px solid rgba(15,23,42,0.06);
          background: rgba(248,250,252,0.75);
          padding: 12px;
        }

        .heatmap-grid {
          min-width: 650px;
          display: grid;
          grid-template-columns: 180px repeat(4, 1fr);
          gap: 10px;
        }

        .heat-head {
          font-size: 12px;
          font-weight: 900;
          color: #0f172a;
          padding: 10px 12px;
          border-radius: 14px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(15,23,42,0.06);
          text-align: center;
        }

        .heat-topic {
          text-align: left;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .heat-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(56,189,248,0.85);
          box-shadow: 0 0 0 6px rgba(56,189,248,0.14);
        }

        .cell {
          padding: 12px;
          border-radius: 16px;
          border: 1px solid rgba(15,23,42,0.06);
          background: rgba(255,255,255,0.65);
          cursor: pointer;
          transition: transform 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .cell:hover {
          transform: translateY(-2px);
        }

        .cell::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.9;
          background: linear-gradient(90deg, rgba(56,189,248,0.25), rgba(139,92,246,0.18));
          transform: translateX(-100%);
          transition: transform 0.25s ease;
        }

        .cell:hover::before {
          transform: translateX(0%);
        }

        .cell-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .cell-count {
          font-weight: 900;
          color: #0f172a;
          font-size: 14px;
        }

        .cell-tag {
          font-size: 11px;
          font-weight: 900;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(15,23,42,0.08);
          background: rgba(248,250,252,0.75);
          color: #334155;
        }
      `}</style>

      <div className="heatmap-wrap">
        <div className="heatmap-grid">
          {/* header row */}
          <div className="heat-head heat-topic">
            <span className="heat-dot" /> Topic
          </div>
          {types.map((t) => (
            <div key={t} className="heat-head">
              {t}
            </div>
          ))}

          {/* body */}
          {topics.map((topicLabel, rIdx) => (
            <React.Fragment key={topicLabel}>
              <div className="heat-head heat-topic">{topicLabel}</div>

              {types.map((type, cIdx) => {
                const val = matrix?.[rIdx]?.[cIdx] || 0;
                const alpha = intensity(val);

                return (
                  <div
                    key={`${topicLabel}-${type}`}
                    className="cell"
                    style={{
                      background: `rgba(255,255,255,0.65)`,
                      borderColor: `rgba(56,189,248,${0.10 + alpha * 0.25})`,
                      boxShadow: `0 10px 26px rgba(15,23,42,${0.06 + alpha * 0.07})`,
                    }}
                    onClick={() =>
                      onSelectCell?.({
                        topicLabel,
                        contentType: type,
                      })
                    }
                    title="Click to filter results"
                  >
                    <div className="cell-content">
                      <span className="cell-count">{val}</span>
                      <span className="cell-tag">{type}</span>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoverageHeatmap;
