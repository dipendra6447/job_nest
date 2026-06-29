"use client";
import React from "react";
import "./TopCompanies.css";

interface Company {
  id: number;
  name: string;
  icon: string;
  openings: string;
  accentColor: string;
  bgColor: string;
}

const companies: Company[] = [
  {
    id: 1,
    name: "Google",
    icon: "bi-google",
    openings: "1,240",
    accentColor: "#4285F4",
    bgColor: "#EBF3FF",
  },
  {
    id: 2,
    name: "Microsoft",
    icon: "bi-microsoft",
    openings: "980",
    accentColor: "#00A4EF",
    bgColor: "#E8F7FE",
  },
  {
    id: 3,
    name: "Apple",
    icon: "bi-apple",
    openings: "870",
    accentColor: "#333333",
    bgColor: "#F2F2F2",
  },
  {
    id: 4,
    name: "Amazon",
    icon: "bi-box-seam-fill",
    openings: "1,520",
    accentColor: "#FF9900",
    bgColor: "#FFF6E6",
  },
  {
    id: 5,
    name: "Meta",
    icon: "bi-meta",
    openings: "640",
    accentColor: "#1877F2",
    bgColor: "#E8F0FE",
  },
  {
    id: 6,
    name: "Netflix",
    icon: "bi-film",
    openings: "320",
    accentColor: "#E50914",
    bgColor: "#FDEAEB",
  },
  {
    id: 7,
    name: "Spotify",
    icon: "bi-spotify",
    openings: "410",
    accentColor: "#1DB954",
    bgColor: "#E8F9EF",
  },
  {
    id: 8,
    name: "Salesforce",
    icon: "bi-cloud-fill",
    openings: "720",
    accentColor: "#00A1E0",
    bgColor: "#E6F6FD",
  },
  {
    id: 9,
    name: "Adobe",
    icon: "bi-pentagon-fill",
    openings: "530",
    accentColor: "#FF0000",
    bgColor: "#FFE6E6",
  },
  {
    id: 10,
    name: "Uber",
    icon: "bi-car-front-fill",
    openings: "490",
    accentColor: "#000000",
    bgColor: "#F0F0F0",
  },
  {
    id: 11,
    name: "Airbnb",
    icon: "bi-house-heart-fill",
    openings: "380",
    accentColor: "#FF5A5F",
    bgColor: "#FFECEC",
  },
  {
    id: 12,
    name: "Twitter",
    icon: "bi-twitter-x",
    openings: "260",
    accentColor: "#1DA1F2",
    bgColor: "#E8F5FD",
  },
];

const TopCompanies: React.FC = () => {
  // Duplicate the list for seamless infinite scroll
  const marqueeItems = [...companies, ...companies];

  return (
    <section
      className="top-companies-section"
      id="top-companies"
      aria-label="Top companies hiring now"
    >
      <div className="container">
        {/* Section header */}
        <div className="tc-header">
          <div className="tc-header-left">
            <div className="tc-label">
              <i className="bi bi-building" aria-hidden="true" />
              <span>Hiring Now</span>
            </div>
            <h2 className="tc-title">
              Top Companies <span className="tc-title-accent">Hiring Now</span>
            </h2>
          </div>
          <div className="tc-header-right">
            <a href="#" className="tc-view-all" id="view-all-companies-hiring">
              View All Companies <i className="bi bi-arrow-right ms-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Marquee track — full width, overflows container */}
      <div className="tc-marquee-wrapper" aria-hidden="true">
        <div className="tc-marquee-track">
          {marqueeItems.map((company, idx) => (
            <a
              href="#"
              className="tc-company-card"
              key={`${company.id}-${idx}`}
              style={
                {
                  "--tc-accent": company.accentColor,
                  "--tc-bg": company.bgColor,
                } as React.CSSProperties
              }
            >
              <div className="tc-card-icon-wrap">
                <i className={`bi ${company.icon}`} />
              </div>
              <div className="tc-card-info">
                <span className="tc-card-name">{company.name}</span>
                <span className="tc-card-openings">
                  {company.openings} openings
                </span>
              </div>
              <i className="bi bi-arrow-up-right tc-card-arrow" />
            </a>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div className="container">
        <div className="tc-stats-strip">
          <div className="tc-stat">
            <span className="tc-stat-number">500+</span>
            <span className="tc-stat-label">Partner Companies</span>
          </div>
          <div className="tc-stat-divider" />
          <div className="tc-stat">
            <span className="tc-stat-number">12,000+</span>
            <span className="tc-stat-label">Active Job Openings</span>
          </div>
          <div className="tc-stat-divider" />
          <div className="tc-stat">
            <span className="tc-stat-number">95%</span>
            <span className="tc-stat-label">Hiring Success Rate</span>
          </div>
          <div className="tc-stat-divider" />
          <div className="tc-stat">
            <span className="tc-stat-number">48 Hrs</span>
            <span className="tc-stat-label">Avg. Response Time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;
