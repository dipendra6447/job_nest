"use client";
import React from 'react';
import './ListingCTA.css';

const ListingCTA: React.FC = () => {
  return (
    <section className="listing-cta section-padding-sm" id="listing-cta" aria-label="Recruitment call to action">
      {/* Background shapes */}
      <div className="lcta-shape-1" aria-hidden="true" />
      <div className="lcta-shape-2" aria-hidden="true" />
      <div className="lcta-grid" aria-hidden="true" />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="lcta-inner">
          {/* Left Content */}
          <div className="lcta-content">
            <div className="lcta-badge">
              <i className="bi bi-rocket-takeoff me-2" />For Employers
            </div>
            <h2 className="lcta-heading">
              Looking to Hire<br />
              <span className="lcta-highlight">Top Talent?</span>
            </h2>
            <p className="lcta-subtext">
              Connect with 450,000+ qualified professionals across all industries.
              Post your job in minutes and start receiving applications from pre-screened candidates today.
            </p>

            {/* Feature list */}
            <ul className="lcta-features">
              {[
                { icon: 'bi-lightning-charge', text: 'Get applications within 24 hours' },
                { icon: 'bi-shield-check', text: 'Pre-verified & qualified candidates' },
                { icon: 'bi-graph-up-arrow', text: '3x better hiring success rate' },
                { icon: 'bi-headset', text: 'Dedicated recruiter support' },
              ].map((feature, i) => (
                <li key={i} className="lcta-feature-item">
                  <span className="lcta-feature-icon">
                    <i className={`bi ${feature.icon}`} />
                  </span>
                  {feature.text}
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="lcta-buttons d-flex flex-wrap gap-3">
              <a href="#" className="lcta-btn-primary" id="lcta-post-job-btn" aria-label="Post a job">
                <i className="bi bi-plus-circle me-2" />
                Post a Job
              </a>
              <a href="#" className="lcta-btn-outline" id="lcta-contact-sales-btn" aria-label="Contact sales team">
                <i className="bi bi-telephone me-2" />
                Contact Sales
              </a>
            </div>

            {/* Trust indicators */}
            <div className="lcta-trust">
              <span className="lcta-trust-item">
                <i className="bi bi-star-fill text-warning me-1" />
                4.9/5 employer rating
              </span>
              <span className="lcta-trust-sep">•</span>
              <span className="lcta-trust-item">2,300+ companies trust us</span>
            </div>
          </div>

          {/* Right: Stats Panel */}
          <div className="lcta-stats-panel">
            <div className="lcta-panel-header">
              <i className="bi bi-bar-chart-fill me-2" />Hiring Dashboard
            </div>
            <div className="lcta-stats-grid">
              {[
                { value: '12,480', label: 'Active Candidates', icon: 'bi-people', color: '#2454FF' },
                { value: '98%', label: 'Verified Profiles', icon: 'bi-patch-check', color: '#14B87A' },
                { value: '< 48h', label: 'Avg Response Time', icon: 'bi-lightning', color: '#F59E0B' },
                { value: '3.2x', label: 'Better Hire Rate', icon: 'bi-graph-up', color: '#7B3EFF' },
              ].map((stat, i) => (
                <div key={i} className="lcta-stat-card">
                  <div className="lcta-stat-icon" style={{ background: `${stat.color}15`, color: stat.color }}>
                    <i className={`bi ${stat.icon}`} />
                  </div>
                  <div>
                    <div className="lcta-stat-value" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="lcta-stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA mini note */}
            <div className="lcta-panel-note">
              <i className="bi bi-shield-fill-check me-2" />
              No credit card required. Free to post your first 3 jobs.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingCTA;
