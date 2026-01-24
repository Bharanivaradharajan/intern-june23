import React from "react";
import ImplantCard from "./ImplantCard";
import SkeletonImplantCard from "./SkeletonImplantCard";

const ImplantList = ({ data, search, category, loading }) => {
  if (loading) {
    return (
      <div className="resource-grid">
        {[...Array(12)].map((_, i) => (
          <SkeletonImplantCard key={i} />
        ))}
      </div>
    );
  }

  const searchText = search.toLowerCase();

  const filtered = data.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;

    const matchesSearch =
      item.title.toLowerCase().includes(searchText) ||
      item.surgery.toLowerCase().includes(searchText) ||
      item.description.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  if (!filtered.length) {
    return (
      <div className="empty-state">
        <span>🦴</span>
        <h4>No implants found</h4>
        <p>Try changing the category or search keyword.</p>
      </div>
    );
  }

  return (
    <div className="resource-grid">
      {filtered.map((item) => (
        <ImplantCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ImplantList;
