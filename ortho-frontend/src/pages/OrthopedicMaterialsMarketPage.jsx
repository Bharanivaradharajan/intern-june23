import React from "react";
import MarketHeroCarousel from "../components/market/MarketHeroCarousel";
import MarketTOCLayout from "../components/market/MarketTOCLayout";

import MarketOverviewSection from "../components/market/MarketOverviewSection";
import MarketTrendsSection from "../components/market/MarketTrendsSection";
import MarketConcentrationSection from "../components/market/MarketConcentrationSection";
import ReportCoverageSection from "../components/market/ReportCoverageSection";
import MaterialInsightsSection from "../components/market/MaterialInsightsSection";
import ApplicationInsightsSection from "../components/market/ApplicationInsightsSection";
import RegionalInsightsSection from "../components/market/RegionalInsightsSection";

import BoneCementDivider from "../components/market/bonecement/BoneCementDivider";
import BoneCementOverviewSection from "../components/market/bonecement/BoneCementOverviewSection";
import BoneCementTypesSection from "../components/market/bonecement/BoneCementTypesSection";
import BoneCementApplicationsSection from "../components/market/bonecement/BoneCementApplicationsSection";
import BoneCementRegionalInsightsSection from "../components/market/bonecement/BoneCementRegionalInsightsSection";

const OrthopedicMaterialsMarketPage = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');

        html {
          scroll-behavior: smooth;
        }

        .market-page {
          width: 100%;
          font-family: "Space Grotesk", sans-serif;
          background: #f9fbfd;
        }

        .market-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 16px;
        }

        .market-title {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .market-subtitle {
          font-size: 15px;
          color: #64748b;
          max-width: 900px;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .market-note {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 16px;
          padding: 14px 16px;
          color: #334155;
          font-size: 13px;
          margin-bottom: 22px;
        }

        .market-note b {
          color: #0f172a;
        }

        .market-source {
          margin-top: 24px;
          padding: 14px;
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 14px;
          font-size: 13px;
          color: #334155;
        }

        .market-source a {
          color: #0284c7;
          font-weight: 700;
          text-decoration: none;
        }

        .market-source a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="market-page">
        <MarketHeroCarousel />

        <div className="market-container">
          <h2 className="market-title">Market Insights Blog</h2>

          <p className="market-subtitle">
            A single scrollable report-style blog that covers <b>Orthopedic Materials Market</b> and{" "}
            <b>Bone Cement Market</b>, designed with modern UI components and a sticky contents panel.
          </p>

          <div className="market-note">
            ✅ Use the <b>Contents panel</b> on the left to quickly jump between sections.
          </div>

          <MarketTOCLayout>
            {/* ✅ ORTHOPEDIC MATERIALS MARKET */}
            <MarketOverviewSection />
            <MarketTrendsSection />
            <MarketConcentrationSection />
            <ReportCoverageSection />
            <MaterialInsightsSection />
            <ApplicationInsightsSection />
            <RegionalInsightsSection />

            {/* ✅ FUTURISTIC DIVIDER */}
            <BoneCementDivider />

            {/* ✅ BONE CEMENT MARKET (Merged in SAME PAGE) */}
            <BoneCementOverviewSection />
            <BoneCementTypesSection />
            <BoneCementApplicationsSection />
            <BoneCementRegionalInsightsSection />
          </MarketTOCLayout>

          <div className="market-source">
            Source UI inspiration:{" "}
            <a
              href="https://www.marketsandmarkets.com/Market-Reports/orthopedic-device-280.html"
              target="_blank"
              rel="noreferrer"
            >
              MarketsandMarkets – Orthopedic Devices Report
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrthopedicMaterialsMarketPage;
