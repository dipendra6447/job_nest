import React from 'react';
import './PromotionCards.css';
import jobSeekerImg from '../../assets/images/promo_job_seeker.png';
import businessImg from '../../assets/images/promo_business_grow.png';

const PromotionCards: React.FC = () => {
  return (
    <section
      className="promo-cards-section section-padding"
      id="promotions"
      aria-label="Promotion cards section"
    >
      <div className="container">
        <div className="promo-cards-grid">

          {/* ── CARD 1 — Find Your Better Job ── */}
          <article className="promo-card" id="promo-card-job-seeker" aria-label="Find your better job">

            {/* LEFT — Text content */}
            <div className="promo-card-content">
              <span className="promo-card-badge">
                <span className="promo-badge-dot" aria-hidden="true" />
                Guaranteed Results.
              </span>

              <h2 className="promo-card-heading">
                Find Your<br />
                Better <span className="promo-heading-accent">Job.</span>
              </h2>

              <p className="promo-card-subheading">
                Smart Tools. Targeted Search. Guaranteed Results.
              </p>

              <ul className="promo-card-bullets" aria-label="Job seeker features">
                <li>
                  <span className="bullet-dot" aria-hidden="true" />
                  Smart Tools. Targeted Search. Guaranteed Results.
                </li>
                <li>
                  <span className="bullet-dot" aria-hidden="true" />
                  Smart Tools. Targeted Search. Guaranteed Results.
                </li>
                <li>
                  <span className="bullet-dot" aria-hidden="true" />
                  Smart Tools. Targeted Search. Guaranteed Results.
                </li>
              </ul>

              <a
                href="#"
                className="promo-card-cta"
                id="promo-browse-jobs-btn"
                aria-label="Browse jobs for job seekers"
              >
                Browse Jobs
                <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
              </a>
            </div>

            {/* RIGHT — Image + floating window */}
            <div className="promo-card-image-wrap">
              <img
                src={jobSeekerImg}
                alt="Professional woman job seeker holding documents in modern office"
                className="promo-card-img"
                loading="lazy"
              />

              {/* Floating analytics window */}
              <div className="promo-float-window" aria-label="Job match statistics">
                <div className="pfw-row">
                  <div className="pfw-icon pfw-icon--blue" aria-hidden="true">
                    <i className="bi bi-bar-chart-fill" />
                  </div>
                  <div className="pfw-text">
                    <p className="pfw-title">Lorem ipsum</p>
                    <p className="pfw-sub">Lorem ipsum</p>
                  </div>
                </div>
                <div className="pfw-row">
                  <div className="pfw-icon pfw-icon--blue" aria-hidden="true">
                    <i className="bi bi-bar-chart-fill" />
                  </div>
                  <div className="pfw-text">
                    <p className="pfw-title">Lorem ipsum</p>
                    <p className="pfw-sub">Lorem ipsum</p>
                  </div>
                </div>
                <a href="#" className="pfw-link" id="pfw-view-all-1">
                  View all →
                </a>
              </div>
            </div>
          </article>

          {/* ── CARD 2 — Grow Your Business ── */}
          <article className="promo-card" id="promo-card-business" aria-label="Grow your business">

            {/* LEFT — Text content */}
            <div className="promo-card-content">
              <span className="promo-card-badge">
                <span className="promo-badge-dot" aria-hidden="true" />
                Guaranteed Results.
              </span>

              <h2 className="promo-card-heading">
                Grow your<br />
                <span className="promo-heading-accent">business</span>
              </h2>

              <p className="promo-card-subheading">
                Smart Tools. Targeted Search. Guaranteed Results.
              </p>

              <ul className="promo-card-bullets" aria-label="Business growth features">
                <li>
                  <span className="bullet-dot" aria-hidden="true" />
                  Smart Tools. Targeted Search. Guaranteed Results.
                </li>
                <li>
                  <span className="bullet-dot" aria-hidden="true" />
                  Smart Tools. Targeted Search. Guaranteed Results.
                </li>
                <li>
                  <span className="bullet-dot" aria-hidden="true" />
                  Smart Tools. Targeted Search. Guaranteed Results.
                </li>
              </ul>

              <a
                href="#"
                className="promo-card-cta"
                id="promo-browse-business-btn"
                aria-label="Browse employers for business growth"
              >
                Browse Jobs
                <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
              </a>
            </div>

            {/* RIGHT — Image + floating window */}
            <div className="promo-card-image-wrap">
              <img
                src={businessImg}
                alt="Two business professionals shaking hands in modern office"
                className="promo-card-img"
                loading="lazy"
              />

              {/* Floating analytics window */}
              <div className="promo-float-window" aria-label="Business hire statistics">
                <div className="pfw-row">
                  <div className="pfw-icon pfw-icon--blue" aria-hidden="true">
                    <i className="bi bi-bar-chart-fill" />
                  </div>
                  <div className="pfw-text">
                    <p className="pfw-title">Lorem ipsum</p>
                    <p className="pfw-sub">Lorem ipsum</p>
                  </div>
                </div>
                <div className="pfw-row">
                  <div className="pfw-icon pfw-icon--blue" aria-hidden="true">
                    <i className="bi bi-bar-chart-fill" />
                  </div>
                  <div className="pfw-text">
                    <p className="pfw-title">Lorem ipsum</p>
                    <p className="pfw-sub">Lorem ipsum</p>
                  </div>
                </div>
                <a href="#" className="pfw-link" id="pfw-view-all-2">
                  View all →
                </a>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default PromotionCards;
