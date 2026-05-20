import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { FiCode, FiCloud, FiShield, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <Header />
      <div className="home-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="highlight">Tech Jobs</span> for<br />
              Future Developers
            </h1>
            <p className="hero-subtitle">
              Find the best tech jobs from top companies. 
              Software development, Cloud, Security, and more.
            </p>
            <div className="hero-buttons">
              <Link to="/jobs" className="btn-primary">
                Browse Tech Jobs <FiArrowRight />
              </Link>
              <Link to="/jobs" className="btn-secondary">
                View Companies
              </Link>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Tech Jobs</p>
            </div>
            <div className="stat">
              <h3>200+</h3>
              <p>Companies</p>
            </div>
            <div className="stat">
              <h3>50k+</h3>
              <p>Developers</p>
            </div>
          </div>
        </div>

        {/* Tech Categories Section */}
        <div className="categories-section">
          <h2 className="section-title">Popular Tech Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <FiCode className="category-icon" />
              <h3>Development</h3>
              <p>Frontend, Backend, Full Stack</p>
            </div>
            <div className="category-card">
              <FiCloud className="category-icon" />
              <h3>Cloud Computing</h3>
              <p>AWS, Azure, DevOps</p>
            </div>
            <div className="category-card">
              <FiShield className="category-icon" />
              <h3>Cybersecurity</h3>
              <p>Security Engineer, Analyst</p>
            </div>
            <div className="category-card">
              <FiTrendingUp className="category-icon" />
              <h3>Data Science</h3>
              <p>AI, ML, Data Analytics</p>
            </div>
          </div>
        </div>

        {/* Featured Companies */}
        <div className="companies-section">
          <h2 className="section-title">Top Tech Companies Hiring</h2>
          <div className="companies-grid">
            <div className="company-card">
              <div className="company-logo">🏢</div>
              <h4>TechCorp</h4>
              <p>25+ jobs available</p>
            </div>
            <div className="company-card">
              <div className="company-logo">☁️</div>
              <h4>CloudSystems</h4>
              <p>18+ jobs available</p>
            </div>
            <div className="company-card">
              <div className="company-logo">🔒</div>
              <h4>SecureNet</h4>
              <p>12+ jobs available</p>
            </div>
            <div className="company-card">
              <div className="company-logo">📊</div>
              <h4>DataFlow</h4>
              <p>20+ jobs available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
