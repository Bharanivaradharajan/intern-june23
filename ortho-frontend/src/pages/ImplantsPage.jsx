import React, { useEffect, useState } from "react";
import ImplantTabs from "../components/implants/ImplantTabs";
import ImplantSearchFilter from "../components/implants/ImplantSearchFilter";
import ImplantList from "../components/implants/ImplantList";

import implantsData from "../data/implantsData";

const ImplantsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  // ✅ TAB Categories (Only Important ones)
  const tabCategories = [
    "All",
    "Trauma Fixation",
    "Plates",
    "Screws",
    "Nails",
    "Spine",
    "Prosthesis",
    "Power Tools",
  ];

  // ✅ Dropdown Categories (All)
  const dropdownCategories = ["All", ...new Set(implantsData.map((i) => i.category))];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');

        /* ✅ MAIN FIX: remove horizontal scroll */
        html, body {
          overflow-x: hidden;
        }

        .implants-page {
          width: 100%;
          font-family: "Space Grotesk", sans-serif;
          overflow-x: hidden;
        }

        .implants-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 16px;
        }

        .implants-title {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .implants-subtitle {
          font-size: 15px;
          color: #64748b;
          margin-bottom: 28px;
          max-width: 780px;
          line-height: 1.6;
        }

        .implant-controls {
          position: sticky;
          top: 0;
          background: #f9fbfd;
          padding-bottom: 16px;
          z-index: 10;
        }

        /* Shared grid/cards styles */
        .resource-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .resource-card {
          position: relative;
          padding: 18px;
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .resource-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
        }

        .badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(56, 189, 248, 0.15);
          color: #0284c7;
          margin-bottom: 10px;
        }

        .book-image-wrapper {
          height: 180px;
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 12px;
          background: #f1f5f9;
        }

        .book-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-cta {
          position: absolute;
          bottom: 16px;
          right: 16px;
          font-size: 13px;
          font-weight: 600;
          color: #0284c7;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .resource-card:hover .card-cta {
          opacity: 1;
        }

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
      `}</style>

      <div className="implants-page">
        <div className="implants-container">
          <h2 className="implants-title">Orthopedic Implants</h2>
          <p className="implants-subtitle">
            Orthopedic implants are medical devices used to support, stabilize,
            or replace damaged bones and joints. Explore common implant types
            and the surgeries where they are used.
          </p>

          <div className="implant-controls">
            {/* ✅ ONLY FEW TABS */}
            <ImplantTabs
              categories={tabCategories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />

            {/* ✅ DROPDOWN HAS ALL CATEGORIES */}
            <ImplantSearchFilter
              search={search}
              setSearch={setSearch}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              categories={dropdownCategories}
            />
          </div>

          <ImplantList
            data={implantsData}
            search={search}
            category={activeCategory}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
};

export default ImplantsPage;
