import React, { useState } from 'react';
import './BrowseJobs.css';
import JobCard from '../TrendingJobs/JobCard';
import { Job } from '../TrendingJobs/TrendingJobs';

const tabs = ['All Jobs', 'Remote', 'Full-time', 'Part-time', 'Contract', 'Internship'];

const companies = [
  { name: 'Google', icon: 'bi-google', jobs: 42, color: '#4285F4' },
  { name: 'Apple', icon: 'bi-apple', jobs: 38, color: '#555555' },
  { name: 'Meta', icon: 'bi-meta', jobs: 29, color: '#1877F2' },
  { name: 'Amazon', icon: 'bi-bag-fill', jobs: 61, color: '#FF9900' },
  { name: 'Microsoft', icon: 'bi-windows', jobs: 55, color: '#00A4EF' },
  { name: 'Figma', icon: 'bi-vector-pen', jobs: 14, color: '#F24E1E' },
];

const browseJobs: Job[] = [
  { id: 10, title: 'Frontend Engineer', company: 'Shopify', logo: 'bi-cart4', location: 'Remote', type: 'Full-time', salary: '$110K – $140K', bgColor: '#ECFDF5', featured: false, tags: ['Vue.js', 'Remote', 'Mid'] },
  { id: 11, title: 'DevOps Engineer', company: 'GitLab', logo: 'bi-git', location: 'Remote, Europe', type: 'Full-time', salary: '$130K – $165K', bgColor: '#FFF7ED', featured: true, tags: ['Kubernetes', 'CI/CD', 'Remote'] },
  { id: 12, title: 'Marketing Analyst', company: 'HubSpot', logo: 'bi-megaphone', location: 'Boston, MA', type: 'Full-time', salary: '$80K – $100K', bgColor: '#FFF0F5', featured: false, tags: ['Analytics', 'SEO', 'Content'] },
  { id: 13, title: 'Backend Engineer', company: 'Cloudflare', logo: 'bi-cloud-fill', location: 'San Jose, CA', type: 'Full-time', salary: '$155K – $195K', bgColor: '#F3F0FF', featured: false, tags: ['Rust', 'Go', 'Senior'] },
  { id: 14, title: 'iOS Developer', company: 'Spotify', logo: 'bi-music-note-beamed', location: 'Stockholm / Remote', type: 'Full-time', salary: '$140K – $170K', bgColor: '#EFF6FF', featured: true, tags: ['Swift', 'iOS', 'Music Tech'] },
  { id: 15, title: 'Scrum Master', company: 'Atlassian', logo: 'bi-kanban', location: 'Sydney, AU', type: 'Contract', salary: '$90K – $115K', bgColor: '#ECFDF5', featured: false, tags: ['Agile', 'Scrum', 'Remote'] },
];

const BrowseJobs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All Jobs');

  return (
    <section className="browse-section section-padding" id="browse" aria-label="Browse jobs and companies">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="section-label mx-auto">
            <i className="bi bi-search"></i> Browse
          </div>
          <h2 className="section-heading">
            Browse Jobs & <span className="gradient-text">Top Companies</span>
          </h2>
          <p className="section-subtext">
            Find opportunities across all job types and the world's most innovative companies.
          </p>
        </div>

        {/* Tabs */}
        <div className="browse-tabs d-flex flex-wrap gap-2 mb-5" role="tablist">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`browse-tab ${activeTab === tab ? 'browse-tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
              role="tab"
              aria-selected={activeTab === tab}
              id={`tab-${tab.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="jobs-grid mb-5">
          {browseJobs.map(job => <JobCard key={job.id} job={job} />)}
        </div>

        {/* Companies Section */}
        <div className="companies-section">
          <h3 className="companies-title">Featured Companies Hiring Now</h3>
          <div className="companies-grid">
            {companies.map(company => (
              <a href="#" className="company-card" key={company.name} id={`company-${company.name.toLowerCase()}`}>
                <div className="company-icon" style={{ background: `${company.color}15`, color: company.color }}>
                  <i className={`bi ${company.icon}`}></i>
                </div>
                <p className="company-name">{company.name}</p>
                <p className="company-jobs">{company.jobs} open roles</p>
                <span className="company-view">View Jobs →</span>
              </a>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-5">
          <a href="#" className="btn-outline-custom" id="load-more-btn">
            <i className="bi bi-arrow-down-circle me-2"></i> Load More Jobs
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrowseJobs;
