import React, { useMemo, useState } from "react";

const SwipeCards = ({ cards = [], savedCardIds = [], onSave, onRemove }) => {
  const [index, setIndex] = useState(0);

  const current = useMemo(() => cards[index], [cards, index]);
  const next = useMemo(() => cards[index + 1], [cards, index]);

  const handleSave = () => {
    if (!current) return;
    onSave?.(current.id);
    setIndex((p) => Math.min(p + 1, cards.length));
  };

  const handleSkip = () => {
    if (!current) return;
    setIndex((p) => Math.min(p + 1, cards.length));
  };

  const handleUndoRemove = (id) => {
    onRemove?.(id);
  };

  return (
    <>
      <style>{`
        .swipe-wrap {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .deck {
          position: relative;
          height: 250px;
          border-radius: 18px;
          background: rgba(248,250,252,0.75);
          border: 1px solid rgba(15,23,42,0.06);
          overflow: hidden;
        }

        .card {
          position: absolute;
          inset: 14px;
          border-radius: 18px;
          background: rgba(255,255,255,0.75);
          border: 1px solid rgba(15,23,42,0.08);
          backdrop-filter: blur(10px);
          padding: 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.25s ease, opacity 0.25s ease;
          cursor: pointer;
        }

        .card.next {
          transform: translateY(10px) scale(0.98);
          opacity: 0.55;
          inset: 18px;
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .type {
          font-size: 11px;
          font-weight: 900;
          padding: 6px 10px;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(56,189,248,0.18), rgba(139,92,246,0.16));
          border: 1px solid rgba(56,189,248,0.22);
          color: #0f172a;
        }

        .saved {
          font-size: 11px;
          font-weight: 900;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(56,189,248,0.12);
          border: 1px solid rgba(56,189,248,0.22);
          color: #0284c7;
        }

        .title {
          margin: 10px 0 6px;
          font-size: 14px;
          font-weight: 900;
          color: #0f172a;
          line-height: 1.3;
        }

        .desc {
          margin: 0;
          font-size: 12px;
          color: #64748b;
          line-height: 1.6;
        }

        .btn-row {
          display: flex;
          gap: 10px;
          margin-top: 12px;
        }

        .btn {
          flex: 1;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid rgba(15,23,42,0.10);
          background: rgba(255,255,255,0.75);
          cursor: pointer;
          font-weight: 900;
          transition: transform 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn.primary {
          border: none;
          background: linear-gradient(90deg, rgba(56,189,248,0.95), rgba(139,92,246,0.95));
          color: white;
        }

        .mini-saved {
          margin-top: 10px;
          border-radius: 18px;
          border: 1px solid rgba(15,23,42,0.06);
          background: rgba(248,250,252,0.75);
          padding: 12px;
        }

        .mini-saved h4 {
          margin: 0 0 8px;
          font-size: 13px;
          font-weight: 900;
          color: #0f172a;
        }

        .saved-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 14px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(15,23,42,0.06);
          margin-bottom: 8px;
        }

        .saved-item b {
          font-size: 12px;
          color: #0f172a;
        }

        .remove {
          font-size: 11px;
          font-weight: 900;
          padding: 6px 10px;
          border-radius: 999px;
          cursor: pointer;
          background: rgba(239,68,68,0.10);
          border: 1px solid rgba(239,68,68,0.18);
          color: rgba(239,68,68,0.95);
        }
          /* ... inside <style> ... */
@media (max-width: 480px) {
  .deck {
    height: 300px;
  }
  .title {
    font-size: 16px;
  }
  .btn {
    padding: 12px; /* Larger touch targets */
  }
}
      `}</style>

      <div className="swipe-wrap">
        <div className="deck">
          {next && (
            <div className="card next" onClick={() => next.viewUrl && window.open(next.viewUrl, "_blank")}>
              <div className="card-top">
                <span className="type">{next.type}</span>
                <span className="saved">Next</span>
              </div>
              <div>
                <h4 className="title">{next.title}</h4>
                <p className="desc">{next.description}</p>
              </div>
              <div style={{ color: "#94a3b8", fontSize: 11, fontWeight: 800 }}>
                Tap to open • Swipe actions below
              </div>
            </div>
          )}

          {current ? (
            <div className="card" onClick={() => current.viewUrl && window.open(current.viewUrl, "_blank")}>
              <div className="card-top">
                <span className="type">{current.type}</span>
                {savedCardIds.includes(current.id) ? (
                  <span className="saved">Saved</span>
                ) : (
                  <span className="saved">Discover</span>
                )}
              </div>

              <div>
                <h4 className="title">{current.title}</h4>
                <p className="desc">{current.description}</p>
              </div>

              <div style={{ color: "#94a3b8", fontSize: 11, fontWeight: 800 }}>
                Click card to open
              </div>
            </div>
          ) : (
            <div
              className="card"
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 32 }}>✅</div>
                <div style={{ fontWeight: 900, color: "#0f172a" }}>End of Cards</div>
                <div style={{ color: "#64748b", fontSize: 12, marginTop: 6 }}>
                  You’ve explored all dummy items.
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="btn-row">
          <button className="btn" onClick={handleSkip} disabled={!current}>
            Skip
          </button>
          <button className="btn primary" onClick={handleSave} disabled={!current}>
            Save
          </button>
        </div>

        <div className="mini-saved">
          <h4>⭐ Saved</h4>
          {savedCardIds.length === 0 ? (
            <div style={{ fontSize: 12, color: "#64748b" }}>
              Swipe right (Save) to collect items here.
            </div>
          ) : (
            cards
              .filter((c) => savedCardIds.includes(c.id))
              .slice(0, 4)
              .map((c) => (
                <div key={c.id} className="saved-item">
                  <b>{c.title}</b>
                  <span className="remove" onClick={() => handleUndoRemove(c.id)}>
                    Remove
                  </span>
                </div>
              ))
          )}
        </div>
      </div>
    </>
  );
};

export default SwipeCards;
