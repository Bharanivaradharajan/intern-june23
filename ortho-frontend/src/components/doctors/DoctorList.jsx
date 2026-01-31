import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DoctorList = ({ doctors }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 10;

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(1);
  }, [doctors]);

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  const handleDoctorClick = (doc) => {
    if (doc.viewUrl) {
      window.open(doc.viewUrl, "_blank");
      return;
    }
    if (doc.slug) {
      navigate(`/doctors/${doc.slug}`);
      return;
    }
  };

  return (
    <div>
      <style>{`
        /* Desktop Grid */
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
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }

        .resource-card:hover { 
          transform: translateY(-4px); 
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }

        .doctor-image-wrapper {
          width: 100%;
          height: 320px;
          background: #f1f5f9;
          overflow: hidden;
        }

        .doctor-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }

        .card-content { padding: 20px; flex-grow: 1; }
        .doc-name { font-size: 19px; font-weight: 700; color: #0f172a; margin: 0; }
        .doc-spec { color: #0284c7; font-size: 14px; font-weight: 600; margin: 6px 0 16px 0; }
        .doc-info { color: #475569; font-size: 13px; margin: 5px 0; line-height: 1.4; }

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
          color: #0f172a !important;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }

        .pagination button.active {
          background: #0284c7;
          color: #ffffff !important;
          border-color: #0284c7;
        }

        /* =========================
           MOBILE RESPONSIVE GRID (2-Column)
        ========================= */
        @media (max-width: 768px) {
          .resource-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
            padding: 10px;
          }

          .doctor-image-wrapper {
            height: 180px; /* Shorter images for mobile grid */
          }

          .card-content {
            padding: 12px;
          }

          .doc-name {
            font-size: 14px;
            /* Clamp to 1 line for alignment */
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .doc-spec {
            font-size: 12px;
            margin: 4px 0 10px 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .doc-info {
            font-size: 11px;
            margin: 2px 0;
          }

          .doc-info strong {
            display: none; /* Hide labels like "Hospital:" to save space */
          }

          .pagination {
            gap: 4px;
          }

          .pagination button {
            min-width: 32px;
            height: 32px;
            font-size: 12px;
          }
        }
      `}</style>

      <div className="resource-grid">
        {currentDoctors.map((doc) => (
          <div
            key={doc.id}
            className="resource-card"
            onClick={() => handleDoctorClick(doc)}
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