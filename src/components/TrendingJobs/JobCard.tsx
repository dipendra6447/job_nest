import React from 'react';
import { Job } from './TrendingJobs';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <article className="job-card" id={`job-card-${job.id}`} aria-label={`${job.title} at ${job.company}`}>
      {job.featured && (
        <div className="job-card-featured">
          <i className="bi bi-star-fill me-1"></i> Featured
        </div>
      )}

      {/* Company Header */}
      <div className="job-card-header">
        <div className="job-logo" style={{ background: job.bgColor }}>
          <i className={`bi ${job.logo}`}></i>
        </div>
        <div className="job-company-info">
          <p className="job-company">{job.company}</p>
          <div className="job-type-badge">{job.type}</div>
        </div>
        <button className="job-bookmark" aria-label={`Save ${job.title}`} id={`bookmark-${job.id}`}>
          <i className="bi bi-bookmark"></i>
        </button>
      </div>

      {/* Job Title */}
      <h3 className="job-title">{job.title}</h3>

      {/* Meta */}
      <div className="job-meta">
        <span className="job-location">
          <i className="bi bi-geo-alt"></i>
          {job.location}
        </span>
      </div>

      {/* Tags */}
      <div className="job-tags d-flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <span key={tag} className="job-tag">{tag}</span>
        ))}
      </div>

      {/* Footer */}
      <div className="job-card-footer">
        <div className="job-salary">
          <i className="bi bi-currency-dollar"></i>
          {job.salary}
        </div>
        <a href="#" className="job-apply-btn" id={`apply-${job.id}`}>
          Apply Now <i className="bi bi-arrow-right ms-1"></i>
        </a>
      </div>
    </article>
  );
};

export default JobCard;
