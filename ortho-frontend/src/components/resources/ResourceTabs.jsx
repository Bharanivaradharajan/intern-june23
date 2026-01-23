import React from "react";
import "./resources.css";

const tabs = ["Books", "Research Articles", "PubMed"];

const ResourceTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="resource-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? "active" : ""}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ResourceTabs;
