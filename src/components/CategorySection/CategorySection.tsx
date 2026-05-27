import React from 'react';
import './CategorySection.css';

const categories = [
  { icon: 'bi-laptop', label: 'Technology', count: '18,420', color: '#2454FF' },
  { icon: 'bi-brush', label: 'Design & Creative', count: '6,280', color: '#7B3EFF' },
  { icon: 'bi-megaphone', label: 'Marketing', count: '9,150', color: '#F59E0B' },
  { icon: 'bi-graph-up-arrow', label: 'Finance', count: '7,330', color: '#14B87A' },
  { icon: 'bi-heart-pulse', label: 'Healthcare', count: '12,640', color: '#EF4444' },
  { icon: 'bi-book', label: 'Education', count: '5,870', color: '#8B5CF6' },
  { icon: 'bi-gear', label: 'Engineering', count: '10,920', color: '#06B6D4' },
  { icon: 'bi-people', label: 'Human Resources', count: '4,440', color: '#F97316' },
  { icon: 'bi-bag', label: 'Sales', count: '8,720', color: '#EC4899' },
  { icon: 'bi-shield-check', label: 'Legal', count: '3,210', color: '#6366F1' },
  { icon: 'bi-truck', label: 'Logistics', count: '4,990', color: '#0EA5E9' },
  { icon: 'bi-building', label: 'Real Estate', count: '2,890', color: '#84CC16' },
];

const CategorySection: React.FC = () => {
  return (
    <section className="category-section section-padding" id="categories" aria-label="Career categories">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="section-label mx-auto">
            <i className="bi bi-grid-1x2"></i> Explore Careers
          </div>
          <h2 className="section-heading">
            Browse by <span className="gradient-text">Job Category</span>
          </h2>
          <p className="section-subtext">
            Explore thousands of opportunities across top industries and find the perfect role for your skills.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <a
              href="#"
              className="category-card"
              key={cat.label}
              id={`category-card-${index}`}
              aria-label={`Browse ${cat.label} jobs`}
              style={{ '--cat-color': cat.color } as React.CSSProperties}
            >
              <div className="category-icon-wrap">
                <i className={`bi ${cat.icon}`}></i>
              </div>
              <h3 className="category-label">{cat.label}</h3>
              <p className="category-count">{cat.count} Jobs</p>
              <div className="category-arrow">
                <i className="bi bi-arrow-right"></i>
              </div>
            </a>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-5">
          <a href="#" className="btn-outline-custom" id="view-all-categories-btn">
            View All Categories <i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
