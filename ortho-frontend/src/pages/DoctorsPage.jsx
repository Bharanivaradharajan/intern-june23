import React, { useState, useEffect } from "react";
import DoctorList from "../components/doctors/DoctorList";
import doctorsData from "../data/doctorsData";

const DoctorsPage = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const filteredData = doctorsData.filter((doc) => {
    const searchTerm = search.toLowerCase().trim();
    const matchesSearch = 
      (doc.name?.toLowerCase().includes(searchTerm)) || 
      (doc.speciality?.toLowerCase().includes(searchTerm)) ||
      (doc.hospital?.toLowerCase().includes(searchTerm));
    const matchesCity = city === "All" || doc.city === city;
    return matchesSearch && matchesCity;
  });

  const cities = ["All", ...new Set(doctorsData.map((d) => d.city))];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

        .doctors-page {
          width: 100%;
          font-family: "Space Grotesk", sans-serif;
          background-color: #f9fbfd;
          min-height: 100vh;
        }

        .doctors-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 16px;
        }

        /* TITLE SECTION */
        .title-group {
          margin-bottom: 10px;
        }

        .doctors-main-title {
          font-size: 36px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          position: relative;
          display: inline-block;
        }

        /* BLUE UNDERLINE ACCENT */
        .doctors-main-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 60px;
          height: 4px;
          background-color: #0284c7;
          border-radius: 2px;
        }

        .doctors-main-subtitle {
          margin-top: 18px;
          font-size: 16px;
          color: #64748b;
          max-width: 600px;
        }

        /* SEARCH BAR VISIBILITY */
        .doctor-controls {
          position: sticky;
          top: 20px;
          background: #ffffff;
          padding: 16px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          z-index: 10;
          margin-bottom: 32px;
          border: 1px solid #e2e8f0;
        }

        .doctor-filters { display: flex; gap: 12px; }

        .doctor-input, .doctor-select {
          padding: 12px 16px;
          border-radius: 8px;
          border: 2px solid #e2e8f0;
          font-family: "Space Grotesk", sans-serif;
          font-size: 15px;
          outline: none;
          background-color: #ffffff !important;
          color: #0f172a !important; /* Forces dark text */
        }

        .doctor-input::placeholder { color: #94a3b8; }
        .doctor-input { flex: 2; }
        .doctor-select { flex: 1; cursor: pointer; }
        .doctor-input:focus { border-color: #0284c7; }

        @media (max-width: 768px) {
          .doctor-filters { flex-direction: column; }
        }
      `}</style>

      <div className="doctors-page">
        <div className="doctors-container">
          <div className="title-group">
            <h1 className="doctors-main-title">Leading Orthopedic Doctors in India</h1>
            <p className="doctors-main-subtitle">
              Connect with India's leading orthopedic surgeons and joint replacement specialists.
            </p>
          </div>
          
          <div className="doctor-controls">
            <div className="doctor-filters">
              <input
                className="doctor-input"
                placeholder="Search by name, hospital, or specialty..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <select
                className="doctor-select"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {loading ? (
            <div style={{textAlign: 'center', padding: '100px', color: '#64748b'}}>Loading specialists...</div>
          ) : filteredData.length > 0 ? (
            <DoctorList doctors={filteredData} />
          ) : (
            <div style={{textAlign: 'center', padding: '100px', color: '#64748b'}}>
              <h3>No doctors found matching your criteria.</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DoctorsPage;