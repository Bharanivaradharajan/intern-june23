import React from "react";
import "./resources.css";

const ResourceSearch = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by title, author, keyword..."
      className="resource-search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default ResourceSearch;
