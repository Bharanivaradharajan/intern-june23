import React, { useEffect, useState } from "react";
import DeviceToolList from "../components/devices/DeviceToolList";
import devicesToolsData from "../data/devicesToolsData";

const DevicesPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const categories = ["All", ...new Set(devicesToolsData.map((t) => t.category))];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');

        .devices-page {
          width: 100%;
          font-family: "Space Grotesk", sans-serif;
        }

        .devices-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 16px;
        }

        .devices-title {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .devices-subtitle {
          font-size: 15px;
          color: #64748b;
          margin-bottom: 22px;
          max-width: 900px;
          line-height: 1.7;
        }

        .devices-blog-box {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 18px;
          padding: 18px;
          margin-bottom: 26px;
        }

        .devices-blog-box h3 {
          margin: 0 0 10px;
          color: #0f172a;
          font-size: 18px;
          font-weight: 700;
        }

        .devices-blog-box ul {
          margin: 10px 0 0;
          padding-left: 18px;
          color: #334155;
          line-height: 1.7;
          font-size: 14px;
        }

        .devices-blog-box li {
          margin-bottom: 6px;
        }

        .devices-controls {
          position: sticky;
          top: 0;
          background: #f9fbfd;
          padding-bottom: 16px;
          z-index: 10;
          margin-bottom: 10px;
        }

        .devices-filters {
          display: flex;
          gap: 12px;
          max-width: 900px;
        }

        .devices-input,
        .devices-select {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #0f172a;
          font-size: 14px;
          font-family: "Space Grotesk", sans-serif;
          outline: none;
        }

        .devices-input::placeholder {
          color: #94a3b8;
        }

        .devices-input:focus,
        .devices-select:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25);
        }

        /* Shared UI for cards */
        .resource-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .resource-card {
          position: relative;
          padding: 18px;
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .resource-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
        }

        .tool-image {
          height: 180px;
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 12px;
          background: #f1f5f9;
        }

        .tool-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(56, 189, 248, 0.15);
          color: #0284c7;
          margin-bottom: 10px;
        }

        .card-cta {
          position: absolute;
          bottom: 16px;
          right: 16px;
          font-size: 13px;
          font-weight: 600;
          color: #0284c7;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .resource-card:hover .card-cta {
          opacity: 1;
        }

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

        /* Skeleton */
        .skeleton {
          pointer-events: none;
        }

        .skeleton-box {
          height: 160px;
          background: #e5e7eb;
          border-radius: 12px;
          margin-bottom: 12px;
        }

        .skeleton-line {
          height: 12px;
          background: #e5e7eb;
          border-radius: 6px;
          margin-bottom: 8px;
        }

        .skeleton-line.short {
          width: 60%;
        }
      `}</style>

      <div className="devices-page">
        <div className="devices-container">
          <h2 className="devices-title">Orthopaedic Instruments</h2>

          <p className="devices-subtitle">
            Orthopaedic instruments are specialized surgical tools used for
            bone cutting, fixation, and joint procedures. These instruments
            support accurate implant placement, fracture reduction, and safe
            surgical handling of tissues and bones.
          </p>

          {/* BLOG BOX */}
          <div className="devices-blog-box">
            <h3>Our range of orthopaedic instruments include:</h3>
            <ul>
              <li><b>Osteotomes</b> - For cutting and preparing bone.</li>
              <li><b>Bone Cutting Forceps</b> - For cutting and removing bones during orthopaedic surgery.</li>
              <li><b>Gigli Saws</b> - Flexible wire saws used for bone cutting, mainly for amputations.</li>
              <li><b>Plate Benders</b> - Used to bend plates to the appropriate configuration during fracture surgery.</li>
            </ul>
          </div>

          {/* FILTERS */}
          <div className="devices-controls">
            <div className="devices-filters">
              <input
                className="devices-input"
                placeholder="Search tools by name or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <select
                className="devices-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <DeviceToolList
            data={devicesToolsData}
            search={search}
            category={category}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
};

export default DevicesPage;
