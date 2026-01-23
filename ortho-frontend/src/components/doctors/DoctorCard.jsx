import React from "react";

const DoctorCard = ({ doctor }) => {
  const openProfile = () => {
    window.open(doctor.profileUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="resource-card" onClick={openProfile}>
      <span className="badge">{doctor.city}</span>
      <h4>{doctor.name}</h4>
      <p>{doctor.specialization}</p>
      <small>
        {doctor.experience} yrs • {doctor.hospital}
      </small>

      <div className="card-cta">View Profile →</div>
    </div>
  );
};

export default DoctorCard;
