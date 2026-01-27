import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DoctorList = ({ doctors }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 10; // 10 doctors per page

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(1);
  }, [doctors]);

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  // ✅ Redirect handler (added)
  const handleDoctorClick = (doc) => {
    // ✅ External website/profile link
    if (doc.viewUrl) {
      window.open(doc.viewUrl, "_blank");
      return;
    }

    // ✅ Internal route
    if (doc.slug) {
      navigate(`/doctors/${doc.slug}`);
      return;
    }

    // ✅ Fallback
    // (No redirect field provided)
  };

  return (
    <div>
      <style>{`
        .resource-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .resource-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s;

          cursor: pointer; /* ✅ added */
        }

        .resource-card:hover { transform: translateY(-4px); }

        .doctor-image-wrapper {
          width: 100%;
          height: 320px;
          background: #f1f5f9;
        }

        .doctor-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }

        .card-content { padding: 20px; }
        .doc-name { font-size: 19px; font-weight: 700; color: #0f172a; margin: 0; }
        .doc-spec { color: #0284c7; font-size: 14px; font-weight: 600; margin: 6px 0 16px 0; }
        .doc-info { color: #475569; font-size: 13px; margin: 5px 0; line-height: 1.4; }

        /* PAGINATION VISIBILITY FIX */
        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 50px;
          padding-bottom: 30px;
        }

        .pagination button {
          min-width: 40px;
          height: 40px;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          color: #0f172a !important; /* Visible numbers */
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pagination button:hover {
          background: #f1f5f9;
          border-color: #0284c7;
        }

        .pagination button.active {
          background: #0284c7;
          color: #ffffff !important; /* White number on blue */
          border-color: #0284c7;
        }
      `}</style>

      <div className="resource-grid">
        {currentDoctors.map((doc) => (
          <div
            key={doc.id}
            className="resource-card"
            onClick={() => handleDoctorClick(doc)}  /* ✅ added */
            title="Click to view doctor profile"    /* ✅ optional */
          >
            <div className="doctor-image-wrapper">
              <img
                src={doc.imageUrl}
                alt={doc.name}
                className="doctor-card-img"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x400?text=Profile+Photo";
                }}
              />
            </div>
            <div className="card-content">
              <h4 className="doc-name">{doc.name}</h4>
              <p className="doc-spec">{doc.speciality}</p>
              <div className="doc-info">
                <strong>Hospital:</strong> {doc.hospital}
              </div>
              <div className="doc-info">
                <strong>Location:</strong> {doc.city}
              </div>
              <div className="doc-info">
                <strong>Exp:</strong> {doc.experience}
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => {
                setCurrentPage(i + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorList;
