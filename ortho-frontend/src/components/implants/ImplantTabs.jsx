import React from "react";

const ImplantTabs = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div style={{ 
      display: "flex", 
      gap: "10px", 
      marginBottom: "20px",
      overflowX: "auto", // Allows swiping
      paddingBottom: "10px",
      WebkitOverflowScrolling: "touch",
      msOverflowStyle: "none",
      scrollbarWidth: "none", // Hides scrollbar on Firefox
    }}>
      <style>{`.tabs-container::-webkit-scrollbar { display: none; }`}</style>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          style={{
            padding: "8px 16px",
            borderRadius: "999px",
            border: "1px solid #e2e8f0",
            cursor: "pointer",
            whiteSpace: "nowrap", // Prevents text from breaking
            background: activeCategory === cat ? "linear-gradient(90deg, #38bdf8, #0284c7)" : "#ffffff",
            color: activeCategory === cat ? "#fff" : "#0f172a",
            fontWeight: 600,
            fontSize: "13px",
            flexShrink: 0, // Keeps buttons from squishing
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default ImplantTabs;
