import React, { useState } from 'react';
import './JobDetailsSidebar.css';

const overviewItems = [
  { icon: 'bi-clock', label: 'Posted', value: '2 hours ago' },
  { icon: 'bi-people', label: 'Applicants', value: '42' },
  { icon: 'bi-bar-chart', label: 'Experience', value: '3 – 5 years' },
  { icon: 'bi-briefcase', label: 'Employment Type', value: 'Full-time' },
  { icon: 'bi-building', label: 'Work Mode', value: 'On-site' },
  { icon: 'bi-currency-dollar', label: 'Salary Range', value: '$60K – $80K / year' },
  { icon: 'bi-geo-alt', label: 'Location', value: 'Dayton, OH' },
  { icon: 'bi-tag', label: 'Industry', value: 'Marketing & Advertising' },
];

const benefits = [
  { icon: 'bi-heart-pulse', label: 'Health Insurance' },
  { icon: 'bi-tooth', label: 'Dental Insurance' },
  { icon: 'bi-piggy-bank', label: '401(k) Retirement Plan' },
  { icon: 'bi-calendar-check', label: 'Paid Time Off' },
  { icon: 'bi-shield-check', label: 'Life Insurance' },
  { icon: 'bi-graph-up-arrow', label: 'Professional Development' },
];

const JobDetailsSidebar: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="jds-sidebar">
      {/* Company Overview */}
      <div className="jds-card" id="jds-company-overview">
        <h2 className="jds-card-title">Company Overview</h2>
        <div className="jds-company-header">
          <div className="jds-co-logo">
            <span>DS</span>
          </div>
          <div className="jds-co-info">
            <div className="jds-co-name-row">
              <span className="jds-co-name">DigitalStream Agency</span>
              <i className="bi bi-patch-check-fill jds-co-verified" aria-label="Verified" />
            </div>
            <span className="jds-co-industry">Marketing &amp; Advertising</span>
          </div>
        </div>

        <div className="jds-rating-row">
          <div className="jds-stars" aria-label="Rating 4.8 out of 5">
            {[1, 2, 3, 4].map((s) => (
              <i key={s} className="bi bi-star-fill jds-star jds-star-filled" aria-hidden="true" />
            ))}
            <i className="bi bi-star-half jds-star jds-star-filled" aria-hidden="true" />
          </div>
          <span className="jds-rating-num">4.8</span>
          <span className="jds-rating-count">(45 reviews)</span>
        </div>

        <div className="jds-co-size">
          <i className="bi bi-people" />
          25 – 50 employees
        </div>

        <p className="jds-co-desc">
          DigitalStream Agency is a full-service digital marketing agency helping brands grow
          creative strategies, data-driven campaigns, and measurable results.
        </p>

        <a href="#" className="jds-co-profile-link" id="jds-view-company">
          View Company Profile <i className="bi bi-arrow-right" />
        </a>
      </div>

      {/* Job Overview */}
      <div className="jds-card" id="jds-job-overview">
        <h2 className="jds-card-title">Job Overview</h2>
        <ul className="jds-overview-list">
          {overviewItems.map((item) => (
            <li key={item.label} className="jds-overview-item">
              <div className="jds-ov-icon">
                <i className={`bi ${item.icon}`} aria-hidden="true" />
              </div>
              <div className="jds-ov-text">
                <span className="jds-ov-label">{item.label}</span>
                <span className="jds-ov-value">{item.value}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits & Perks */}
      <div className="jds-card" id="jds-benefits">
        <h2 className="jds-card-title">Benefits &amp; Perks</h2>
        <ul className="jds-benefits-list">
          {benefits.map((b) => (
            <li key={b.label} className="jds-benefit-item">
              <div className="jds-benefit-icon">
                <i className={`bi ${b.icon}`} aria-hidden="true" />
              </div>
              <span>{b.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Share */}
      <div className="jds-card" id="jds-share">
        <h2 className="jds-card-title">Share this job</h2>
        <div className="jds-share-row">
          <button
            className="jds-share-btn jds-share-link"
            onClick={handleCopyLink}
            aria-label="Copy job link"
            type="button"
            id="jds-copy-link"
          >
            <i className={`bi ${copied ? 'bi-check-lg' : 'bi-link-45deg'}`} />
          </button>
          <a href="https://facebook.com" className="jds-share-btn jds-share-fb" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" id="jds-share-fb">
            <i className="bi bi-facebook" />
          </a>
          <a href="https://x.com" className="jds-share-btn jds-share-x" target="_blank" rel="noopener noreferrer" aria-label="Share on X" id="jds-share-x">
            <i className="bi bi-twitter-x" />
          </a>
          <a href="https://linkedin.com" className="jds-share-btn jds-share-li" target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" id="jds-share-li">
            <i className="bi bi-linkedin" />
          </a>
          <a href="#" className="jds-share-btn jds-share-email" aria-label="Share via email" id="jds-share-email">
            <i className="bi bi-envelope" />
          </a>
        </div>
      </div>

      {/* Not the right fit */}
      <div className="jds-card jds-not-fit" id="jds-not-right-fit">
        <div className="jds-not-fit-content">
          <div>
            <p className="jds-not-fit-title">Not the right fit?</p>
            <p className="jds-not-fit-desc">
              Create a profile and get matched with jobs that fit your skills and interests.
            </p>
            <a href="#" className="jds-create-profile-btn" id="jds-create-profile">
              Create Profile
            </a>
          </div>
          <div className="jds-not-fit-illustration" aria-hidden="true">
            <i className="bi bi-person-bounding-box" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsSidebar;
