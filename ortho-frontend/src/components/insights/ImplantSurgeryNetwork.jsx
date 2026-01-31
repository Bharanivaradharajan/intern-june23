import React, { useMemo, useState } from "react";

const ImplantSurgeryNetwork = ({
  implants = [],
  surgeryNodes = [],
  connections = [],
  onSelectTopicLabel,
}) => {
  const [selectedImplantId, setSelectedImplantId] = useState(null);
  const [selectedSurgeryId, setSelectedSurgeryId] = useState(null);

  const relevantConnections = useMemo(() => {
    return connections.filter((c) => {
      if (selectedImplantId && c.implantId !== selectedImplantId) return false;
      if (selectedSurgeryId && c.surgeryId !== selectedSurgeryId) return false;
      return true;
    });
  }, [connections, selectedImplantId, selectedSurgeryId]);

  const usageLabel = (score) => {
    if (score >= 80) return "High";
    if (score >= 55) return "Medium";
    return "Low";
  };

  return (
    <>
      <style>{`

      /* ... inside <style> ... */
.net-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

@media (max-width: 768px) {
  .net-wrap {
    grid-template-columns: 1fr; /* Stacked */
  }
}
        .net-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          align-items: start;
        }

        .net-col h4 {
          margin: 0 0 8px;
          font-size: 13px;
          font-weight: 900;
          color: #0f172a;
        }

        .net-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid rgba(15,23,42,0.08);
          background: rgba(255,255,255,0.7);
          cursor: pointer;
          transition: transform 0.2s ease;
          margin-bottom: 10px;
        }

        .net-item:hover {
          transform: translateY(-2px);
        }

        .net-item.active {
          border: none;
          background: linear-gradient(90deg, rgba(56,189,248,0.95), rgba(139,92,246,0.95));
          color: white;
        }

        .net-name {
          font-size: 12px;
          font-weight: 900;
          color: inherit;
        }

        .net-tag {
          font-size: 11px;
          font-weight: 900;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(56,189,248,0.12);
          border: 1px solid rgba(56,189,248,0.25);
          color: #0284c7;
        }

        .net-item.active .net-tag {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.25);
          color: rgba(255,255,255,0.95);
        }

        .conn-box {
          margin-top: 6px;
          border-radius: 18px;
          border: 1px solid rgba(15,23,42,0.06);
          background: rgba(248,250,252,0.75);
          padding: 12px;
        }

        .conn-box h4 {
          margin: 0 0 8px;
          font-size: 13px;
          font-weight: 900;
          color: #0f172a;
        }

        .conn-row {
          display: grid;
          grid-template-columns: 1fr 1fr 90px;
          gap: 8px;
          padding: 10px;
          border-radius: 14px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(15,23,42,0.06);
          margin-bottom: 10px;
        }

        .conn-row b {
          font-size: 12px;
          color: #0f172a;
        }

        .conn-row span {
          font-size: 12px;
          color: #334155;
        }

        .score {
          text-align: center;
          font-size: 11px;
          font-weight: 900;
          border-radius: 999px;
          padding: 6px 10px;
          border: 1px solid rgba(15,23,42,0.08);
          color: #0284c7;
          background: rgba(56,189,248,0.12);
        }

        @media (max-width: 900px) {
          .net-wrap {
            grid-template-columns: 1fr;
          }
          .conn-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="net-wrap">
        <div className="net-col">
          <h4>🦴 Implants</h4>
          {implants.map((i) => (
            <div
              key={i.id}
              className={`net-item ${selectedImplantId === i.id ? "active" : ""}`}
              onClick={() => {
                setSelectedImplantId((prev) => (prev === i.id ? null : i.id));
                setSelectedSurgeryId(null);
                if (i.topicLabel) onSelectTopicLabel?.(i.topicLabel);
              }}
            >
              <span className="net-name">{i.title}</span>
              <span className="net-tag">{i.topicLabel}</span>
            </div>
          ))}
        </div>

        <div className="net-col">
          <h4>🧩 Surgeries</h4>
          {surgeryNodes.map((s) => (
            <div
              key={s.id}
              className={`net-item ${selectedSurgeryId === s.id ? "active" : ""}`}
              onClick={() => {
                setSelectedSurgeryId((prev) => (prev === s.id ? null : s.id));
                setSelectedImplantId(null);
                if (s.topicLabel) onSelectTopicLabel?.(s.topicLabel);
              }}
            >
              <span className="net-name">{s.title}</span>
              <span className="net-tag">{s.topicLabel}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="conn-box">
        <h4>🔗 Connections (Usage)</h4>

        {relevantConnections.length === 0 ? (
          <div style={{ color: "#64748b", fontSize: 12 }}>
            No connections found. Select an implant or surgery to filter.
          </div>
        ) : (
          relevantConnections.slice(0, 8).map((c, idx) => {
            const imp = implants.find((x) => x.id === c.implantId);
            const sur = surgeryNodes.find((x) => x.id === c.surgeryId);

            return (
              <div key={idx} className="conn-row">
                <b>{imp?.title || "Implant"}</b>
                <span>{sur?.title || "Surgery"}</span>
                <div className="score">{usageLabel(c.usageScore)}</div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default ImplantSurgeryNetwork;
