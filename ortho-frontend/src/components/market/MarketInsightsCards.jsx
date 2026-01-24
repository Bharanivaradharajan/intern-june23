import React from "react";

const MarketInsightsCards = () => {
  const cards = [
    {
      title: "Orthopedic Materials Market",
      desc: "Trends, material insights, applications, and regional outlook.",
      link: "/blog/orthopedic-materials-market",
      icon: "🦴",
    },
    {
      title: "Bone Cement Market",
      desc: "Market overview, cement types, usage in arthroplasty & trauma.",
      link: "/blog/bone-cement-market",
      icon: "🧪",
    },
  ];

  return (
    <>
      <style>{`
        .market-insights {
          margin: 20px 0 28px;
        }

        .market-insights h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .market-insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 18px;
        }

        .market-card {
          padding: 18px;
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .market-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
        }

        .market-icon {
          font-size: 28px;
          margin-bottom: 8px;
        }

        .market-card h4 {
          margin: 0 0 6px;
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
        }

        .market-card p {
          margin: 0;
          font-size: 13px;
          color: #64748b;
          line-height: 1.6;
        }

        .market-card span {
          display: inline-block;
          margin-top: 10px;
          font-size: 13px;
          font-weight: 600;
          color: #0284c7;
        }
      `}</style>

      <section className="market-insights">
        <h3>Market Insights</h3>

        <div className="market-insights-grid">
          {cards.map((card) => (
            <div
              key={card.title}
              className="market-card"
              onClick={() => (window.location.href = card.link)}
            >
              <div className="market-icon">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
              <span>View Page →</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MarketInsightsCards;
