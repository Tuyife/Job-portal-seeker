import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jobsData } from "../data/jobsData";
import "./BookmarksPage.css";

function BookmarksPage() {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);
  const [bookmarkIds, setBookmarkIds] = useState([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarkedJobs") || "[]");
    setBookmarkIds(savedBookmarks);
    const bookmarked = jobsData.filter(job => savedBookmarks.includes(job.id));
    setBookmarkedJobs(bookmarked);
  }, []);

  const removeBookmark = (jobId) => {
    const updatedBookmarks = bookmarkIds.filter(id => id !== jobId);
    setBookmarkIds(updatedBookmarks);
    localStorage.setItem("bookmarkedJobs", JSON.stringify(updatedBookmarks));
    setBookmarkedJobs(bookmarkedJobs.filter(job => job.id !== jobId));
  };

  return (
    <div className="bookmarks-container">
      <Link to="/" className="back-link">← Back to Jobs</Link>
      
      <h1 className="bookmarks-title">📌 Bookmarked Jobs</h1>
      
      {bookmarkedJobs.length === 0 ? (
        <div className="empty-state">
          <p>No bookmarked jobs yet</p>
          <Link to="/" className="browse-link">Browse Jobs</Link>
        </div>
      ) : (
        <div className="bookmarks-list">
          {bookmarkedJobs.map((job) => (
            <div key={job.id} className="bookmark-card">
              <Link to={`/job/${job.id}`} className="bookmark-link">
                <h3 className="bookmark-job-title">{job.title}</h3>
                <div className="bookmark-company">{job.company} • {job.location}</div>
                <div className="bookmark-category">{job.category}</div>
              </Link>
              <button 
                className="remove-bookmark-btn"
                onClick={() => removeBookmark(job.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookmarksPage;
