import React from "react";

const SkeletonImplantCard = () => {
  return (
    <div className="resource-card skeleton">
      <div className="skeleton-box" />
      <div className="skeleton-line short" />
      <div className="skeleton-line" />
      <div className="skeleton-line" />
    </div>
  );
};

export default SkeletonImplantCard;
