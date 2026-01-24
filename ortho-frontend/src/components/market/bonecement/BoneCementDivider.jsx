import React from "react";

const BoneCementDivider = () => {
  return (
    <>
      <style>{`
        .bone-divider {
          border-radius: 18px;
          padding: 18px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          background: linear-gradient(180deg, #0b1220, #111827);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .bone-divider::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 20%, rgba(56,189,248,0.25), transparent 40%),
                      radial-gradient(circle at 80% 40%, rgba(2,132,199,0.25), transparent 40%);
          pointer-events: none;
        }

        .bone-divider h3 {
          margin: 0 0 6px;
          font-size: 18px;
          font-weight: 800;
          position: relative;
          z-index: 1;
        }

        .bone-divider p {
          margin: 0;
          font-size: 14px;
          color: rgba(255,255,255,0.85);
          line-height: 1.6;
          position: relative;
          z-index: 1;
          max-width: 900px;
        }
      `}</style>

      <div className="bone-divider" id="bone-divider">
        <h3>🧪 Bone Cement Market</h3>
        <p>
          Bone cement (commonly PMMA-based) plays a critical role in joint replacement
          procedures and fixation stability. This section provides a structured market-style
          overview including cement types, applications, and regional insights.
        </p>
      </div>
    </>
  );
};

export default BoneCementDivider;
