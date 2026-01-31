import React from "react";

const ImplantSearchFilter = ({ search, setSearch, activeCategory, setActiveCategory, categories }) => {
  return (
    <div className="search-filter-container">
      <style>{`
        .search-filter-container {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
        }
        @media (max-width: 768px) {
          .search-filter-container {
            flex-direction: column; /* Stack vertically on mobile */
          }
        }
      `}</style>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search implant, surgery name..."
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: "10px",
          border: "1px solid #e2e8f0",
          background: "#fff",
          color: "#0f172a",
          outline: "none",
          fontSize: "16px", // Prevents iOS zoom
        }}
      />
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: "10px",
          border: "1px solid #e2e8f0",
          background: "#fff",
          color: "#0f172a",
          fontSize: "14px",
        }}
      >
        {categories.map((c) => (
          <option value={c} key={c}>{c}</option>
        ))}
      </select>
    </div>
  );
};
export default ImplantSearchFilter;
