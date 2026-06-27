"use client";
import React from 'react';
import './CategoryNav.css';

export type CategoryKey = 'all' | 'jobs' | 'gigs' | 'businesses' | 'services' | 'events';

interface CategoryItem {
  key: CategoryKey;
  label: string;
  icon: string;
}

const categories: CategoryItem[] = [
  { key: 'all', label: 'All', icon: 'bi-grid-3x3-gap-fill' },
  { key: 'jobs', label: 'Jobs', icon: 'bi-briefcase-fill' },
  { key: 'gigs', label: 'Gigs', icon: 'bi-lightning-fill' },
  { key: 'businesses', label: 'Businesses', icon: 'bi-building' },
  { key: 'services', label: 'Services', icon: 'bi-tools' },
  { key: 'events', label: 'Events', icon: 'bi-calendar-event-fill' },
];

interface CategoryNavProps {
  activeCategory: CategoryKey;
  onCategoryChange: (cat: CategoryKey) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <nav className="mp-category-nav" aria-label="Category navigation" id="mp-category-nav">
      <div className="mp-category-scroll">
        {categories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            className={`mp-category-pill ${activeCategory === cat.key ? 'mp-category-active' : ''}`}
            onClick={() => onCategoryChange(cat.key)}
            aria-pressed={activeCategory === cat.key}
            id={`mp-cat-${cat.key}`}
          >
            <i className={`bi ${cat.icon}`} aria-hidden="true" />
            <span>{cat.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;
