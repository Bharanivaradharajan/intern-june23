import React from "react";

const BoneCementRegionalInsightsSection = () => {
  return (
    <>
      <style>{`
        .region-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 14px;
        }

        .region-card {
          border-radius: 16px;
          padding: 14px;
          background: #f8fafc;
          border: 1px solid rgba(15, 23, 42, 0.08);
        }

        .region-card h4 {
          margin: 0 0 6px;
          font-size: 14px;
          font-weight: 800;
          color: #0f172a;
        }

        .region-card p {
          margin: 0;
          color: #334155;
          font-size: 13px;
          line-height: 1.6;
        }

        @media(max-width: 900px) {
          .region-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="market-section" id="bone-regional">
        <h3>Bone Cement Regional Insights</h3>
        <p>
          Regional demand is influenced by the number of joint replacement surgeries,
          healthcare expenditure, and adoption of advanced arthroplasty techniques.
        </p>

        <div className="region-grid">
          <div className="region-card">
            <h4>North America</h4>
            <p>
              Strong demand due to high arthroplasty volumes and advanced healthcare infrastructure.
            </p>
          </div>

          <div className="region-card">
            <h4>Europe</h4>
            <p>
              Mature market with steady growth supported by aging population and orthopedic care access.
            </p>
          </div>

          <div className="region-card">
            <h4>Asia-Pacific</h4>
            <p>
              Fast-growing market driven by increasing surgeries, rising awareness, and expanding hospitals.
            </p>
          </div>

          <div className="region-card">
            <h4>Rest of World</h4>
            <p>
              Gradual growth with improving medical infrastructure and surgical adoption.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoneCementRegionalInsightsSection;
