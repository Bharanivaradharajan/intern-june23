import React from "react";
import ResourceCard from "./ResourceCard";
import SkeletonCard from "./SkeletonCard";
import "./resources.css";

const ResourceList = ({ data = [], search = "", sort, loading }) => {
  if (loading) {
    return (
      <div className="resource-grid">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  const searchText = search.toLowerCase();

  let filtered = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchText) ||
      (item.author && item.author.toLowerCase().includes(searchText))
  );

  filtered.sort((a, b) =>
    sort === "newest" ? b.year - a.year : a.year - b.year
  );

  if (!filtered.length) {
    return (
      <div className="empty-state">
        <span>🔍</span>
        <h4>No resources found</h4>
        <p>Try adjusting search or filters.</p>
      </div>
    );
  }

  return (
    <div className="resource-grid">
      {filtered.map((item) => (
        <ResourceCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ResourceList;
