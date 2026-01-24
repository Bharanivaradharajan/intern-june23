import React from "react";

const DoctorCard = ({ doctor }) => {
  const openProfile = () => {
    window.open(doctor.profileUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="resource-card" onClick={openProfile}>
      {/* Image Section */}
      <div className="doctor-image-wrapper">
        <img 
          src={doctor.imageUrl} 
          alt={doctor.name} 
          className="doctor-card-img" 
        />
        <span className="badge">{doctor.city}</span>
      </div>

      <div className="card-content">
        <h4>{doctor.name}</h4>
        <p className="specialization">{doctor.specialization}</p>
        <small>
          {doctor.experience} yrs • {doctor.hospital}
        </small>
        <div className="card-cta">View Profile →</div>
      </div>
    </div>
  );
};

export default DoctorCard;