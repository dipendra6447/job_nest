"use client";
import React from 'react';
import './JobResultsHeader.css';

type SortOption = 'relevance' | 'newest' | 'salary-high' | 'salary-low';
type ViewMode = 'grid' | 'list';

interface JobResultsHeaderProps {
  totalJobs: number;
  currentPage: number;
  perPage: number;
  sortBy: SortOption;
  viewMode: ViewMode;
  onSortChange: (sort: SortOption) => void;
  onViewChange: (view: ViewMode) => void;
  onMobileFilterOpen: () => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'relevance', label: 'Most Relevant' },
  { value: 'newest', label: 'Newest First' },
  { value: 'salary-high', label: 'Highest Salary' },
  { value: 'salary-low', label: 'Lowest Salary' },
];

const JobResultsHeader: React.FC<JobResultsHeaderProps> = ({
  totalJobs,
  currentPage,
  perPage,
  sortBy,
  viewMode,
  onSortChange,
  onViewChange,
  onMobileFilterOpen,
}) => {
  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, totalJobs);

  return (
    <div className="job-results-header" role="toolbar" aria-label="Job listing controls">
      {/* Left: count */}
      <div className="jrh-count">
        <p className="jrh-count-text">
          Showing <strong>{start}–{end}</strong> of{' '}
          <strong className="jrh-total">{totalJobs.toLocaleString()}</strong> Jobs
        </p>
      </div>

      {/* Right: controls */}
      <div className="jrh-controls">
        {/* Mobile filter button */}
        <button
          className="jrh-filter-btn d-lg-none"
          onClick={onMobileFilterOpen}
          id="mobile-filter-open-btn"
          type="button"
          aria-label="Open filters"
        >
          <i className="bi bi-sliders me-2" />
          Filters
        </button>

        {/* Sort dropdown */}
        <div className="jrh-sort">
          <label htmlFor="sort-select" className="jrh-sort-label">Sort by:</label>
          <select
            id="sort-select"
            className="jrh-sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            aria-label="Sort job listings"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* View toggle */}
        <div className="jrh-view-toggle" role="group" aria-label="View mode toggle">
          <button
            className={`jrh-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => onViewChange('grid')}
            id="view-grid-btn"
            aria-pressed={viewMode === 'grid'}
            aria-label="Grid view"
            type="button"
          >
            <i className="bi bi-grid-3x3-gap" />
          </button>
          <button
            className={`jrh-view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => onViewChange('list')}
            id="view-list-btn"
            aria-pressed={viewMode === 'list'}
            aria-label="List view"
            type="button"
          >
            <i className="bi bi-list-ul" />
          </button>
        </div>

        {/* Save search */}
        <button
          className="jrh-save-btn"
          id="save-search-btn"
          type="button"
          aria-label="Save current search"
        >
          <i className="bi bi-bookmark me-2" />
          Save Search
        </button>
      </div>
    </div>
  );
};

export type { SortOption, ViewMode };
export default JobResultsHeader;
