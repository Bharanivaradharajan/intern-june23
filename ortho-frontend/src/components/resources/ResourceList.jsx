import React, { useState, useEffect } from "react";

const ResourceList = ({ data, search, sort, loading, activeTab }) => {
  // 1. Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Reset to page 1 whenever search or tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, activeTab]);

  const list = data || [];

  // 2. Filter and Sort Logic (Existing)
  const filtered = list
    .filter(item => 
      item.title?.toLowerCase().includes(search.toLowerCase()) || 
      item.author?.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => (sort === "newest" ? b.year - a.year : a.year - b.year));

  // 3. Pagination Calculation
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  if (loading) return <div style={{textAlign: 'center', padding: '40px', color: '#64748b'}}>Loading...</div>;

  return (
    <div className="resource-container-wrapper">
      <style>{`
        .resource-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 16px;
        }

        .card-link { text-decoration: none; color: inherit; display: block; }
        .card {
          background: white;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: border-color 0.2s;
        }
        .card:hover { border-color: #0284c7; }

        .book-img-box {
          width: 100%;
          height: 180px;
          background: #f8fafc;
          padding: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .book-img-box img {
          height: 100%;
          max-width: 100%;
          object-fit: contain;
          box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        }

        .card-body { padding: 12px; flex-grow: 1; display: flex; flex-direction: column; }
        .tag { font-size: 9px; font-weight: 800; color: #0284c7; text-transform: uppercase; margin-bottom: 4px; }
        .item-title { 
          font-size: 15px; 
          font-weight: 700; 
          color: #0f172a; 
          margin: 0 0 4px 0;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .author { font-size: 13px; color: #64748b; margin-bottom: 8px; }
        
        /* Added for Research visibility */
        .pmid-text { font-size: 11px; color: #94a3b8; margin-top: -4px; margin-bottom: 8px; }

        .footer { 
          margin-top: auto; 
          font-size: 11px; 
          color: #94a3b8; 
          font-weight: 700; 
          padding-top: 8px; 
          border-top: 1px solid #f1f5f9;
          display: flex;
          justify-content: space-between;
        }

        .pagination-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 40px;
          padding-bottom: 20px;
        }

        .pg-btn {
          min-width: 35px;
          height: 35px;
          padding: 0 8px;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
          background: white;
          color: #0f172a;
          font-family: "Space Grotesk", sans-serif;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .pg-btn:hover:not(:disabled) {
          border-color: #0284c7;
          color: #0284c7;
          background: #f0f9ff;
        }

        .pg-btn.active {
          background: #0284c7;
          color: white;
          border-color: #0284c7;
        }

        .pg-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>

      <div className="resource-grid">
        {currentItems.map((item) => (
          <a 
            key={item.id} 
            /* REDIRECT LOGIC: Checks for buyUrl (Books) or viewUrl (PubMed) */
            href={item.buyUrl || item.viewUrl || "#"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="card-link"
          >
            <div className="card">
              {activeTab === "Books" && (
                <div className="book-img-box">
                  <img src={item.imageUrl || "https://via.placeholder.com/150x200?text=No+Cover"} alt={item.title} />
                </div>
              )}
              <div className="card-body">
                <span className="tag">{item.type || activeTab}</span>
                <h4 className="item-title">{item.title}</h4>
                <p className="author">{item.author}</p>
                
                {/* Logic for PubMed IDs */}
                {item.pmid && <p className="pmid-text">PMID: {item.pmid}</p>}
                
                <div className="footer">
                  <span>{item.year}</span>
                  <span style={{color: '#0284c7'}}>
                    {item.type === "Books" ? "Buy" : "View"} →
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination Controls (Existing) */}
      {totalPages > 1 && (
        <div className="pagination-bar">
          <button 
            className="pg-btn" 
            onClick={() => setCurrentPage(prev => prev - 1)}
            disabled={currentPage === 1}
          >
            &laquo;
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`pg-btn ${currentPage === index + 1 ? "active" : ""}`}
              onClick={() => {
                setCurrentPage(index + 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {index + 1}
            </button>
          ))}

          <button 
            className="pg-btn" 
            onClick={() => setCurrentPage(prev => prev + 1)}
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </div>
      )}
    </div>
  );
};

export default ResourceList;