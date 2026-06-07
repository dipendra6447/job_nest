import React, { useState } from 'react';
import './FilterBar.css';

interface FilterBarProps {
  onFilterDrawerOpen?: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterDrawerOpen }) => {
  const [category, setCategory] = useState('all');
  const [location, setLocation] = useState('dayton');
  const [distance, setDistance] = useState('25');
  const [sortBy, setSortBy] = useState('relevant');

  return (
    <div className="mp-filter-bar" id="mp-filter-bar" aria-label="Filters">
      {/* Category */}
      <div className="mp-filter-select-wrapper">
        <select
          className="mp-filter-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Category filter"
          id="mp-filter-category"
        >
          <option value="all">All Categories</option>
          <option value="jobs">Jobs</option>
          <option value="gigs">Gigs</option>
          <option value="businesses">Businesses</option>
          <option value="services">Services</option>
          <option value="events">Events</option>
        </select>
      </div>

      {/* Location */}
      <div className="mp-filter-select-wrapper">
        <span className="mp-filter-label">Location</span>
        <select
          className="mp-filter-select mp-filter-with-label"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          aria-label="Location filter"
          id="mp-filter-location"
        >
          <option value="dayton">Dayton, OH</option>
          <option value="columbus">Columbus, OH</option>
          <option value="cincinnati">Cincinnati, OH</option>
          <option value="cleveland">Cleveland, OH</option>
          <option value="remote">Remote</option>
        </select>
      </div>

      {/* Distance */}
      <div className="mp-filter-select-wrapper">
        <span className="mp-filter-label">Distance</span>
        <select
          className="mp-filter-select mp-filter-with-label"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          aria-label="Distance filter"
          id="mp-filter-distance"
        >
          <option value="5">5 miles</option>
          <option value="10">10 miles</option>
          <option value="25">25 miles</option>
          <option value="50">50 miles</option>
          <option value="100">100 miles</option>
        </select>
      </div>

      {/* Sort By */}
      <div className="mp-filter-select-wrapper mp-filter-sort">
        <span className="mp-filter-label">Sort by</span>
        <select
          className="mp-filter-select mp-filter-with-label"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          aria-label="Sort by"
          id="mp-filter-sort"
        >
          <option value="relevant">Most Relevant</option>
          <option value="newest">Newest</option>
          <option value="salary">Highest Salary</option>
          <option value="nearest">Nearest</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>

      {/* Advanced Filters Button */}
      <button
        className="mp-filter-advanced-btn"
        type="button"
        onClick={onFilterDrawerOpen}
        aria-label="Open advanced filters"
        id="mp-filter-advanced"
      >
        <i className="bi bi-funnel" />
        <span>Filters</span>
      </button>
    </div>
  );
};

export default FilterBar;
