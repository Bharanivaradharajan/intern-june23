import React from "react";
import "./resources.css";

const SkeletonCard = () => {
  return (
    <div className="resource-card skeleton">
      <div className="skeleton-box" />
      <div className="skeleton-line short" />
      <div className="skeleton-line" />
    </div>
  );
};

export default SkeletonCard;
