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
    "Research Articles": articlesData,
    PubMed: pubmedData,
  };

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* PAGE + SHARED STYLES (SINGLE FILE) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');

        /* PAGE BASE */
        .resources-page {
          width: 100%;
          font-family: "Space Grotesk", sans-serif;
        }

        .resources-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 16px;
        }

        /* TITLE */
        .resources-title {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .resources-title::after {
          content: "";
          display: block;
          width: 56px;
          height: 3px;
          margin-top: 8px;
          border-radius: 6px;
          background: linear-gradient(90deg, #38bdf8, #0284c7);
        }

        .resources-subtitle {
          font-size: 15px;
          color: #64748b;
          margin-bottom: 28px;
          max-width: 720px;
          line-height: 1.6;
        }

        /* STICKY CONTROLS */
        .resource-controls {
          position: sticky;
          top: 0;
          background: #f9fbfd;
          padding-bottom: 16px;
          z-index: 10;
        }

        .resource-controls-row {
          display: flex;
          gap: 12px;
          max-width: 900px;
          align-items: center;
        }

        /* SORT */
        .resource-sort {
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background-color: #ffffff;
          color: #0f172a;
          font-size: 14px;
          font-family: "Space Grotesk", sans-serif;
          outline: none;
        }

        .resource-sort:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25);
        }

        /* SHARED GRID */
        .resource-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        /* EMPTY STATE */
        .empty-state {
          text-align: center;
          padding: 60px 20px;
          color: #64748b;
        }

        .empty-state span {
          font-size: 32px;
          display: block;
          margin-bottom: 8px;
        }

        /* PAGINATION */
        .pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 32px 0;
        }

        .pagination button {
          padding: 8px 12px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          font-size: 13px;
          font-family: "Space Grotesk", sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .pagination button:hover:not(:disabled) {
          background: #e0f2fe;
          border-color: #38bdf8;
        }

        .pagination button.active {
          background: linear-gradient(90deg, #38bdf8, #0284c7);
          color: #ffffff;
          border-color: transparent;
        }

        .pagination button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
      `}</style>

      <div className="resources-page">
        <div className="resources-container">
          <h2 className="resources-title">Resources</h2>
          <p className="resources-subtitle">
            Books, research articles, and PubMed papers for orthopedic learning.
          </p>

          {/* STICKY CONTROLS */}
          <div className="resource-controls">
            <ResourceTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <div className="resource-controls-row">
              <ResourceSearch
                search={search}
                setSearch={setSearch}
              />

              <select
                className="resource-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
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
          />
        </div>
      </div>
    </>
  );
};

export default ResourcesPage;
