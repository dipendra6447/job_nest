"use client";
import React, { useState } from 'react';
import './ListingHero.css';

const categories = [
  'All Categories',
  'Technology & IT',
  'Design & Creative',
  'Marketing & Sales',
  'Finance & Accounting',
  'Healthcare & Medical',
  'Engineering',
  'Education',
  'Customer Service',
  'Human Resources',
  'Legal & Compliance',
  'Operations',
];

interface ListingHeroProps {
  onSearch: (keyword: string, location: string, category: string) => void;
}

const ListingHero: React.FC<ListingHeroProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('All Categories');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword, location, category);
  };

  return (
    <section className="listing-hero" aria-label="Job search hero section">
      {/* Floating decorative shapes */}
      <div className="lh-shape lh-shape-1" aria-hidden="true" />
      <div className="lh-shape lh-shape-2" aria-hidden="true" />
      <div className="lh-shape lh-shape-3" aria-hidden="true" />
      <div className="lh-shape lh-shape-4" aria-hidden="true" />
      <div className="lh-grid-overlay" aria-hidden="true" />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="lh-breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/" id="breadcrumb-home" aria-label="Go to home page">
                <i className="bi bi-house-fill me-1" />Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Job Listings</li>
          </ol>
        </nav>

        {/* Heading */}
        <div className="lh-content text-center">
          <div className="section-label mb-4">
            <i className="bi bi-search me-2" />Explore Opportunities
          </div>
          <h1 className="lh-heading">
            Discover Your<br />
            <span className="gradient-text">Dream Career</span>
          </h1>
          <p className="lh-subtext">
            Browse thousands of verified opportunities from leading companies around the world.
            Your next chapter starts here.
          </p>

          {/* Stats row */}
          <div className="lh-stats d-flex justify-content-center flex-wrap gap-4 mb-5">
            <div className="lh-stat">
              <span className="lh-stat-number">12,480+</span>
              <span className="lh-stat-label">Active Jobs</span>
            </div>
            <div className="lh-stat-divider" />
            <div className="lh-stat">
              <span className="lh-stat-number">2,300+</span>
              <span className="lh-stat-label">Companies</span>
            </div>
            <div className="lh-stat-divider" />
            <div className="lh-stat">
              <span className="lh-stat-number">98%</span>
              <span className="lh-stat-label">Verified Listings</span>
            </div>
          </div>

          {/* Search Panel */}
          <div className="lh-search-panel">
            <form onSubmit={handleSubmit} id="listing-hero-search-form" aria-label="Job search form">
              <div className="lh-search-fields">
                {/* Keyword */}
                <div className="lh-field">
                  <label htmlFor="lh-keyword" className="lh-field-label">
                    <i className="bi bi-search" />What
                  </label>
                  <input
                    id="lh-keyword"
                    type="text"
                    className="lh-input"
                    placeholder="Job title, keyword, or company"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    aria-label="Search by job title or keyword"
                  />
                </div>

                <div className="lh-field-divider" aria-hidden="true" />

                {/* Location */}
                <div className="lh-field">
                  <label htmlFor="lh-location" className="lh-field-label">
                    <i className="bi bi-geo-alt" />Where
                  </label>
                  <input
                    id="lh-location"
                    type="text"
                    className="lh-input"
                    placeholder="City, state, or remote"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    aria-label="Search by location"
                  />
                </div>

                <div className="lh-field-divider" aria-hidden="true" />

                {/* Category */}
                <div className="lh-field">
                  <label htmlFor="lh-category" className="lh-field-label">
                    <i className="bi bi-grid" />Category
                  </label>
                  <select
                    id="lh-category"
                    className="lh-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    aria-label="Select job category"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="lh-search-btn"
                  id="listing-hero-search-btn"
                  aria-label="Search for jobs"
                >
                  <i className="bi bi-search me-2" />
                  Search Jobs
                </button>
              </div>
            </form>

            {/* Popular searches */}
            <div className="lh-popular">
              <span className="lh-popular-label">Popular:</span>
              {['React Developer', 'UI/UX Designer', 'Product Manager', 'Remote', 'Full Stack'].map((tag) => (
                <button
                  key={tag}
                  className="lh-popular-tag"
                  onClick={() => setKeyword(tag)}
                  id={`popular-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  type="button"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingHero;
