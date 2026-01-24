import React from "react";

const MarketOverviewSection = () => {
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
          font-weight: 700;
        }

        .market-section p {
          margin: 0;
          font-size: 14px;
          line-height: 1.7;
          color: #334155;
        }

        .market-two-col {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 16px;
          align-items: center;
        }

        .market-img {
          width: 100%;
          height: 220px;
          border-radius: 16px;
          overflow: hidden;
          background: #f1f5f9;
        }

        .market-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 900px) {
          .market-two-col {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="market-section" id="overview">
        <h3>Overview</h3>
        <div className="market-two-col">
          <div>
            <p>
              Orthopedic materials are essential in modern musculoskeletal care.
              They are used in implants for trauma fixation, joint replacement,
              spine stabilization, and bone regeneration. Market growth is
              influenced by increasing orthopedic surgeries, innovative implant
              design, and emerging biomaterials with improved strength and
              biocompatibility.
            </p>
          </div>

          <div className="market-img">
            <img src="/src/assets/market/over.png" alt="Orthopedic Biomaterials" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketOverviewSection;
