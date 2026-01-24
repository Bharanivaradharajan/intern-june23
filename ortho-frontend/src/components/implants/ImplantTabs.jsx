import React from "react";

const ImplantTabs = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          style={{
            padding: "10px 16px",
            borderRadius: "999px",
            border: "1px solid #e2e8f0",
            cursor: "pointer",
            background:
              activeCategory === cat
                ? "linear-gradient(90deg, #38bdf8, #0284c7)"
                : "#ffffff",
            color: activeCategory === cat ? "#fff" : "#0f172a",
            fontWeight: 600,
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default ImplantTabs;
