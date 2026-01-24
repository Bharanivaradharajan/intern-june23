import React from "react";

const BoneCementTypesSection = () => {
  return (
    <>
      <style>{`
        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }

        .chip {
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          background: rgba(56, 189, 248, 0.12);
          color: #0284c7;
          border: 1px solid rgba(56, 189, 248, 0.25);
        }

        .grid2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 14px;
        }

        .info-card {
          border-radius: 16px;
          padding: 14px;
          background: #f8fafc;
          border: 1px solid rgba(15, 23, 42, 0.08);
        }

        .info-card h4 {
          margin: 0 0 6px;
          font-size: 14px;
          font-weight: 800;
          color: #0f172a;
        }

        .info-card p {
          margin: 0;
          color: #334155;
          font-size: 13px;
          line-height: 1.6;
        }

        @media(max-width: 900px) {
          .grid2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="market-section" id="bone-types">
        <h3>Bone Cement Types</h3>
        <p>
          Bone cement formulations vary based on viscosity, antibiotic addition,
          and clinical purpose. Selection depends on surgical workflow, fixation
          requirement, and infection risk management.
        </p>

        <div className="chips">
          <span className="chip">PMMA Cement</span>
          <span className="chip">Antibiotic-loaded Cement</span>
          <span className="chip">High Viscosity</span>
          <span className="chip">Low Viscosity</span>
          <span className="chip">Radiopaque Cement</span>
        </div>

        <div className="grid2">
          <div className="info-card">
            <h4>Standard PMMA Cement</h4>
            <p>
              Used for mechanical fixation in joint replacements. Provides strong anchoring
              and durable support.
            </p>
          </div>

          <div className="info-card">
            <h4>Antibiotic-loaded Cement</h4>
            <p>
              Helps reduce infection risk during arthroplasty and revision surgeries by delivering
              local antibiotics.
            </p>
          </div>

          <div className="info-card">
            <h4>High Viscosity Cement</h4>
            <p>
              Preferred for better handling and reduced cement leakage. Common in knee and hip
              replacements.
            </p>
          </div>

          <div className="info-card">
            <h4>Low Viscosity Cement</h4>
            <p>
              Flows easily into bone spaces and is sometimes used in vertebroplasty or special cases.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoneCementTypesSection;
