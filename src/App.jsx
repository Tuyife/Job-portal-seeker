import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import JobCard from './components/JobCard';
import JobDetails from './components/JobDetails';
import ApplicationForm from './components/ApplicationForm';
import { jobsData } from './data/jobsData';

function App() {
  const [jobs] = useState(jobsData);
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);
  const [showApplication, setShowApplication] = useState(false);
  
  const categories = ['All', ...new Set(jobs.map(job => job.category))];

  useEffect(() => {
    let filtered = jobs;
    if (searchTerm) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(job => job.category === selectedCategory);
    }
    setFilteredJobs(filtered);
  }, [searchTerm, selectedCategory, jobs]);

  const toggleBookmark = (jobId) => {
    if (bookmarkedJobs.includes(jobId)) {
      setBookmarkedJobs(bookmarkedJobs.filter(id => id !== jobId));
    } else {
      setBookmarkedJobs([...bookmarkedJobs, jobId]);
    }
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setShowApplication(false);
  };

  // INLINE STYLES - These will DEFINITELY work
  const styles = {
    app: {
      minHeight: '100vh',
    },
    mainContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: '20px',
      padding: '20px',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    sidebarWrapper: {
      width: '250px',
      flexShrink: 0,
    },
    contentWrapper: {
      flex: 1,
    }
  };

  return (
    <div style={styles.app}>
      <Header />
      <div style={styles.mainContainer}>
        <div style={styles.sidebarWrapper}>
          <Sidebar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
            bookmarkedJobs={bookmarkedJobs}
            jobs={jobs}
            onJobClick={handleJobClick}
          />
        </div>
        
        <div style={styles.contentWrapper}>
          <div style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '8px 16px', borderRadius: '8px', marginBottom: '16px', display: 'inline-block' }}>
            Found {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''}
          </div>
          
          {filteredJobs.length === 0 ? (
            <div style={{ background: 'white', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
              <p>No jobs found matching your search.</p>
            </div>
          ) : (
            filteredJobs.map(job => (
              <JobCard
                key={job.id}
                job={job}
                isBookmarked={bookmarkedJobs.includes(job.id)}
                onBookmark={toggleBookmark}
                onClick={() => handleJobClick(job)}
              />
            ))
          )}
        </div>
      </div>
      
      {selectedJob && !showApplication && (
        <JobDetails 
          job={selectedJob} 
          onClose={() => setSelectedJob(null)}
          onApply={() => setShowApplication(true)}
        />
      )}
      
      {showApplication && selectedJob && (
        <ApplicationForm
          job={selectedJob}
          onClose={() => setShowApplication(false)}
          onSubmit={(formData) => {
            alert(`Application submitted for ${selectedJob.title}!`);
            setShowApplication(false);
            setSelectedJob(null);
          }}
        />
      )}
    </div>
  );
}

export default App;