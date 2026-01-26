import React from "react";

const ResourceTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Books", "Research Articles", "PubMed"];

  return (
    <>
      <style>{`
        .vivid-tabs-container {
          display: flex;
          gap: 12px;
        }

        .vivid-tab-btn {
          padding: 10px 22px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #475569;
        }

        .vivid-tab-btn:hover {
          border-color: #0284c7;
          color: #0284c7;
        }

        .vivid-tab-btn.active {
          background: #0284c7;
          color: #ffffff !important;
          border-color: #0284c7;
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.2);
        }
      `}</style>

      <div className="vivid-tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`vivid-tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </>
  );
};

export default ResourceTabs;