import React from "react";
import DoctorCard from "./DoctorCard";
import SkeletonDoctorCard from "./SkeletonDoctorCard";

const DoctorList = ({ data, search, city, loading }) => {
  if (loading) {
    return (
      <div className="resource-grid">
        {[...Array(6)].map((_, i) => (
          <SkeletonDoctorCard key={i} />
        ))}
      </div>
    );
  }

  const filtered = data.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(search.toLowerCase());

    const matchesCity = city === "All" || doc.city === city;

    return matchesSearch && matchesCity;
  });

  if (!filtered.length) {
    return (
      <div className="empty-state">
        <span>🧑‍⚕️</span>
        <h4>No doctors found</h4>
        <p>Try changing search or city filter.</p>
      </div>
    );
  }

  return (
    <div className="resource-grid">
      {filtered.map((doc) => (
        <DoctorCard key={doc.id} doctor={doc} />
      ))}
    </div>
  );
};

export default DoctorList;
