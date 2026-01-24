import React, { useEffect, useState } from "react";
import DeviceToolCard from "./DeviceToolCard";
import SkeletonDeviceToolCard from "./SkeletonDeviceToolCard";

const ITEMS_PER_PAGE = 8;

const DeviceToolList = ({ data, search, category, loading }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [search, category]);

  if (loading) {
    return (
      <div className="resource-grid">
        {[...Array(ITEMS_PER_PAGE)].map((_, i) => (
          <SkeletonDeviceToolCard key={i} />
        ))}
      </div>
    );
  }

  const searchText = search.toLowerCase();

  const filtered = data.filter((tool) => {
    const matchesCategory = category === "All" || tool.category === category;

    const matchesSearch =
      tool.name.toLowerCase().includes(searchText) ||
      tool.description.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  if (!filtered.length) {
    return (
      <div className="empty-state">
        <span>🛠️</span>
        <h4>No tools found</h4>
        <p>Try searching with different keywords or change category.</p>
      </div>
    );
  }

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  return (
    <>
      <div className="resource-grid">
        {paginated.map((tool) => (
          <DeviceToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            ← Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={page === i + 1 ? "active" : ""}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next →
          </button>
        </div>
      )}
    </>
  );
};

export default DeviceToolList;
