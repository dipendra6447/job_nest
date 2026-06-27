"use client";
import React from 'react';
import './JobDetailsBody.css';

const responsibilities = [
  'Develop and implement comprehensive marketing strategies and campaigns.',
  'Manage digital channels including SEO, SEM, social media, email, and content.',
  'Analyze marketing data and metrics to measure performance and ROI.',
  'Collaborate with sales, product, and design teams.',
  'Manage budgets, vendors, and external partners.',
  'Stay up-to-date with industry trends and best practices.',
];

const requirements = [
  '3+ years of experience in marketing or related field.',
  "Bachelor's degree in Marketing, Business, or related field.",
  'Strong knowledge of digital marketing tools and analytics.',
  'Excellent communication and leadership skills.',
  'Experience with CRM and marketing automation tools is a plus.',
];

const niceToHave = [
  'Experience in B2B SaaS marketing.',
  'Google Analytics / GA4 certification.',
  'HubSpot or similar platform experience.',
];

const jobMeta = [
  { icon: 'bi-briefcase', label: 'Job Type', value: 'Full-time' },
  { icon: 'bi-bar-chart', label: 'Experience', value: '3 – 5 years' },
  { icon: 'bi-mortarboard', label: 'Education', value: "Bachelor's Degree" },
  { icon: 'bi-diagram-3', label: 'Department', value: 'Marketing' },
  { icon: 'bi-currency-dollar', label: 'Salary Range', value: '$60K – $80K / year' },
  { icon: 'bi-heart', label: 'Benefits', value: 'Health, Dental, 401k' },
  { icon: 'bi-geo-alt', label: 'Work Mode', value: 'On-site' },
  { icon: 'bi-pin-map', label: 'Location', value: 'Dayton, OH' },
];

const JobDetailsBody: React.FC = () => (
  <div className="jdb-body">
    {/* About the Role */}
    <section className="jdb-section" aria-labelledby="jdb-about">
      <h2 className="jdb-section-title" id="jdb-about">About the Role</h2>
      <p className="jdb-para">
        We're looking for a creative and data-driven <strong>Marketing Manager</strong> to lead our
        marketing initiatives and drive brand growth. You will develop and execute marketing
        strategies, manage campaigns, analyze performance, and collaborate with cross-functional
        teams to achieve business goals.
      </p>
    </section>

    {/* Key Responsibilities */}
    <section className="jdb-section" aria-labelledby="jdb-resp">
      <h3 className="jdb-section-sub" id="jdb-resp">Key Responsibilities</h3>
      <ul className="jdb-list jdb-list-check">
        {responsibilities.map((item, i) => (
          <li key={i} className="jdb-list-item">
            <span className="jdb-check-icon" aria-hidden="true">
              <i className="bi bi-check-circle-fill" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>

    {/* What We're Looking For */}
    <section className="jdb-section" aria-labelledby="jdb-looking">
      <h3 className="jdb-section-sub" id="jdb-looking">What We're Looking For</h3>
      <ul className="jdb-list jdb-list-dot">
        {requirements.map((item, i) => (
          <li key={i} className="jdb-list-item">
            <span className="jdb-dot-icon" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>

    {/* Nice to Have */}
    <section className="jdb-section" aria-labelledby="jdb-nice">
      <h3 className="jdb-section-sub" id="jdb-nice">Nice to Have</h3>
      <ul className="jdb-list jdb-list-dot">
        {niceToHave.map((item, i) => (
          <li key={i} className="jdb-list-item">
            <span className="jdb-dot-icon" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>

    {/* Job Summary Chips */}
    <section className="jdb-meta-grid" aria-label="Job summary">
      {jobMeta.map((m) => (
        <div className="jdb-meta-card" key={m.label}>
          <div className="jdb-meta-icon">
            <i className={`bi ${m.icon}`} aria-hidden="true" />
          </div>
          <div className="jdb-meta-text">
            <span className="jdb-meta-label">{m.label}</span>
            <span className="jdb-meta-value">{m.value}</span>
          </div>
        </div>
      ))}
    </section>

    {/* Security Note */}
    <div className="jdb-security-note" role="note">
      <div className="jdb-security-icon">
        <i className="bi bi-shield-check-fill" aria-hidden="true" />
      </div>
      <div>
        <p className="jdb-security-title">Your application is safe with us.</p>
        <p className="jdb-security-desc">
          We use advanced security to protect your data and keep your information private.
        </p>
      </div>
    </div>
  </div>
);

export default JobDetailsBody;
