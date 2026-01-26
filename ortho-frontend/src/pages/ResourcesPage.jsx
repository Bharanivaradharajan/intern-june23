import React, { useState, useEffect } from "react";
import ResourceTabs from "../components/resources/ResourceTabs";
import ResourceSearch from "../components/resources/ResourceSearch";
import ResourceList from "../components/resources/ResourceList";

import booksData from "../data/booksData";
import articlesData from "../data/articlesData";
import pubmedData from "../data/pubmedData";

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState("Books");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [loading, setLoading] = useState(true);

  const allResources = {
    Books: booksData,
    "Research Articles": articlesData || [],
    PubMed: pubmedData || [],
  };

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, [activeTab]);

  return (
    <>
      <style>{`
        .resources-page {
          width: 100%;
          font-family: "Space Grotesk", sans-serif;
          background-color: #f9fbfd;
          min-height: 100vh;
        }

        .resources-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 10px 16px 60px 16px; /* Tiny top padding to reduce gap */
        }

        .title-group {
          margin-top: 0;
          margin-bottom: 25px;
        }

        .resources-title {
          font-size: 32px;
          font-weight: 800; /* Extra bold */
          color: #0f172a;
          margin: 0;
          position: relative;
        }

        .resources-title::after {
          content: "";
          display: block;
          width: 50px;
          height: 4px;
          background: #0284c7;
          margin-top: 6px;
          border-radius: 10px;
        }

        .tabs-outer-container {
          margin-bottom: 20px;
        }

        .search-card {
          background: #ffffff;
          padding: 16px 24px;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
          border: 1px solid #e2e8f0;
          margin-bottom: 35px;
        }

        .resource-controls-row {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .resource-sort {
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          background: white;
          font-weight: 600;
          color: #0f172a;
        }
      `}</style>

      <div className="resources-page">
        <div className="resources-container">
          <div className="title-group">
            <h1 className="resources-title">Resources</h1>
          </div>

          <div className="tabs-outer-container">
            <ResourceTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          <div className="search-card">
            <div className="resource-controls-row">
              <div style={{ flex: 2 }}>
                <ResourceSearch search={search} setSearch={setSearch} />
              </div>
              <select className="resource-sort" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          <ResourceList
            data={allResources[activeTab]}
            search={search}
            sort={sort}
            loading={loading}
            activeTab={activeTab}
          />
        </div>
      </div>
    </>
  );
};

export default ResourcesPage;