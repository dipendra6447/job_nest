import React from 'react';
import './SpecialPromotions.css';
import laptopImg from '../../assets/images/laptop_promo.png';

interface PromoItem {
  id: number;
  heading: string;
  subtext: string;
  description: string;
  validity: string;
  gradientClass: string;
}

const promos: PromoItem[] = [
  {
    id: 1,
    heading: 'Find 25% off',
    subtext: 'Guaranteed Results.',
    description: 'Results',
    validity: 'valid till may 17',
    gradientClass: 'sp-grad--blue',
  },
  {
    id: 2,
    heading: 'Find 25% off',
    subtext: 'Guaranteed Results.',
    description: 'Results',
    validity: 'valid till may 17',
    gradientClass: 'sp-grad--pink',
  },
  {
    id: 3,
    heading: 'Find 25% off',
    subtext: 'Guaranteed Results.',
    description: 'Results',
    validity: 'valid till may 17',
    gradientClass: 'sp-grad--dark',
  },
  {
    id: 4,
    heading: 'Find 25% off',
    subtext: 'Guaranteed Results.',
    description: 'Results',
    validity: 'valid till may 17',
    gradientClass: 'sp-grad--lavender',
  },
  {
    id: 5,
    heading: 'Find 25% off',
    subtext: 'Guaranteed Results.',
    description: 'Results',
    validity: 'valid till may 17',
    gradientClass: 'sp-grad--teal',
  },
];

const SpecialPromotions: React.FC = () => {
  return (
    <section
      className="sp-section"
      id="special-promotions"
      aria-label="Special promotions"
    >
      <div className="container">
        {/* Section header row */}
        <div className="sp-header-row">
          <h2 className="sp-section-title">Special Promotions</h2>
          <a href="#" className="sp-view-all" id="sp-view-all-link">
            View All Categories <i className="bi bi-arrow-right ms-1" aria-hidden="true" />
          </a>
        </div>

        {/* Scrollable card track */}
        <div className="sp-track-wrapper" role="list" aria-label="Special promotion cards">
          <div className="sp-track">
            {promos.map((promo) => (
              <article
                key={promo.id}
                className={`sp-card ${promo.gradientClass}`}
                id={`sp-card-${promo.id}`}
                role="listitem"
                aria-label={`${promo.heading} promotion`}
              >
                {/* LEFT — text */}
                <div className="sp-card-text">
                  <h3 className="sp-card-heading">{promo.heading}</h3>
                  <p className="sp-card-subtext">{promo.subtext}</p>
                  <p className="sp-card-desc">{promo.description}</p>
                  <p className="sp-card-validity">{promo.validity}</p>
                </div>

                {/* RIGHT — laptop image */}
                <div className="sp-card-image" aria-hidden="true">
                  <img
                    src={laptopImg}
                    alt="Laptop illustration"
                    className="sp-laptop-img"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </article>
            ))}
          </div>

          {/* Scroll arrow hint */}
          <button
            className="sp-scroll-arrow"
            aria-label="Scroll promotions right"
            id="sp-scroll-btn"
            onClick={() => {
              const track = document.querySelector('.sp-track') as HTMLElement;
              if (track) track.scrollBy({ left: 320, behavior: 'smooth' });
            }}
          >
            <i className="bi bi-chevron-right" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialPromotions;
