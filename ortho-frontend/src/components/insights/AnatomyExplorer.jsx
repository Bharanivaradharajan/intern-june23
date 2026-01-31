import React from "react";

const AnatomyExplorer = ({ regions = [], selectedRegionId, onSelectRegion }) => {
  return (
    <>
      <style>{`
      /* ... inside <style> ... */
@media (max-width: 480px) {
  .anatomy {
    height: 280px; /* Shorter on mobile */
  }
  .silhouette-body {
    width: 140px;
    height: 220px;
  }
  .pill {
    font-size: 10px;
    padding: 5px 8px;
  }
}
        .anatomy {
          position: relative;
          border-radius: 18px;
          border: 1px solid rgba(15,23,42,0.06);
          background: radial-gradient(circle at 50% 30%, rgba(56,189,248,0.16), transparent 45%),
                      rgba(248,250,252,0.75);
          overflow: hidden;
          height: 330px;
        }

        .silhouette {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.9;
        }

        .silhouette-body {
          width: 170px;
          height: 280px;
          border-radius: 999px;
          background: rgba(15,23,42,0.06);
          border: 1px solid rgba(15,23,42,0.08);
          position: relative;
        }

        .silhouette-body::before {
          content: "";
          position: absolute;
          top: -34px;
          left: 50%;
          transform: translateX(-50%);
          width: 70px;
          height: 70px;
          border-radius: 999px;
          background: rgba(15,23,42,0.06);
          border: 1px solid rgba(15,23,42,0.08);
        }

        .hotspot {
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 999px;
          background: rgba(56,189,248,0.95);
          box-shadow: 0 0 0 8px rgba(56,189,248,0.18);
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .hotspot:hover {
          transform: scale(1.2);
        }

        .hotspot.active {
          background: rgba(139,92,246,0.95);
          box-shadow: 0 0 0 10px rgba(139,92,246,0.20);
        }

        .legend {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          border-radius: 18px;
          background: rgba(255,255,255,0.70);
          border: 1px solid rgba(15,23,42,0.08);
          backdrop-filter: blur(10px);
          padding: 10px 12px;
        }

        .legend h4 {
          margin: 0 0 8px;
          font-size: 13px;
          font-weight: 900;
          color: #0f172a;
        }

        .legend-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .pill {
          padding: 7px 10px;
          border-radius: 999px;
          border: 1px solid rgba(15,23,42,0.08);
          background: rgba(255,255,255,0.7);
          font-size: 12px;
          font-weight: 800;
          color: #334155;
          cursor: pointer;
        }

        .pill:hover {
          background: rgba(56,189,248,0.12);
          border-color: rgba(56,189,248,0.22);
          color: #0284c7;
        }
      `}</style>

      <div className="anatomy">
        <div className="silhouette">
          <div className="silhouette-body" />
        </div>

        {/* hotspots */}
        {regions.map((r) => (
          <div
            key={r.id}
            className={`hotspot ${selectedRegionId === r.id ? "active" : ""}`}
            style={{ top: r.position.top, left: r.position.left }}
            title={r.label}
            onClick={() => onSelectRegion?.(r.id)}
          />
        ))}

        <div className="legend">
          <h4>🧬 Regions</h4>
          <div className="legend-row">
            {regions.map((r) => (
              <span key={r.id} className="pill" onClick={() => onSelectRegion?.(r.id)}>
                {r.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnatomyExplorer;
