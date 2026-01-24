import React, { useEffect, useState } from "react";

// ✅ Correct way for Vite (import images from src/assets)
import hero1 from "../../assets/market/hero1.jpg";
import hero2 from "../../assets/market/hero2.jpg";
import hero3 from "../../assets/market/hero3.jpg";

const slides = [
  {
    id: 1,
    title: "Orthopedic Materials Market Outlook",
    subtitle:
      "Growing demand for joint reconstruction, trauma care, and bioactive materials.",
    image: hero1,
  },
  {
    id: 2,
    title: "Innovation in Biomaterials",
    subtitle:
      "Titanium alloys, PEEK polymers, ceramics, and hydroxyapatite coatings are shaping the future.",
    image: hero2,
  },
  {
    id: 3,
    title: "Applications & Growth Drivers",
    subtitle:
      "Rising geriatric population and sports injuries drive adoption of advanced orthopedic devices.",
    image: hero3,
  },
];

const MarketHeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <>
      <style>{`
        /* FULL PAGE BACKGROUND AREA */
        .market-hero-wrapper {
          width: 100%;
          background: #f9fbfd;
          padding: 18px 16px;
        }

        /* ✅ CENTERED HERO CONTAINER (LIKE YOUR OTHER PAGES) */
        .market-hero {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          height: 340px;
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          background: #0b1220;
        }

        .market-hero-bg {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          filter: brightness(0.55);
          transform: scale(1.03);
        }

        .market-hero-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
        }

        .market-hero-content {
          width: 100%;
          max-width: 980px;
          color: white;
        }

        .market-hero-content h1 {
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 10px;
          line-height: 1.2;
        }

        .market-hero-content p {
          margin: 0;
          max-width: 760px;
          color: rgba(255,255,255,0.85);
          font-size: 15px;
          line-height: 1.6;
        }

        .market-hero-buttons {
          margin-top: 18px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .market-btn-primary {
          padding: 10px 14px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          background: linear-gradient(90deg, #38bdf8, #0284c7);
          color: white;
        }

        .market-btn-secondary {
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.3);
          cursor: pointer;
          font-weight: 600;
          background: rgba(255,255,255,0.08);
          color: white;
          backdrop-filter: blur(8px);
        }

        .market-dots {
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
        }

        .market-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.35);
          cursor: pointer;
        }

        .market-dot.active {
          background: #38bdf8;
        }

        @media (max-width: 600px) {
          .market-hero {
            height: 300px;
          }

          .market-hero-content h1 {
            font-size: 20px;
          }

          .market-hero-content p {
            font-size: 13px;
          }
        }
      `}</style>

      {/* ✅ WRAPPER gives padding + keeps hero centered */}
      <div className="market-hero-wrapper">
        <section className="market-hero">
          {/* ✅ safer way: inline style for image */}
          <div
            className="market-hero-bg"
            style={{ backgroundImage: `url(${activeSlide.image})` }}
          />

          <div className="market-hero-overlay">
            <div className="market-hero-content">
              <h1>{activeSlide.title}</h1>
              <p>{activeSlide.subtitle}</p>

              <div className="market-hero-buttons">
                <button
                  className="market-btn-primary"
                  onClick={() =>
                    window.open(
                      "https://www.marketsandmarkets.com/Market-Reports/orthopedic-device-280.html",
                      "_blank"
                    )
                  }
                >
                  View Full Report →
                </button>

                <button
                  className="market-btn-secondary"
                  onClick={() => window.scrollTo({ top: 350, behavior: "smooth" })}
                >
                  Explore Insights ↓
                </button>
              </div>
            </div>
          </div>

          <div className="market-dots">
            {slides.map((s, i) => (
              <div
                key={s.id}
                className={`market-dot ${i === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default MarketHeroCarousel;
