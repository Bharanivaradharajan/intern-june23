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

  const cities = ["All", ...new Set(doctorsData.map((d) => d.city))];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');

        /* PAGE BASE */
        .doctors-page {
          width: 100%;
          font-family: "Space Grotesk", sans-serif;
          background-color: #f9fbfd;
          min-height: 100vh;
        }

        .doctors-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 16px;
        }

        .doctors-title {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .doctors-subtitle {
          font-size: 15px;
          color: #64748b;
          margin-bottom: 28px;
          max-width: 720px;
          line-height: 1.6;
        }

        /* STICKY FILTER BAR */
        .doctor-controls {
          position: sticky;
          top: 0;
          background: #f9fbfd;
          padding: 8px 0 20px 0;
          z-index: 10;
        }

        .doctor-filters {
          display: flex;
          gap: 12px;
          max-width: 900px;
        }

        .doctor-input,
        .doctor-select {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background-color: #ffffff;
          color: #0f172a;
          font-size: 14px;
          font-family: "Space Grotesk", sans-serif;
          outline: none;
          transition: all 0.2s;
        }

        .doctor-input:focus,
        .doctor-select:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
        }

        /* GRID & CARDS */
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
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          flex-direction: column;
        }

        .resource-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }

        /* IMAGE STYLES */
        .doctor-image-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
          background: #f1f5f9;
          overflow: hidden;
        }

        .doctor-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .resource-card:hover .doctor-card-img {
          transform: scale(1.08);
        }

        /* BADGE OVER IMAGE */
        .badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(4px);
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          color: #0369a1;
          border: 1px solid rgba(56, 189, 248, 0.2);
          z-index: 2;
        }

        /* CARD CONTENT */
        .card-content {
          padding: 18px;
        }

        .resource-card h4 {
          margin: 0 0 4px 0;
          font-size: 18px;
          color: #0f172a;
        }

        .resource-card p {
          margin: 0 0 8px 0;
          color: #38bdf8;
          font-weight: 500;
          font-size: 14px;
        }

        .resource-card small {
          display: block;
          color: #64748b;
          font-size: 13px;
          margin-bottom: 16px;
        }

        .card-cta {
          font-weight: 600;
          font-size: 14px;
          color: #0284c7;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* PAGINATION & EMPTY STATE */
        .empty-state {
          text-align: center;
          padding: 60px 20px;
          color: #64748b;
        }

        .pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 40px 0;
        }

        .pagination button {
          padding: 10px 16px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          font-family: "Space Grotesk", sans-serif;
          cursor: pointer;
          transition: all 0.2s;
        }

        .pagination button.active {
          background: #0284c7;
          color: white;
          border-color: #0284c7;
        }
      `}</style>

      <div className="doctors-page">
        <div className="doctors-container">
          <h2 className="doctors-title">Doctors</h2>
          <p className="doctors-subtitle">
            Find orthopedic specialists by name, specialization, or city.
          </p>

          <div className="doctor-controls">
            <div className="doctor-filters">
              <input
                className="doctor-input"
                placeholder="Search doctor or specialization..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <select
                className="doctor-select"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <DoctorList
            data={doctorsData}
            search={search}
            city={city}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
};

export default DoctorsPage;