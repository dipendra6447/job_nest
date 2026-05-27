import React, { useState } from 'react';
import './SearchBar.css';

const categories = [
  'All Categories',
  'Technology',
  'Design & Creative',
  'Marketing',
  'Finance',
  'Healthcare',
  'Education',
  'Engineering',
  'Sales',
];

const SearchBar: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('All Categories');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search logic placeholder
    console.log({ keyword, location, category });
  };

  return (
    <section className="search-bar-section" id="search" aria-label="Job search">
      <div className="container">
        <div className="search-card">
          <div className="search-card-header">
            <div className="search-header-text">
              <h2 className="search-title">Find Your <span>Dream Job</span> Today</h2>
              <p className="search-subtitle">Search from 120,000+ premium opportunities</p>
            </div>
            <div className="search-quick-tags d-flex flex-wrap gap-2 d-none d-md-flex">
              {['Remote', 'Full-time', 'Tech', 'Design'].map(tag => (
                <button key={tag} className="quick-tag" id={`quick-tag-${tag.toLowerCase()}`}>
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSearch} className="search-form" role="search">
            <div className="search-fields">
              {/* Keyword */}
              <div className="search-field">
                <div className="search-field-icon">
                  <i className="bi bi-search"></i>
                </div>
                <div className="search-field-content">
                  <label className="search-field-label">Job Title or Keyword</label>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="e.g. UX Designer, React Developer..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    aria-label="Job title or keyword"
                    id="search-keyword"
                  />
                </div>
              </div>

              <div className="search-divider"></div>

              {/* Location */}
              <div className="search-field">
                <div className="search-field-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="search-field-content">
                  <label className="search-field-label">Location</label>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="City, state, or remote..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    aria-label="Location"
                    id="search-location"
                  />
                </div>
              </div>

              <div className="search-divider"></div>

              {/* Category */}
              <div className="search-field">
                <div className="search-field-icon">
                  <i className="bi bi-grid"></i>
                </div>
                <div className="search-field-content">
                  <label className="search-field-label">Category</label>
                  <select
                    className="search-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    aria-label="Job category"
                    id="search-category"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button type="submit" className="search-btn" id="search-submit-btn">
                <i className="bi bi-search"></i>
                <span>Search</span>
              </button>
            </div>
          </form>

          <div className="search-footer">
            <span>Popular:</span>
            {['UI Designer', 'React Developer', 'Product Manager', 'Data Scientist'].map(term => (
              <button key={term} className="popular-tag" id={`popular-${term.toLowerCase().replace(' ', '-')}`}>
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
