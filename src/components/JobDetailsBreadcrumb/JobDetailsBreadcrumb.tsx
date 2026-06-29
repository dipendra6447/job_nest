"use client";
import React from 'react';
import './JobDetailsBreadcrumb.css';

const JobDetailsBreadcrumb: React.FC = () => (
  <nav className="jdb-breadcrumb" aria-label="Breadcrumb">
    <a href="/jobs" className="jdb-back-link" id="jdb-back-to-jobs">
      <i className="bi bi-chevron-left" />
      Back to Jobs
    </a>
    <ol className="jdb-crumb-list">
      <li><a href="/" className="jdb-crumb-link">Jobs</a></li>
      <li><i className="bi bi-chevron-right jdb-sep" /></li>
      <li><a href="/jobs" className="jdb-crumb-link">Marketing</a></li>
      <li><i className="bi bi-chevron-right jdb-sep" /></li>
      <li className="jdb-crumb-current" aria-current="page">Marketing Manager</li>
    </ol>
  </nav>
);

export default JobDetailsBreadcrumb;
