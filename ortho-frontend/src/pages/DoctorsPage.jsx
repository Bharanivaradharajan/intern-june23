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

  const cities = ["All", ...new Set(doctorsData.map(d => d.city))];

  return (
    <>
      {/* PAGE + SHARED STYLES (INLINE, SINGLE FILE) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');

        /* PAGE BASE */
        .doctors-page {
          width: 100%;
          font-family: "Space Grotesk", sans-serif;
        }

        .doctors-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 16px;
        }

        /* TITLE */
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
          padding-bottom: 16px;
          z-index: 10;
        }

        .doctor-filters {
          display: flex;
          gap: 12px;
          max-width: 900px;
        }

        /* INPUT + SELECT (VISIBILITY FIX) */
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
        }

        .doctor-input::placeholder {
          color: #94a3b8;
        }

        .doctor-select option {
          color: #0f172a;
          background-color: #ffffff;
        }

        .doctor-input:focus,
        .doctor-select:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25);
        }

        /* SHARED GRID (USED BY DoctorList) */
        .resource-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        /* EMPTY STATE */
        .empty-state {
          text-align: center;
          padding: 60px 20px;
          color: #64748b;
        }

        .empty-state span {
          font-size: 32px;
          display: block;
          margin-bottom: 8px;
        }

        /* PAGINATION (USED BY DoctorList) */
        .pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 32px 0;
        }

        .pagination button {
          padding: 8px 12px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          font-size: 13px;
          font-family: "Space Grotesk", sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .pagination button:hover:not(:disabled) {
          background: #e0f2fe;
          border-color: #38bdf8;
        }

        .pagination button.active {
          background: linear-gradient(90deg, #38bdf8, #0284c7);
          color: #ffffff;
          border-color: transparent;
        }

        .pagination button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
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
