import React from "react";

const ImplantSearchFilter = ({
  search,
  setSearch,
  activeCategory,
  setActiveCategory,
  categories,
}) => {
  return (
    <div style={{ display: "flex", gap: "12px", maxWidth: "900px" }}>
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
          outline: "none",
        }}
      >
        {categories.map((c) => (
          <option value={c} key={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ImplantSearchFilter;
