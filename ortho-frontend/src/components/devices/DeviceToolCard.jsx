import React from "react";

const DeviceToolCard = ({ tool }) => {
  const handleClick = () => {
    if (tool.link) {
      window.open(tool.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="resource-card" onClick={handleClick}>
      <div className="tool-image">
        <img src={tool.image} alt={tool.name} />
      </div>

      <span className="badge">{tool.category}</span>
      <h4 style={{ margin: "8px 0 6px" }}>{tool.name}</h4>

      <p style={{ margin: 0, color: "#64748b", fontSize: "13px", lineHeight: "1.5" }}>
        {tool.description}
      </p>

      <div className="card-cta">View →</div>
    </div>
  );
};

export default DeviceToolCard;
