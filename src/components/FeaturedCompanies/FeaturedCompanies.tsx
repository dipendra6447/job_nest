"use client";
import React from 'react';
import './FeaturedCompanies.css';

interface Company {
  id: number;
  name: string;
  industry: string;
  openPositions: number;
  initials: string;
  color: string;
  bgColor: string;
  rating: number;
  size: string;
}

const companies: Company[] = [
  { id: 1, name: 'Google', industry: 'Technology', openPositions: 342, initials: 'G', color: '#4285F4', bgColor: 'rgba(66,133,244,0.1)', rating: 4.8, size: '100k+' },
  { id: 2, name: 'Microsoft', industry: 'Technology', openPositions: 287, initials: 'M', color: '#00A4EF', bgColor: 'rgba(0,164,239,0.1)', rating: 4.7, size: '100k+' },
  { id: 3, name: 'Amazon', industry: 'E-commerce & Cloud', openPositions: 521, initials: 'A', color: '#FF9900', bgColor: 'rgba(255,153,0,0.1)', rating: 4.3, size: '100k+' },
  { id: 4, name: 'Adobe', industry: 'Creative Software', openPositions: 143, initials: 'Ae', color: '#FF0000', bgColor: 'rgba(255,0,0,0.1)', rating: 4.6, size: '25k+' },
  { id: 5, name: 'Netflix', industry: 'Entertainment', openPositions: 89, initials: 'N', color: '#E50914', bgColor: 'rgba(229,9,20,0.1)', rating: 4.5, size: '10k+' },
  { id: 6, name: 'Spotify', industry: 'Music Technology', openPositions: 112, initials: 'S', color: '#1DB954', bgColor: 'rgba(29,185,84,0.1)', rating: 4.6, size: '10k+' },
  { id: 7, name: 'Stripe', industry: 'FinTech', openPositions: 67, initials: 'St', color: '#7B3EFF', bgColor: 'rgba(123,62,255,0.1)', rating: 4.9, size: '5k+' },
  { id: 8, name: 'Figma', industry: 'Design Tools', openPositions: 45, initials: 'F', color: '#F24E1E', bgColor: 'rgba(242,78,30,0.1)', rating: 4.8, size: '1k+' },
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <i
      key={i}
      className={`bi ${i < Math.floor(rating) ? 'bi-star-fill' : i < rating ? 'bi-star-half' : 'bi-star'}`}
    />
  ));
};

const FeaturedCompanies: React.FC = () => {
  return (
    <section className="featured-companies section-padding-sm" id="featured-companies" aria-label="Featured companies">
      <div className="container">
        {/* Section Header */}
        <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-5">
          <div>
            <div className="section-label">
              <i className="bi bi-building-check me-2" />Top Employers
            </div>
            <h2 className="section-heading mb-2">
              Featured <span className="gradient-text">Companies Hiring</span>
            </h2>
            <p className="section-subtext" style={{ margin: 0 }}>
              Explore opportunities at the world's most innovative companies
            </p>
          </div>
          <a href="#" className="btn-outline-custom" id="view-all-companies-btn" aria-label="View all companies">
            All Companies <i className="bi bi-arrow-right ms-2" />
          </a>
        </div>

        {/* Company Grid */}
        <div className="fc-grid">
          {companies.map((company) => (
            <a
              key={company.id}
              href="#"
              className="fc-card"
              id={`company-card-${company.id}`}
              aria-label={`${company.name} - ${company.openPositions} open positions`}
            >
              {/* Logo */}
              <div
                className="fc-logo"
                style={{ background: company.bgColor, borderColor: `${company.color}30` }}
              >
                <span style={{ color: company.color }}>{company.initials}</span>
              </div>

              {/* Info */}
              <div className="fc-info">
                <h3 className="fc-name">{company.name}</h3>
                <p className="fc-industry">{company.industry}</p>

                {/* Rating */}
                <div className="fc-rating">
                  <span className="fc-stars" style={{ color: '#F59E0B' }}>
                    {renderStars(company.rating)}
                  </span>
                  <span className="fc-rating-num">{company.rating}</span>
                </div>

                <div className="fc-meta">
                  <span className="fc-size">
                    <i className="bi bi-people me-1" />{company.size} employees
                  </span>
                </div>
              </div>

              {/* Jobs badge */}
              <div className="fc-jobs-badge">
                <span className="fc-jobs-count">{company.openPositions}</span>
                <span className="fc-jobs-label">Open Jobs</span>
              </div>

              {/* Hover arrow */}
              <div className="fc-arrow">
                <i className="bi bi-arrow-right" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
