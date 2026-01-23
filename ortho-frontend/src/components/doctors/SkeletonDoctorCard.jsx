import React from "react";

const SkeletonDoctorCard = () => {
  return (
    <div className="resource-card skeleton">
      <div className="skeleton-line short" />
      <div className="skeleton-line" />
      <div className="skeleton-line" />
    </div>
  );
};

export default SkeletonDoctorCard;
