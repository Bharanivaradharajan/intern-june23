import React, { useMemo, useState } from "react";

const SurgeryJourneyExplorer = ({ surgeries = [], selectedSurgeryId, onSelectSurgery }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const selected = useMemo(() => {
    const found = surgeries.find((s) => s.id === selectedSurgeryId);
    return found || surgeries[0];
  }, [surgeries, selectedSurgeryId]);

  const steps = selected?.steps || [];
  const activeStep = steps[activeStepIndex] || steps[0];

  const handleChangeSurgery = (id) => {
    onSelectSurgery?.(id);
    setActiveStepIndex(0);
  };

  return (
    <>
      <style>{`
        .journey-wrap {
          display: grid;
          grid-template-columns: 230px 1fr;
          gap: 14px;
        }

        .journey-left select {
          width: 100%;
          padding: 12px 12px;
          border-radius: 14px;
          border: 1px solid rgba(15,23,42,0.10);
          background: rgba(255,255,255,0.75);
          outline: none;
          font-weight: 700;
          color: #0f172a;
        }

        .step-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 12px;
        }

        .step-chip {
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(15,23,42,0.10);
          background: rgba(255,255,255,0.65);
          font-size: 12px;
          font-weight: 800;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .step-chip:hover {
          background: rgba(56,189,248,0.12);
          border-color: rgba(56,189,248,0.3);
          color: #0284c7;
        }

        .step-chip.active {
          border: none;
          background: linear-gradient(90deg, rgba(56,189,248,0.95), rgba(139,92,246,0.95));
          color: white;
        }

        .step-card {
          margin-top: 12px;
          border-radius: 18px;
          background: rgba(248,250,252,0.75);
          border: 1px solid rgba(15,23,42,0.06);
          padding: 14px;
        }

        .step-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 6px;
        }

        .step-title h4 {
          margin: 0;
          font-size: 14px;
          font-weight: 900;
          color: #0f172a;
        }

        .tag {
          font-size: 11px;
          font-weight: 900;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(56,189,248,0.12);
          color: #0284c7;
          border: 1px solid rgba(56,189,248,0.25);
        }

        .step-card p {
          margin: 0;
          font-size: 13px;
          color: #334155;
          line-height: 1.6;
        }

        .mini-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-top: 12px;
        }

        .mini-box {
          border-radius: 16px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(15,23,42,0.06);
          padding: 10px;
        }

        .mini-box b {
          display: block;
          font-size: 12px;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .mini-item {
          font-size: 12px;
          color: #334155;
          padding: 8px 10px;
          border-radius: 12px;
          background: rgba(248,250,252,0.7);
          border: 1px solid rgba(15,23,42,0.05);
          margin-bottom: 8px;
        }

        @media (max-width: 900px) {
          .journey-wrap {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="journey-wrap">
        <div className="journey-left">
          <select
            value={selected?.id}
            onChange={(e) => handleChangeSurgery(e.target.value)}
          >
            {surgeries.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>

          <div className="step-row">
            {steps.map((st, i) => (
              <div
                key={st.key}
                className={`step-chip ${i === activeStepIndex ? "active" : ""}`}
                onClick={() => setActiveStepIndex(i)}
              >
                {st.label}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="step-card">
            <div className="step-title">
              <h4>{activeStep?.label}</h4>
              <span className="tag">{selected?.tag}</span>
            </div>

            <p>{activeStep?.description}</p>

            <div className="mini-grid">
              <div className="mini-box">
                <b>🦴 Suggested Implants</b>
                {(activeStep?.suggestedImplants || []).slice(0, 3).map((x) => (
                  <div key={x} className="mini-item">{x}</div>
                ))}
              </div>

              <div className="mini-box">
                <b>🛠 Required Tools</b>
                {(activeStep?.requiredTools || []).slice(0, 3).map((x) => (
                  <div key={x} className="mini-item">{x}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurgeryJourneyExplorer;
