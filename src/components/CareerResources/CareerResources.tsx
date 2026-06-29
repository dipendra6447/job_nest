"use client";
import React from 'react';
import './CareerResources.css';

interface Resource {
  id: number;
  icon: string;
  iconBg: string;
  iconColor: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  tag: string;
  tagColor: string;
  tagBg: string;
}

const resources: Resource[] = [
  {
    id: 1,
    icon: 'bi-file-earmark-person',
    iconBg: 'rgba(36,84,255,0.1)',
    iconColor: '#2454FF',
    category: 'Resume Tips',
    title: 'Resume Building Tips That Get You Hired in 2024',
    excerpt: 'Craft a compelling resume that stands out with modern formatting, powerful action verbs, and quantified achievements that impress ATS systems.',
    readTime: '5 min read',
    date: 'May 28, 2024',
    tag: 'Must Read',
    tagColor: '#2454FF',
    tagBg: 'rgba(36,84,255,0.1)',
  },
  {
    id: 2,
    icon: 'bi-chat-dots',
    iconBg: 'rgba(123,62,255,0.1)',
    iconColor: '#7B3EFF',
    category: 'Interview Prep',
    title: 'Master Your Next Interview with These Proven Strategies',
    excerpt: 'From behavioral questions to technical challenges — learn how to prepare, present confidently, and handle curveball questions with ease.',
    readTime: '7 min read',
    date: 'May 22, 2024',
    tag: 'Popular',
    tagColor: '#7B3EFF',
    tagBg: 'rgba(123,62,255,0.1)',
  },
  {
    id: 3,
    icon: 'bi-currency-rupee',
    iconBg: 'rgba(20,184,122,0.1)',
    iconColor: '#14B87A',
    category: 'Salary Guide',
    title: 'How to Negotiate a 20–30% Higher Salary Offer',
    excerpt: 'Salary negotiation scripts, timing strategies, and psychology-backed techniques to confidently negotiate the compensation package you deserve.',
    readTime: '6 min read',
    date: 'May 18, 2024',
    tag: 'High Value',
    tagColor: '#14B87A',
    tagBg: 'rgba(20,184,122,0.1)',
  },
  {
    id: 4,
    icon: 'bi-house-heart',
    iconBg: 'rgba(245,158,11,0.1)',
    iconColor: '#F59E0B',
    category: 'Remote Work',
    title: 'Remote Work Success: Productivity Habits for 2024',
    excerpt: 'Build a high-performance remote work setup, master async communication, and maintain work-life balance in the era of distributed teams.',
    readTime: '8 min read',
    date: 'May 14, 2024',
    tag: 'Trending',
    tagColor: '#F59E0B',
    tagBg: 'rgba(245,158,11,0.1)',
  },
];

const CareerResources: React.FC = () => {
  return (
    <section className="career-resources section-padding-sm" id="career-resources" aria-label="Career resources and guides">
      <div className="container">
        {/* Section Header */}
        <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-5">
          <div>
            <div className="section-label">
              <i className="bi bi-lightbulb me-2" />Career Growth
            </div>
            <h2 className="section-heading mb-2">
              Career <span className="gradient-text">Resources & Guides</span>
            </h2>
            <p className="section-subtext" style={{ margin: 0 }}>
              Expert insights to accelerate your career journey
            </p>
          </div>
          <a href="#" className="btn-outline-custom" id="view-all-resources-btn" aria-label="View all career resources">
            All Resources <i className="bi bi-arrow-right ms-2" />
          </a>
        </div>

        {/* Resource Cards */}
        <div className="cr-grid">
          {resources.map((resource) => (
            <article
              key={resource.id}
              className="cr-card"
              id={`resource-card-${resource.id}`}
              aria-label={resource.title}
            >
              {/* Icon */}
              <div className="cr-icon-wrap" style={{ background: resource.iconBg }}>
                <i className={`bi ${resource.icon} cr-icon`} style={{ color: resource.iconColor }} />
              </div>

              {/* Tag */}
              <div className="cr-top-row">
                <span
                  className="cr-tag"
                  style={{ color: resource.tagColor, background: resource.tagBg }}
                >
                  {resource.tag}
                </span>
                <span className="cr-category">{resource.category}</span>
              </div>

              {/* Content */}
              <h3 className="cr-title">{resource.title}</h3>
              <p className="cr-excerpt">{resource.excerpt}</p>

              {/* Footer */}
              <div className="cr-footer">
                <span className="cr-date">
                  <i className="bi bi-calendar3 me-1" />{resource.date}
                </span>
                <span className="cr-read-time">
                  <i className="bi bi-clock me-1" />{resource.readTime}
                </span>
                <a
                  href="#"
                  className="cr-read-btn"
                  id={`resource-read-${resource.id}`}
                  aria-label={`Read: ${resource.title}`}
                >
                  Read <i className="bi bi-arrow-right ms-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerResources;
