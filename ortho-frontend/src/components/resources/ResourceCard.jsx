import React from "react";
import "./resources.css";

const ResourceCard = ({ item }) => {
  const isBook = item.type === "Books";
  const url = isBook ? item.buyUrl : item.viewUrl;

  const handleClick = () => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="resource-card" onClick={handleClick}>
      {isBook && item.image && (
        <div className="book-image-wrapper">
          <img src={item.image} alt={item.title} />
        </div>
      )}

      <span className="badge">{item.type}</span>
      <h4>{item.title}</h4>
      <p>{item.author}</p>
      <small>{item.year}</small>

      <div className="card-cta">
        {isBook ? "Buy Book →" : "View Paper →"}
      </div>
    </div>
  );
};

export default ResourceCard;
