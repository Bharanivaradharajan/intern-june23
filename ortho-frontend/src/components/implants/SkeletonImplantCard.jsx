import React from "react";

const SkeletonImplantCard = () => {
  return (
    <div className="resource-card skeleton">
      <div className="skeleton-box" style={{ height: '140px', background: '#eee', borderRadius: '12px', marginBottom: '10px' }} />
      <div className="skeleton-line short" style={{ height: '12px', width: '40%', background: '#eee', marginBottom: '8px' }} />
      <div className="skeleton-line" style={{ height: '12px', width: '90%', background: '#eee', marginBottom: '8px' }} />
      <div className="skeleton-line" style={{ height: '12px', width: '70%', background: '#eee' }} />
    </div>
  );
};

export default SkeletonImplantCard;
