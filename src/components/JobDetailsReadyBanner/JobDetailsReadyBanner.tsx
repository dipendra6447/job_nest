"use client";
import React from 'react';
import './JobDetailsReadyBanner.css';

interface Props {
  saved: boolean;
  onSave: () => void;
}

const JobDetailsReadyBanner: React.FC<Props> = ({ saved, onSave }) => (
  <section className="jdrb-banner" aria-labelledby="jdrb-heading">
    <div className="jdrb-left">
      <div className="jdrb-icon-wrap" aria-hidden="true">
        <i className="bi bi-file-earmark-check" />
        <div className="jdrb-check-badge">
          <i className="bi bi-check-lg" />
        </div>
      </div>
      <div className="jdrb-text">
        <h2 className="jdrb-heading" id="jdrb-heading">Ready to apply?</h2>
        <p className="jdrb-sub">Join 42 other applicants who have already shown interest.</p>
        <div className="jdrb-security">
          <i className="bi bi-shield-check" aria-hidden="true" />
          <span>Your information is secure and private.</span>
        </div>
      </div>
    </div>
    <div className="jdrb-actions">
      <a
        href="#apply"
        className="jdrb-btn-apply"
        id="jdrb-apply-btn"
        aria-label="Apply Now"
      >
        Apply Now
      </a>
      <button
        className={`jdrb-btn-save ${saved ? 'saved' : ''}`}
        onClick={onSave}
        type="button"
        id="jdrb-save-btn"
        aria-label={saved ? 'Unsave job' : 'Save job'}
      >
        <i className={`bi ${saved ? 'bi-bookmark-fill' : 'bi-bookmark'}`} />
        {saved ? 'Saved' : 'Save Job'}
      </button>
    </div>
  </section>
);

export default JobDetailsReadyBanner;
