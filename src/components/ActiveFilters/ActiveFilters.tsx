import React from 'react';
import './ActiveFilters.css';
import { FilterState } from '../JobFilters/JobFilters';

interface ActiveFiltersProps {
  filters: FilterState;
  onRemove: (field: keyof FilterState, value: string) => void;
  onClearAll: () => void;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({ filters, onRemove, onClearAll }) => {
  const tags: { label: string; field: keyof FilterState; value: string }[] = [];

  filters.categories.forEach((v) => tags.push({ label: v, field: 'categories', value: v }));
  filters.jobTypes.forEach((v) => tags.push({ label: v, field: 'jobTypes', value: v }));
  filters.workModes.forEach((v) => tags.push({ label: v, field: 'workModes', value: v }));
  filters.experience.forEach((v) => tags.push({ label: v, field: 'experience', value: v }));
  filters.companySize.forEach((v) => tags.push({ label: `${v} employees`, field: 'companySize', value: v }));
  filters.skills.forEach((v) => tags.push({ label: v, field: 'skills', value: v }));
  if (filters.salaryRange) {
    const labels: Record<string, string> = {
      '0-3': '₹0–3 LPA', '3-6': '₹3–6 LPA', '6-10': '₹6–10 LPA',
      '10-20': '₹10–20 LPA', '20-40': '₹20–40 LPA', '40+': '₹40 LPA+',
    };
    tags.push({ label: labels[filters.salaryRange] || filters.salaryRange, field: 'salaryRange', value: filters.salaryRange });
  }
  if (filters.postedDate) {
    const labels: Record<string, string> = {
      '1': 'Last 24h', '3': 'Last 3 days', '7': 'Last 7 days',
      '14': 'Last 14 days', '30': 'Last 30 days',
    };
    tags.push({ label: labels[filters.postedDate] || `Last ${filters.postedDate} days`, field: 'postedDate', value: filters.postedDate });
  }

  if (tags.length === 0) return null;

  return (
    <div className="active-filters" role="region" aria-label="Active filters">
      <div className="af-inner">
        <span className="af-label">
          <i className="bi bi-funnel-fill me-2" />
          Active Filters:
        </span>
        <div className="af-tags">
          {tags.map((tag, i) => (
            <span key={`${tag.field}-${tag.value}-${i}`} className="af-tag">
              {tag.label}
              <button
                className="af-remove"
                onClick={() => onRemove(tag.field, tag.value)}
                aria-label={`Remove filter: ${tag.label}`}
                id={`af-remove-${tag.field}-${tag.value.replace(/\s+/g, '-').toLowerCase()}`}
                type="button"
              >
                <i className="bi bi-x" />
              </button>
            </span>
          ))}
        </div>
        <button
          className="af-clear-all"
          onClick={onClearAll}
          id="af-clear-all-btn"
          type="button"
          aria-label="Clear all active filters"
        >
          <i className="bi bi-x-circle me-1" />
          Clear All
        </button>
      </div>
    </div>
  );
};

export default ActiveFilters;
