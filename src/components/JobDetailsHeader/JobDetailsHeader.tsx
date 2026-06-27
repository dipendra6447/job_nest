"use client";
import React from 'react';
import './JobDetailsHeader.css';

interface Props {
  saved: boolean;
  onSave: () => void;
}

const JobDetailsHeader: React.FC<Props> = ({ saved, onSave }) => (
  <div className="jdh-wrapper">
    {/* Logo + Info */}
    <div className="jdh-left">
      <div className="jdh-logo" aria-label="DigitalStream Agency logo">
        <span>DS</span>
      </div>
      <div className="jdh-info">
        <div className="jdh-title-row">
          <h1 className="jdh-job-title">Marketing Manager</h1>
          <span className="jdh-new-badge">New</span>
        </div>
        <div className="jdh-company-row">
          <a href="#" className="jdh-company-name" id="jdh-company-link">
            DigitalStream Agency
          </a>
          <span className="jdh-verified" aria-label="Verified company">
            <i className="bi bi-patch-check-fill" />
          </span>
        </div>
        <div className="jdh-meta-row">
          <span className="jdh-meta-item">
            <i className="bi bi-geo-alt" />
            Dayton, OH
          </span>
          <span className="jdh-dot" aria-hidden="true">•</span>
          <span className="jdh-meta-item">
            <i className="bi bi-building" />
            On-site
          </span>
          <span className="jdh-dot" aria-hidden="true">•</span>
          <span className="jdh-meta-item">
            <i className="bi bi-clock" />
            Full-time
          </span>
        </div>
        <div className="jdh-salary-row">
          <i className="bi bi-currency-dollar" />
          <span className="jdh-salary">$60K – $80K / year</span>
        </div>
        <div className="jdh-posted-row">
          <span className="jdh-posted">
            <i className="bi bi-clock-history" />
            Posted 2 hours ago
          </span>
          <span className="jdh-applicants">
            <i className="bi bi-people" />
            42 applicants
          </span>
        </div>
      </div>
    </div>

    {/* Action buttons */}
    <div className="jdh-actions">
      <a
        href="#apply"
        className="jdh-btn-apply"
        id="jdh-apply-btn"
        aria-label="Apply Now for Marketing Manager"
      >
        Apply Now
      </a>
      <button
        className={`jdh-btn-save ${saved ? 'saved' : ''}`}
        onClick={onSave}
        type="button"
        id="jdh-save-btn"
        aria-label={saved ? 'Unsave job' : 'Save job'}
      >
        <i className={`bi ${saved ? 'bi-bookmark-fill' : 'bi-bookmark'}`} />
        {saved ? 'Saved' : 'Save Job'}
      </button>
      <button className="jdh-btn-share" type="button" id="jdh-share-btn" aria-label="Share job">
        <i className="bi bi-share" />
        Share
      </button>
    </div>
  </div>
);

export default JobDetailsHeader;
