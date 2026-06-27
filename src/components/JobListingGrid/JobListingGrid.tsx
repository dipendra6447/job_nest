"use client";
import React from 'react';
import './JobListingGrid.css';
import JobCard, { Job } from './JobCard';
import { ViewMode } from '../JobResultsHeader/JobResultsHeader';

interface JobListingGridProps {
  jobs: Job[];
  viewMode: ViewMode;
  loading?: boolean;
}

const SkeletonCard: React.FC = () => (
  <div className="job-card skeleton-card" aria-hidden="true">
    <div className="sk-line sk-line-full sk-company-bar" />
    <div className="sk-line sk-line-70 sk-title" />
    <div className="sk-line sk-line-50 sk-meta" />
    <div className="sk-line sk-line-40 sk-meta" />
    <div className="sk-tags">
      <div className="sk-tag" />
      <div className="sk-tag" />
      <div className="sk-tag" />
    </div>
    <div className="sk-line sk-line-full" />
    <div className="sk-line sk-line-80" />
    <div className="sk-footer">
      <div className="sk-line sk-line-30" />
      <div className="sk-btn" />
    </div>
  </div>
);

const JobListingGrid: React.FC<JobListingGridProps> = ({ jobs, viewMode, loading }) => {
  if (loading) {
    return (
      <div className={`jlg-grid ${viewMode === 'list' ? 'jlg-list' : ''}`}>
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="jlg-empty">
        <div className="jlg-empty-icon">
          <i className="bi bi-search" />
        </div>
        <h3>No jobs found</h3>
        <p>Try adjusting your search criteria or removing some filters.</p>
      </div>
    );
  }

  return (
    <div
      className={`jlg-grid ${viewMode === 'list' ? 'jlg-list' : ''}`}
      role="list"
      aria-label="Job listings"
    >
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} viewMode={viewMode} />
      ))}
    </div>
  );
};

export default JobListingGrid;
