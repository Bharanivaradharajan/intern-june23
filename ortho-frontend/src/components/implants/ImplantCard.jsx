import React from "react";

const ImplantCard = ({ item }) => {
  const handleClick = () => {
    if (item.viewUrl) {
      window.open(item.viewUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="resource-card" onClick={handleClick}>
      <div className="book-image-wrapper">
        <img src={item.image} alt={item.title} />
      </div>

      <span className="badge">{item.category}</span>
      <h4 style={{ margin: "8px 0 6px" }}>{item.title}</h4>
      <p style={{ margin: 0, color: "#64748b", fontSize: "14px" }}>
        {item.surgery}
      </p>

      <p style={{ marginTop: "10px", color: "#334155", fontSize: "13px" }}>
        {item.description.slice(0, 90)}...
      </p>

      <div className="card-cta">View →</div>
    </div>
  );
};

export default ImplantCard;
