import React from "react";

const BoneCementApplicationsSection = () => {
  return (
    <>
      <style>{`
        .apps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 14px;
        }

        .app-card {
          border-radius: 16px;
          padding: 14px;
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
        }

        .app-card h4 {
          margin: 0 0 6px;
          font-size: 14px;
          font-weight: 800;
          color: #0f172a;
        }

        .app-card p {
          margin: 0;
          color: #334155;
          font-size: 13px;
          line-height: 1.6;
        }

        @media(max-width: 900px) {
          .apps-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="market-section" id="bone-applications">
        <h3>Applications & Surgeries</h3>
        <p>
          Bone cement is mainly associated with arthroplasty and orthopedic
          reconstruction procedures. Increasing joint replacement surgeries are
          a major growth driver for cement demand.
        </p>

        <div className="apps-grid">
          <div className="app-card">
            <h4>Total Hip Replacement (THR)</h4>
            <p>
              Cemented fixation improves stability and is widely used in elderly patients
              with weaker bone quality.
            </p>
          </div>

          <div className="app-card">
            <h4>Total Knee Replacement (TKR)</h4>
            <p>
              Bone cement supports implant anchoring and load distribution for long-term success.
            </p>
          </div>

          <div className="app-card">
            <h4>Revision Arthroplasty</h4>
            <p>
              Antibiotic-loaded cement is frequently used to manage infection risks during revisions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoneCementApplicationsSection;
