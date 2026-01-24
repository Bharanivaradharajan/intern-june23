import React from "react";

const BoneCementOverviewSection = () => {
  return (
    <>
      <style>{`
        .market-section {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 18px;
          padding: 18px;
        }

        .market-section h3 {
          margin: 0 0 10px;
          font-size: 18px;
          color: #0f172a;
          font-weight: 800;
        }

        .market-section p {
          margin: 0;
          font-size: 14px;
          line-height: 1.7;
          color: #334155;
        }

        .two-col {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 16px;
          align-items: center;
          margin-top: 10px;
        }

        .img-box {
          width: 100%;
          height: 220px;
          border-radius: 16px;
          overflow: hidden;
          background: #f1f5f9;
        }

        .img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media(max-width: 900px) {
          .two-col {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="market-section" id="bone-overview">
        <h3>Bone Cement Market Overview</h3>

        <div className="two-col">
          <div>
            <p>
              Bone cement is widely used in orthopedic surgeries to anchor implants
              and provide mechanical fixation. PMMA-based cement improves implant
              stability in arthroplasty procedures such as hip and knee replacement.
              Increasing surgical volumes and improved cement formulations (including
              antibiotic-loaded cement) are key drivers supporting market growth.
            </p>
          </div>

          <div className="img-box">
            <img src="/src/assets/market/bonecement.png" alt="Bone Cement Overview" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BoneCementOverviewSection;
