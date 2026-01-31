import React from "react";

const tocItems = [
  { id: "overview", label: "Overview" },
  { id: "trends", label: "Orthopedic Biomaterials Market Trends" },
  { id: "concentration", label: "Market Concentration & Characteristics" },
  { id: "coverage", label: "Report Coverage & Deliverables" },
  { id: "material", label: "Material Insights" },
  { id: "application", label: "Application Insights" },
  { id: "regional", label: "Regional Insights" },

  
  { id: "bone-divider", label: "Bone Cement Market (Start)" },
  { id: "bone-overview", label: "Bone Cement Market Overview" },
  { id: "bone-types", label: "Bone Cement Types" },
  { id: "bone-applications", label: "Applications & Surgeries" },
  { id: "bone-regional", label: "Bone Cement Regional Insights" },
];

const MarketTOCLayout = ({ children }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <style>{`
        .market-layout {
          display: grid;
          grid-template-columns: 290px 1fr;
          gap: 22px;
          margin-top: 24px;
        }

        .market-toc {
          position: sticky;
          top: 90px;
          height: fit-content;
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          padding: 14px;
        }

        .market-toc h4 {
          margin: 0 0 12px;
          font-size: 14px;
          color: #0f172a;
          font-weight: 800;
        }

        .market-toc button {
          width: 100%;
          text-align: left;
          padding: 10px 10px;
          border-radius: 12px;
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 13px;
          color: #334155;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .market-toc button:hover {
          background: rgba(56, 189, 248, 0.12);
          color: #0284c7;
        }

        .market-content {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        @media (max-width: 900px) {
          .market-layout {
            grid-template-columns: 1fr;
          }

          .market-toc {
            position: relative;
            top: 0;
          }
        }
      `}</style>

      <div className="market-layout">
        <aside className="market-toc">
          <h4>Contents</h4>
          {tocItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
        </aside>

        <div className="market-content">{children}</div>
      </div>
    </>
  );
};

export default MarketTOCLayout;
