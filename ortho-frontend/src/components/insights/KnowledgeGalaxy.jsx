import React, { useMemo } from "react";

const KnowledgeGalaxy = ({
  topics = [],
  selectedTopicId,
  onSelectTopic,
  topicContentMap = {},
}) => {
  const selected = useMemo(
    () => topics.find((t) => t.id === selectedTopicId),
    [topics, selectedTopicId]
  );

  const selectedContent = useMemo(() => {
    if (!selected) return null;
    return topicContentMap?.[selected.id] || null;
  }, [selected, topicContentMap]);

  return (
    <>
      <style>{`
        .galaxy-wrap {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 14px;
          align-items: stretch;
        }

        .galaxy-board {
          position: relative;
          min-height: 280px;
          border-radius: 18px;
          background: radial-gradient(circle at 30% 30%, rgba(56,189,248,0.18), transparent 42%),
                      radial-gradient(circle at 70% 40%, rgba(139,92,246,0.15), transparent 45%),
                      rgba(15,23,42,0.03);
          border: 1px solid rgba(15,23,42,0.06);
          overflow: hidden;
        }

        .galaxy-board::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(15,23,42,0.12) 1px, transparent 1px);
          background-size: 18px 18px;
          opacity: 0.25;
          pointer-events: none;
        }

        .node {
          position: absolute;
          border-radius: 999px;
          border: 1px solid rgba(56,189,248,0.25);
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(10px);
          padding: 10px 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          user-select: none;
        }

        .node:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 34px rgba(15,23,42,0.12);
        }

        .node.active {
          border: none;
          background: linear-gradient(90deg, rgba(56,189,248,0.95), rgba(139,92,246,0.95));
          color: white;
        }

        .node-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(56,189,248,0.85);
          box-shadow: 0 0 0 6px rgba(56,189,248,0.12);
        }

        .node.active .node-dot {
          background: rgba(255,255,255,0.95);
          box-shadow: 0 0 0 6px rgba(255,255,255,0.15);
        }

        .node-label {
          font-weight: 800;
          font-size: 13px;
        }

        .node-count {
          font-size: 12px;
          color: rgba(100,116,139,1);
          font-weight: 700;
        }

        .node.active .node-count {
          color: rgba(255,255,255,0.9);
        }

        /* Right panel */
        .galaxy-panel {
          border-radius: 18px;
          border: 1px solid rgba(15,23,42,0.06);
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          padding: 12px;
          min-height: 280px;
        }

        .galaxy-panel h4 {
          margin: 0 0 6px;
          font-size: 14px;
          font-weight: 900;
          color: #0f172a;
        }

        .galaxy-panel p {
          margin: 0 0 10px;
          font-size: 12px;
          color: #64748b;
          line-height: 1.5;
        }

        .group-title {
          font-size: 12px;
          font-weight: 900;
          color: #0f172a;
          margin: 10px 0 6px;
        }

        .mini-pill {
          display: inline-block;
          padding: 7px 10px;
          border-radius: 999px;
          border: 1px solid rgba(15,23,42,0.08);
          background: rgba(255,255,255,0.65);
          font-size: 12px;
          font-weight: 700;
          color: #334155;
          margin: 0 8px 8px 0;
          cursor: pointer;
        }

        .mini-pill:hover {
          background: rgba(56,189,248,0.12);
          border-color: rgba(56,189,248,0.28);
          color: #0284c7;
        }

        .hint {
          font-size: 12px;
          color: #94a3b8;
          padding-top: 6px;
        }

        @media (max-width: 1100px) {
          .galaxy-wrap {
            grid-template-columns: 1fr;
          }
        }
          /* ... inside <style> ... */
.galaxy-wrap {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 14px;
}

@media (max-width: 900px) {
  .galaxy-wrap {
    grid-template-columns: 1fr; /* Stacked */
  }
  .galaxy-board {
    height: 300px;
  }
}
      `}</style>

      <div className="galaxy-wrap">
        {/* Board */}
        <div className="galaxy-board">
          {topics.map((t, idx) => {
            // fixed positions for a consistent premium look
            const positions = [
              { top: 35, left: 26 },
              { top: 60, left: 210 },
              { top: 155, left: 70 },
              { top: 180, left: 265 },
              { top: 105, left: 380 },
              { top: 210, left: 470 },
              { top: 80, left: 520 },
              { top: 30, left: 430 },
            ];

            const pos = positions[idx % positions.length];

            return (
              <div
                key={t.id}
                className={`node ${selectedTopicId === t.id ? "active" : ""}`}
                style={{ top: pos.top, left: pos.left }}
                onClick={() => onSelectTopic?.(t.id)}
                title="Click to explore"
              >
                <span className="node-dot" />
                <span className="node-label">{t.label}</span>
                <span className="node-count">({t.count})</span>
              </div>
            );
          })}
        </div>

        {/* Panel */}
        <div className="galaxy-panel">
          {!selected ? (
            <>
              <h4>Topic Explorer</h4>
              <p>Select a node to view recommendations.</p>
              <div className="hint">✨ Tip: Try Trauma or Arthroplasty</div>
            </>
          ) : (
            <>
              <h4>{selected.label}</h4>
              <p>Recommended learning + clinical items for this topic.</p>

              <div className="group-title">📚 Books</div>
              {(selectedContent?.books || []).slice(0, 4).map((x) => (
                <span
                  key={x.title}
                  className="mini-pill"
                  onClick={() => x.viewUrl && window.open(x.viewUrl, "_blank")}
                >
                  {x.title}
                </span>
              ))}

              <div className="group-title">📄 Papers</div>
              {(selectedContent?.papers || []).slice(0, 4).map((x) => (
                <span
                  key={x.title}
                  className="mini-pill"
                  onClick={() => x.viewUrl && window.open(x.viewUrl, "_blank")}
                >
                  {x.title}
                </span>
              ))}

              <div className="group-title">🦴 Implants</div>
              {(selectedContent?.implants || []).slice(0, 4).map((x) => (
                <span
                  key={x.title}
                  className="mini-pill"
                  onClick={() => x.viewUrl && window.open(x.viewUrl, "_blank")}
                >
                  {x.title}
                </span>
              ))}

              <div className="group-title">🛠 Devices</div>
              {(selectedContent?.devices || []).slice(0, 4).map((x) => (
                <span
                  key={x.title}
                  className="mini-pill"
                  onClick={() => x.viewUrl && window.open(x.viewUrl, "_blank")}
                >
                  {x.title}
                </span>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default KnowledgeGalaxy;
