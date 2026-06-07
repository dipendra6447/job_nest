import React, { useState } from 'react';
import { Opportunity } from '../../utils/mockOpportunities';
import './OpportunityCard.css';

interface OpportunityCardProps {
  opportunity: Opportunity;
}

const ctaLabels: Record<string, string> = {
  job: 'View Details',
  gig: 'View Gig',
  business: 'View Profile',
  service: 'View Profile',
  event: 'View Event',
};

const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
  const [saved, setSaved] = useState(opportunity.saved ?? false);
  const o = opportunity;

  return (
    <article
      className="mp-opp-card"
      id={`opp-card-${o.id}`}
      aria-label={`${o.title} - ${o.subtitle}`}
    >
      {/* Thumbnail */}
      <div className="mp-opp-thumb" style={{ background: o.thumbnailGradient }}>
        {/* Badge */}
        {o.badge && (
          <span
            className="mp-opp-badge"
            style={{ background: o.badgeColor }}
          >
            {o.badge}
          </span>
        )}

        {/* Save Button */}
        <button
          className={`mp-opp-save ${saved ? 'mp-opp-saved' : ''}`}
          onClick={() => setSaved(!saved)}
          aria-label={saved ? `Unsave ${o.title}` : `Save ${o.title}`}
          type="button"
        >
          <i className={`bi ${saved ? 'bi-heart-fill' : 'bi-heart'}`} />
        </button>

        {/* Category Tag */}
        <span
          className="mp-opp-category-tag"
          style={{ background: o.categoryColor }}
        >
          {o.categoryLabel}
        </span>
      </div>

      {/* Content */}
      <div className="mp-opp-content">
        <h3 className="mp-opp-title">{o.title}</h3>
        <p className="mp-opp-subtitle">{o.subtitle}</p>

        {/* Location Row */}
        <div className="mp-opp-location">
          <span>
            {o.location}
            {o.distance && <> &bull; {o.distance}</>}
          </span>
        </div>

        {/* Type-specific info */}
        <div className="mp-opp-info">
          {o.type === 'job' && o.salary && (
            <span className="mp-opp-salary">{o.salary}</span>
          )}
          {(o.type === 'service' || o.type === 'business') && o.rating !== undefined && (
            <span className="mp-opp-rating">
              <i className="bi bi-star-fill" />
              {' '}{o.rating}
              {o.reviewCount !== undefined && <span className="mp-opp-reviews"> ({o.reviewCount})</span>}
            </span>
          )}
          {o.type === 'gig' && o.price && (
            <span className="mp-opp-price">{o.price}</span>
          )}
          {o.type === 'event' && (
            <span className="mp-opp-event-info">
              {o.eventDate}{o.eventTime && <> &bull; {o.eventTime}</>}
            </span>
          )}
        </div>

        {/* CTA */}
        <a
          href="#"
          className="mp-opp-cta"
          id={`opp-cta-${o.id}`}
          aria-label={`${ctaLabels[o.type]} for ${o.title}`}
        >
          {ctaLabels[o.type]}
        </a>
      </div>
    </article>
  );
};

export default OpportunityCard;
