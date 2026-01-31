import React from "react";

const TimelineStory = ({ timeline = [] }) => {
  return (
    <>
      <style>{`
      /* ... inside <style> ... */
.cards-row {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;
  scrollbar-width: none; /* Firefox */
}
.cards-row::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .year-row {
          border-radius: 18px;
          border: 1px solid rgba(15,23,42,0.06);
          background: rgba(248,250,252,0.75);
          padding: 12px;
        }

        .year-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 10px;
        }

        .year-head h4 {
          margin: 0;
          font-size: 14px;
          font-weight: 900;
          color: #0f172a;
        }

        .year-chip {
          font-size: 11px;
          font-weight: 900;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(56,189,248,0.12);
          border: 1px solid rgba(56,189,248,0.22);
          color: #0284c7;
        }

        .cards-row {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 6px;
        }

        .cards-row::-webkit-scrollbar {
          display: none;
        }

        .story-card {
          min-width: 240px;
          border-radius: 18px;
          border: 1px solid rgba(15,23,42,0.07);
          background: rgba(255,255,255,0.75);
          padding: 12px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .story-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(15,23,42,0.12);
        }

        .story-type {
          display: inline-block;
          font-size: 11px;
          font-weight: 900;
          padding: 6px 10px;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(56,189,248,0.18), rgba(139,92,246,0.14));
          border: 1px solid rgba(56,189,248,0.22);
          color: #0f172a;
          margin-bottom: 10px;
        }

        .story-title {
          margin: 0 0 6px;
          font-size: 13px;
          font-weight: 900;
          color: #0f172a;
          line-height: 1.3;
        }

        .story-desc {
          margin: 0;
          font-size: 12px;
          color: #64748b;
          line-height: 1.5;
        }
      `}</style>

      <div className="timeline">
        {timeline.map((yr) => (
          <div key={yr.year} className="year-row">
            <div className="year-head">
              <h4>📅 {yr.year}</h4>
              <span className="year-chip">{yr.items.length} highlights</span>
            </div>

            <div className="cards-row">
              {yr.items.map((item) => (
                <div
                  key={item.id}
                  className="story-card"
                  onClick={() => item.viewUrl && window.open(item.viewUrl, "_blank")}
                >
                  <span className="story-type">{item.type}</span>
                  <h5 className="story-title">{item.title}</h5>
                  <p className="story-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TimelineStory;
