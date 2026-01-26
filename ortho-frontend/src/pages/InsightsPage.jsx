import React, { useEffect, useMemo, useState } from "react";
import insightsData from "../data/insightsData";

import KnowledgeGalaxy from "../components/insights/KnowledgeGalaxy";
import SurgeryJourneyExplorer from "../components/insights/SurgeryJourneyExplorer";
import ImplantSurgeryNetwork from "../components/insights/ImplantSurgeryNetwork";
import SmartFilterLens from "../components/insights/SmartFilterLens";
import TimelineStory from "../components/insights/TimelineStory";
import CoverageHeatmap from "../components/insights/CoverageHeatmap";
import SwipeCards from "../components/insights/SwipeCards";
import AnatomyExplorer from "../components/insights/AnatomyExplorer";
import AIInsights from "../components/insights/AIInsights";

const InsightsPage = () => {
  // ✅ global filters (Smart Filter Lens controls these)
  const [filters, setFilters] = useState({
    search: "",
    topic: "All",
    contentType: "All",
    yearFrom: 2015,
    yearTo: 2026,
  });

  // ✅ Disclaimer popup (show once)
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const hidden = localStorage.getItem("insightsDisclaimerHidden");
    if (!hidden) setShowDisclaimer(true);
  }, []);

  // ✅ selections from different visualizations
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [selectedSurgeryId, setSelectedSurgeryId] = useState(null);
  const [selectedRegionId, setSelectedRegionId] = useState(null);

  // ✅ swipe saved items
  const [savedCardIds, setSavedCardIds] = useState([]);

  // ✅ helpers
  const topics = insightsData.topics;
  const surgeries = insightsData.surgeries;
  const implants = insightsData.implants;
  const devices = insightsData.devices;
  const books = insightsData.books;
  const papers = insightsData.papers;

  // ✅ computed: filter predicate
  const matchesSearch = (text) => {
    const q = filters.search.trim().toLowerCase();
    if (!q) return true;
    return String(text || "").toLowerCase().includes(q);
  };

  const withinYear = (year) => {
    if (!year) return true;
    return year >= filters.yearFrom && year <= filters.yearTo;
  };

  // ✅ filtered results panel (makes the page "feel alive")
  const filteredBooks = useMemo(() => {
    if (filters.contentType !== "All" && filters.contentType !== "Books")
      return [];
    return books.filter((b) => {
      const topicOk = filters.topic === "All" || b.topic === filters.topic;
      return topicOk && matchesSearch(b.title) && withinYear(b.year);
    });
  }, [books, filters]);

  const filteredPapers = useMemo(() => {
    if (filters.contentType !== "All" && filters.contentType !== "Papers")
      return [];
    return papers.filter((p) => {
      const topicOk = filters.topic === "All" || p.topic === filters.topic;
      return (
        topicOk &&
        (matchesSearch(p.title) || matchesSearch(p.author)) &&
        withinYear(p.year)
      );
    });
  }, [papers, filters]);

  const filteredImplants = useMemo(() => {
    if (filters.contentType !== "All" && filters.contentType !== "Implants")
      return [];
    return implants.filter((x) => {
      const topicOk = filters.topic === "All" || x.topic === filters.topic;
      return topicOk && (matchesSearch(x.title) || matchesSearch(x.surgery));
    });
  }, [implants, filters]);

  const filteredDevices = useMemo(() => {
    if (filters.contentType !== "All" && filters.contentType !== "Devices")
      return [];
    return devices.filter((d) => {
      const topicOk = filters.topic === "All" || d.topic === filters.topic;
      return topicOk && (matchesSearch(d.title) || matchesSearch(d.category));
    });
  }, [devices, filters]);

  const savedCards = useMemo(() => {
    return insightsData.swipeCards.filter((c) => savedCardIds.includes(c.id));
  }, [savedCardIds]);

  // ✅ actions
  const handleSelectTopic = (topicId) => {
    setSelectedTopicId(topicId);
    const t = topics.find((x) => x.id === topicId);
    if (t) {
      setFilters((prev) => ({ ...prev, topic: t.label }));
    }
  };

  const handleHeatmapSelect = ({ topicLabel, contentType }) => {
    setFilters((prev) => ({
      ...prev,
      topic: topicLabel || "All",
      contentType: contentType || "All",
    }));
  };

  const handleSwipeSave = (cardId) => {
    setSavedCardIds((prev) =>
      prev.includes(cardId) ? prev : [...prev, cardId]
    );
  };

  const handleSwipeRemove = (cardId) => {
    setSavedCardIds((prev) => prev.filter((id) => id !== cardId));
  };

  const handleReset = () => {
    setFilters({
      search: "",
      topic: "All",
      contentType: "All",
      yearFrom: 2015,
      yearTo: 2026,
    });
    setSelectedTopicId(null);
    setSelectedSurgeryId(null);
    setSelectedRegionId(null);
    setSavedCardIds([]);
  };

  return (
    <>
      {/* ✅ Global Page Styles (Premium glassmorphism) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');

        html { scroll-behavior: smooth; }
        body { background: #f9fbfd; }

        .insights-page {
          width: 100%;
          font-family: "Space Grotesk", sans-serif;
          padding: 24px 16px 40px;
          overflow-x: hidden;
          position: relative;
        }

        /* Animated gradient blobs */
        .bg-blobs {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .blob {
          position: absolute;
          width: 380px;
          height: 380px;
          filter: blur(60px);
          opacity: 0.35;
          border-radius: 999px;
          animation: floaty 8s ease-in-out infinite;
        }

        .blob.one { top: -120px; left: -120px; background: rgba(56,189,248,0.8); }
        .blob.two { bottom: -140px; right: -140px; background: rgba(139,92,246,0.75); animation-delay: 1.8s; }
        .blob.three { top: 30%; right: 10%; background: rgba(2,132,199,0.65); animation-delay: 0.8s; }

        @keyframes floaty {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(24px, -18px) scale(1.05); }
        }

        .insights-container {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          padding-right: 320px;
        }

        .insights-hero {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }

        .insights-title {
          font-size: 30px;
          font-weight: 800;
          letter-spacing: 0.4px;
          margin: 0 0 6px;
          color: #0f172a;
        }

        .insights-subtitle {
          margin: 0;
          color: #64748b;
          font-size: 14px;
          max-width: 840px;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .btn {
          border: 1px solid rgba(15, 23, 42, 0.12);
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(10px);
          color: #0f172a;
          border-radius: 14px;
          padding: 10px 14px;
          cursor: pointer;
          font-weight: 700;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 30px rgba(15, 23, 42, 0.12);
        }

        .btn.primary {
          border: none;
          background: linear-gradient(90deg, #38bdf8, #8b5cf6);
          color: white;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
          margin-bottom: 18px;
        }

        .stat-card {
          padding: 14px;
          border-radius: 18px;
          background: rgba(255,255,255,0.70);
          border: 1px solid rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(10px);
        }

        .stat-label {
          font-size: 12px;
          color: #64748b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .stat-value {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
        }

        /* Main grid */
        .insights-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 18px;
        }

        .stack {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .panel {
          border-radius: 22px;
          background: rgba(255,255,255,0.75);
          border: 1px solid rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(12px);
          padding: 16px;
          overflow: hidden;
        }

        .panel-title {
          margin: 0 0 10px;
          font-size: 15px;
          font-weight: 800;
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .panel-sub {
          margin: 0 0 12px;
          color: #64748b;
          font-size: 13px;
          line-height: 1.6;
        }

        /* Results panel */
        .results-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .mini-list {
          border-radius: 18px;
          background: rgba(248,250,252,0.7);
          border: 1px solid rgba(15, 23, 42, 0.06);
          padding: 12px;
        }

        .mini-list h4 {
          margin: 0 0 8px;
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
        }

        .mini-item {
          font-size: 12px;
          color: #334155;
          padding: 8px 10px;
          border-radius: 12px;
          background: rgba(255,255,255,0.65);
          border: 1px solid rgba(15, 23, 42, 0.06);
          margin-bottom: 8px;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .mini-item:hover { transform: translateY(-2px); }
        .mini-muted { color: #94a3b8; font-size: 12px; }

        /* Responsive */
        @media (max-width: 1100px) {
          .insights-container { padding-right: 0px; }
          .stats-row { grid-template-columns: repeat(3, 1fr); }
          .insights-grid { grid-template-columns: 1fr; }
          .results-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 600px) {
          .stats-row { grid-template-columns: repeat(2, 1fr); }
          .insights-title { font-size: 24px; }
        }

        /* ✅ DISCLAIMER POPUP */
        .disclaimer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.35);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          z-index: 3000;
        }

        .disclaimer-modal {
          width: 100%;
          max-width: 520px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(56, 189, 248, 0.25);
          box-shadow: 0 30px 80px rgba(15, 23, 42, 0.25);
          padding: 16px;
        }

        .disclaimer-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 10px;
        }

        .disclaimer-head h3 {
          margin: 0;
          font-size: 15px;
          font-weight: 900;
          color: #0f172a;
        }

        .disclaimer-close {
          border: none;
          cursor: pointer;
          font-weight: 900;
          border-radius: 12px;
          padding: 8px 10px;
          background: rgba(15, 23, 42, 0.06);
        }

        .disclaimer-text {
          margin: 0 0 10px;
          font-size: 13px;
          line-height: 1.65;
          color: #334155;
        }

        .disclaimer-points {
          margin: 0 0 14px;
          padding-left: 18px;
          color: #475569;
          font-size: 13px;
          line-height: 1.7;
        }

        .disclaimer-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .disclaimer-btn {
          border-radius: 14px;
          padding: 10px 14px;
          cursor: pointer;
          font-weight: 900;
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: rgba(255, 255, 255, 0.7);
        }

        .disclaimer-btn.primary {
          border: none;
          color: white;
          background: linear-gradient(90deg, #38bdf8, #8b5cf6);
        }
          /* ✅ TEXT VISIBILITY FIX (GLOBAL) */
.insights-page,
.insights-page * {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* ✅ Force readable text inside glass panels */
.panel,
.panel * {
  color: #0f172a;
}

/* ✅ But keep muted text muted (controlled) */
.mini-muted,
.panel-sub,
.insights-subtitle,
.stat-label {
  color: #64748b !important;
}

/* ✅ Fix headings inside small cards */
.mini-list h4,
.panel-title {
  color: #0f172a !important;
}

/* ✅ Fix input/select visibility (important for Smart Filter Lens) */
input,
select,
textarea {
  background: #ffffff !important;
  color: #0f172a !important;
  border: 1px solid rgba(15, 23, 42, 0.12) !important;
}

input::placeholder,
textarea::placeholder {
  color: #94a3b8 !important;
}

/* ✅ Fix option text in dropdown */
select option {
  color: #0f172a !important;
  background: #ffffff !important;
}
/* ✅ MORE BREATHING SPACE (NO DESIGN CHANGE) */

/* overall section spacing */
.insights-container {
  padding-top: 8px;
}

/* increase panel padding and spacing */
.panel {
  padding: 18px 18px;
}

/* more spacing between title and content */
.panel-title {
  margin-bottom: 12px;
}

.panel-sub {
  margin-bottom: 14px;
  line-height: 1.8;
}

/* more spacing inside stats cards */
.stat-card {
  padding: 16px;
}

/* increase spacing between stat label and value */
.stat-label {
  margin-bottom: 8px;
}

/* improve mini items spacing */
.mini-item {
  padding: 10px 12px;
  margin-bottom: 10px;
  line-height: 1.5;
}

/* make results grid more spacious */
.results-grid {
  gap: 16px;
}

/* make main grid more spacious */
.insights-grid {
  gap: 22px;
}

/* increase vertical spacing between stacked panels */
.stack {
  gap: 22px;
}

/* better line spacing in hero subtitle */
.insights-subtitle {
  line-height: 1.85;
}

/* better spacing in mini list boxes */
.mini-list {
  padding: 14px;
}

      `}</style>

      <div className="insights-page">
        {/* ✅ DISCLAIMER POPUP */}
        {showDisclaimer && (
          <div className="disclaimer-overlay">
            <div className="disclaimer-modal">
              <div className="disclaimer-head">
                <h3>⚠️ Development Notice</h3>
                <button
                  className="disclaimer-close"
                  onClick={() => setShowDisclaimer(false)}
                >
                  ✕
                </button>
              </div>

              <p className="disclaimer-text">
                This <b>Insights Dashboard</b> is currently under development.
                The contents are <b>dynamic</b> and will be updated frequently
                based on new resources, research papers, and advanced
                visualization features.
              </p>

              <ul className="disclaimer-points">
                <li>✅ Data shown here may include sample / prototype content</li>
                <li>✅ Visualizations and filters may change in upcoming versions</li>
                <li>✅ UI improvements and performance optimization are ongoing</li>
              </ul>

              <div className="disclaimer-actions">
                <button
                  className="disclaimer-btn primary"
                  onClick={() => setShowDisclaimer(false)}
                >
                  I Understand ✅
                </button>

                <button
                  className="disclaimer-btn"
                  onClick={() => {
                    localStorage.setItem("insightsDisclaimerHidden", "true");
                    setShowDisclaimer(false);
                  }}
                >
                  Don’t show again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* background blobs */}
        <div className="bg-blobs">
          <div className="blob one" />
          <div className="blob two" />
          <div className="blob three" />
        </div>

        <div className="insights-container">
          {/* Header */}
          <div className="insights-hero">
            <div>
              <h2 className="insights-title">Insights Dashboard</h2>
              <p className="insights-subtitle">
                Explore orthopedic resources, implants, devices, and research
                trends using futuristic interactive visualizations. Use the
                floating <b>Smart Filter Lens</b> to filter everything
                instantly.
              </p>
            </div>

            <div className="hero-actions">
              <button
                className="btn primary"
                onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
              >
                Explore ↓
              </button>
              <button className="btn" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>

          {/* Quick stats */}
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-label">Total Books</div>
              <div className="stat-value">{books.length}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Research Papers</div>
              <div className="stat-value">{papers.length}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Implants</div>
              <div className="stat-value">{implants.length}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Devices</div>
              <div className="stat-value">{devices.length}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Topics</div>
              <div className="stat-value">{topics.length}</div>
            </div>
          </div>

          {/* ✅ Floating Smart Filter Lens */}
          <SmartFilterLens
            filters={filters}
            setFilters={setFilters}
            topics={topics.map((t) => t.label)}
          />

          {/* Main grid */}
          <div className="insights-grid">
            {/* LEFT: heavy visuals */}
            <div className="stack">
              <div className="panel">
                <div className="panel-title">🌌 Knowledge Galaxy</div>
                <p className="panel-sub">
                  Click a topic node to explore recommended books, papers,
                  implants, and devices.
                </p>

                <KnowledgeGalaxy
                  topics={topics}
                  selectedTopicId={selectedTopicId}
                  onSelectTopic={handleSelectTopic}
                  topicContentMap={insightsData.topicContentMap}
                />
              </div>

              <div className="panel">
                <div className="panel-title">🧭 Surgery Journey Explorer</div>
                <p className="panel-sub">
                  Choose a surgery and click steps to view workflow insights and
                  recommended tools.
                </p>

                <SurgeryJourneyExplorer
                  surgeries={surgeries}
                  selectedSurgeryId={selectedSurgeryId}
                  onSelectSurgery={setSelectedSurgeryId}
                />
              </div>

              <div className="panel">
                <div className="panel-title">🕸 Implant–Surgery Network</div>
                <p className="panel-sub">
                  Explore implant usage mapping with connection strength (usage
                  score).
                </p>

                <ImplantSurgeryNetwork
                  implants={insightsData.implantNodes}
                  surgeryNodes={insightsData.surgeryNodes}
                  connections={insightsData.implantSurgeryConnections}
                  onSelectTopicLabel={(label) =>
                    setFilters((p) => ({ ...p, topic: label }))
                  }
                />
              </div>

              <div className="panel">
                <div className="panel-title">📅 Timeline Story</div>
                <p className="panel-sub">
                  Scroll year-wise story strips like a modern research feed.
                </p>

                <TimelineStory timeline={insightsData.timelineByYear} />
              </div>

              <div className="panel">
                <div className="panel-title">🔥 Coverage Heatmap</div>
                <p className="panel-sub">
                  Click a cell to apply filters instantly (Topic + Content
                  type).
                </p>

                <CoverageHeatmap
                  heatmap={insightsData.heatmap}
                  onSelectCell={handleHeatmapSelect}
                />
              </div>
            </div>

            {/* RIGHT: compact powerful widgets */}
            <div className="stack">
              <div className="panel">
                <div className="panel-title">🧠 AI Insights</div>
                <p className="panel-sub">
                  Smart trend indicators computed from your current filters and
                  dummy analytics.
                </p>

                <AIInsights
                  filters={filters}
                  aiCards={insightsData.aiInsights}
                  totals={{
                    books: filteredBooks.length,
                    papers: filteredPapers.length,
                    implants: filteredImplants.length,
                    devices: filteredDevices.length,
                  }}
                />
              </div>

              <div className="panel">
                <div className="panel-title">🧬 Anatomy Explorer</div>
                <p className="panel-sub">
                  Click a body region to explore resources and surgical
                  relevance.
                </p>

                <AnatomyExplorer
                  regions={insightsData.bodyRegions}
                  selectedRegionId={selectedRegionId}
                  onSelectRegion={setSelectedRegionId}
                />
              </div>

              <div className="panel">
                <div className="panel-title">🃏 Swipe Cards</div>
                <p className="panel-sub">
                  Swipe / save orthopedic content like modern discovery apps.
                </p>

                <SwipeCards
                  cards={insightsData.swipeCards}
                  savedCardIds={savedCardIds}
                  onSave={handleSwipeSave}
                  onRemove={handleSwipeRemove}
                />
              </div>

              {/* ✅ Results Panel: shows everything is working */}
              <div className="panel">
                <div className="panel-title">
                  ✅ Live Filtered Results
                  <span className="mini-muted">
                    ({filters.topic} • {filters.contentType} • {filters.yearFrom}
                    -{filters.yearTo})
                  </span>
                </div>

                <div className="results-grid">
                  <div className="mini-list">
                    <h4>📚 Books</h4>
                    {filteredBooks.slice(0, 4).map((b) => (
                      <div
                        key={b.id}
                        className="mini-item"
                        onClick={() => window.open(b.viewUrl, "_blank")}
                      >
                        <b>{b.title}</b> • {b.year}
                      </div>
                    ))}
                    {filteredBooks.length === 0 && (
                      <div className="mini-muted">No books found</div>
                    )}
                  </div>

                  <div className="mini-list">
                    <h4>📄 Papers</h4>
                    {filteredPapers.slice(0, 4).map((p) => (
                      <div
                        key={p.id}
                        className="mini-item"
                        onClick={() => window.open(p.viewUrl, "_blank")}
                      >
                        <b>{p.title}</b> • {p.year}
                      </div>
                    ))}
                    {filteredPapers.length === 0 && (
                      <div className="mini-muted">No papers found</div>
                    )}
                  </div>

                  <div className="mini-list">
                    <h4>🦴 Implants</h4>
                    {filteredImplants.slice(0, 4).map((i) => (
                      <div key={i.id} className="mini-item">
                        <b>{i.title}</b>
                        <div className="mini-muted">{i.surgery}</div>
                      </div>
                    ))}
                    {filteredImplants.length === 0 && (
                      <div className="mini-muted">No implants found</div>
                    )}
                  </div>

                  <div className="mini-list">
                    <h4>🛠 Devices</h4>
                    {filteredDevices.slice(0, 4).map((d) => (
                      <div key={d.id} className="mini-item">
                        <b>{d.title}</b>
                        <div className="mini-muted">{d.category}</div>
                      </div>
                    ))}
                    {filteredDevices.length === 0 && (
                      <div className="mini-muted">No devices found</div>
                    )}
                  </div>
                </div>

                {/* Saved */}
                <div style={{ marginTop: 14 }}>
                  <div className="panel-title" style={{ marginBottom: 8 }}>
                    ⭐ Saved Cards
                    <span className="mini-muted">({savedCards.length})</span>
                  </div>

                  {savedCards.length === 0 ? (
                    <div className="mini-muted">
                      No saved cards yet. Swipe right to save.
                    </div>
                  ) : (
                    savedCards.slice(0, 5).map((c) => (
                      <div
                        key={c.id}
                        className="mini-item"
                        onClick={() => window.open(c.viewUrl, "_blank")}
                      >
                        <b>{c.title}</b> • {c.type}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* footer */}
          <div
            style={{
              marginTop: 18,
              color: "#64748b",
              fontSize: 12,
              textAlign: "center",
            }}
          >
            Built for Orthopedic Resource Portal • Insights Dashboard (Dummy
            data, full interactive prototype)
          </div>
        </div>
      </div>
    </>
  );
};

export default InsightsPage;
