import React from 'react';

const Sidebar = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory, 
  categories, 
  bookmarkedJobs, 
  jobs, 
  onJobClick 
}) => {
  // Inline styles for sidebar
  const styles = {
    sidebar: {
      background: 'white',
      borderRadius: '12px',
      padding: '16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    section: {
      marginBottom: '20px',
    },
    title: {
      fontSize: '14px',
      marginBottom: '10px',
      color: '#333',
    },
    searchInput: {
      width: '100%',
      padding: '8px',
      border: '1px solid #ddd',
      borderRadius: '6px',
      fontSize: '14px',
    },
    categoryBtn: {
      display: 'block',
      width: '100%',
      padding: '8px',
      marginBottom: '5px',
      background: '#f5f5f5',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      textAlign: 'left',
    },
    activeCategory: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
    },
    bookmarkItem: {
      padding: '8px',
      background: '#f8f9fa',
      marginBottom: '5px',
      borderRadius: '6px',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.section}>
        <h3 style={styles.title}>🔍 Search Jobs</h3>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      <div style={styles.section}>
        <h3 style={styles.title}>📂 Categories</h3>
        {categories.map(category => (
          <button
            key={category}
            style={{
              ...styles.categoryBtn,
              ...(selectedCategory === category ? styles.activeCategory : {})
            }}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={styles.section}>
        <h3 style={styles.title}>⭐ Bookmarked ({bookmarkedJobs.length})</h3>
        {bookmarkedJobs.length === 0 ? (
          <p style={{ color: '#999', fontSize: '12px', textAlign: 'center' }}>No bookmarks</p>
        ) : (
          bookmarkedJobs.map(jobId => {
            const job = jobs.find(j => j.id === jobId);
            return job ? (
              <div key={jobId} style={styles.bookmarkItem} onClick={() => onJobClick(job)}>
                <div style={{ fontWeight: 'bold', fontSize: '13px' }}>{job.title}</div>
                <div style={{ fontSize: '11px', color: '#888' }}>{job.company}</div>
              </div>
            ) : null;
          })
        )}
      </div>
    </div>
  );
};

export default Sidebar;