"use client";
import React, { useState } from 'react';
import './RefineSearch.css';

const RefineSearch: React.FC = () => {
  const [keywords, setKeywords] = useState('marketing manager');
  const [location, setLocation] = useState('Dayton, OH');
  const [distance, setDistance] = useState(25);
  const [jobTypes, setJobTypes] = useState<string[]>(['Full-time']);
  const [expLevels, setExpLevels] = useState<string[]>(['Senior Level']);
  const [salary, setSalary] = useState('any');

  const toggleJobType = (t: string) => {
    setJobTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  const toggleExpLevel = (l: string) => {
    setExpLevels((prev) =>
      prev.includes(l) ? prev.filter((x) => x !== l) : [...prev, l]
    );
  };

  const jobTypeOptions = [
    { label: 'Full-time', count: 128 },
    { label: 'Part-time', count: 42 },
    { label: 'Contract', count: 38 },
    { label: 'Internship', count: 12 },
  ];

  const expOptions = [
    { label: 'Entry Level' },
    { label: 'Senior Level' },
    { label: 'Mid Level' },
    { label: 'Executive' },
  ];

  const distanceMarks = [5, 15, 25, 50, 100];

  return (
    <div className="rs-panel" id="rs-refine-panel" aria-label="Refine your search">
      <div className="rs-header">
        <h3 className="rs-title">Refine your search</h3>
        <button
          className="rs-clear-all"
          type="button"
          onClick={() => {
            setKeywords('');
            setLocation('');
            setJobTypes([]);
            setExpLevels([]);
            setSalary('any');
            setDistance(25);
          }}
        >
          Clear all
        </button>
      </div>

      {/* Keywords */}
      <div className="rs-field">
        <label className="rs-label" htmlFor="rs-keywords">Keywords</label>
        <div className="rs-input-wrap">
          <input
            type="text"
            className="rs-input"
            id="rs-keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Enter keywords"
          />
          {keywords && (
            <button
              className="rs-input-clear"
              type="button"
              onClick={() => setKeywords('')}
              aria-label="Clear keywords"
            >
              <i className="bi bi-x" />
            </button>
          )}
        </div>
      </div>

      {/* Location */}
      <div className="rs-field">
        <label className="rs-label" htmlFor="rs-location">Location</label>
        <div className="rs-input-wrap">
          <input
            type="text"
            className="rs-input"
            id="rs-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
          />
          {location && (
            <button
              className="rs-input-clear"
              type="button"
              onClick={() => setLocation('')}
              aria-label="Clear location"
            >
              <i className="bi bi-x" />
            </button>
          )}
        </div>
      </div>

      {/* Distance */}
      <div className="rs-field">
        <div className="rs-label-row">
          <label className="rs-label" htmlFor="rs-distance">Distance</label>
          <span className="rs-label-value">{distance} miles</span>
        </div>
        <input
          type="range"
          className="rs-range"
          id="rs-distance"
          min={5}
          max={100}
          step={1}
          value={distance}
          onChange={(e) => setDistance(Number(e.target.value))}
        />
        <div className="rs-range-marks">
          {distanceMarks.map((m) => (
            <span key={m} className="rs-range-mark">{m} mi</span>
          ))}
        </div>
      </div>

      {/* Job Type */}
      <div className="rs-field">
        <label className="rs-label">Job Type</label>
        <div className="rs-checkbox-group">
          {jobTypeOptions.map((opt) => (
            <label key={opt.label} className="rs-checkbox-item">
              <input
                type="checkbox"
                className="rs-checkbox"
                checked={jobTypes.includes(opt.label)}
                onChange={() => toggleJobType(opt.label)}
              />
              <span className="rs-checkbox-custom" />
              <span className="rs-checkbox-label">{opt.label}</span>
              <span className="rs-checkbox-count">({opt.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Experience Level */}
      <div className="rs-field">
        <label className="rs-label">Experience Level</label>
        <div className="rs-checkbox-group rs-checkbox-grid">
          {expOptions.map((opt) => (
            <label key={opt.label} className="rs-checkbox-item">
              <input
                type="checkbox"
                className="rs-checkbox"
                checked={expLevels.includes(opt.label)}
                onChange={() => toggleExpLevel(opt.label)}
              />
              <span className="rs-checkbox-custom" />
              <span className="rs-checkbox-label">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Salary Range */}
      <div className="rs-field">
        <label className="rs-label" htmlFor="rs-salary">Salary Range</label>
        <select
          className="rs-select"
          id="rs-salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        >
          <option value="any">Any Salary</option>
          <option value="30">$30K+</option>
          <option value="50">$50K+</option>
          <option value="75">$75K+</option>
          <option value="100">$100K+</option>
          <option value="150">$150K+</option>
        </select>
      </div>

      {/* Actions */}
      <div className="rs-actions">
        <button className="rs-apply-btn" type="button" id="rs-apply-filters">
          Apply Filters
        </button>
        <button
          className="rs-reset-btn"
          type="button"
          onClick={() => {
            setKeywords('');
            setLocation('');
            setJobTypes([]);
            setExpLevels([]);
            setSalary('any');
            setDistance(25);
          }}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default RefineSearch;
