"use client";
import React from 'react';
import './JoinCommunity.css';
import joinBg from '../../assets/images/hiring_banner_bg.png';
import { useAuth } from '../../hooks/useAuth';

const JoinCommunity: React.FC = () => {
  const { isLoggedIn, user, isLoading } = useAuth();

  // role: 1 = job_seeker, 2 = job_poster (employer), 3 = business_promoter
  const userRole = user?.roles[0];

  // Each button is shown to everyone EXCEPT the user who already has that role
  const showSeekerBtn   = !isLoggedIn || userRole !== 1;
  const showEmployerBtn = !isLoggedIn || userRole !== 2;
  const showPromoterBtn = !isLoggedIn || userRole !== 3;

  return (
    <section
      className="join-community-banner"
      id="join-community"
      aria-label="Join Community CTA Banner"
    >
      <img src={joinBg.src} alt="" className="join-bg-img" aria-hidden="true" loading="lazy" />
      <div className="join-overlay" aria-hidden="true" />
      <div className="join-accent-bar" aria-hidden="true" />

      <div className="join-inner container">
        {/* LEFT — dynamic text */}
        <div className="join-left">
          <h2 className="join-title">
            {isLoggedIn ? 'Explore More on JobNest!' : 'Join the JobNest Community!'}
          </h2>
          <p className="join-subtext">
            {isLoggedIn
              ? 'Browse jobs, hire top talent, or promote your business — all in one place.'
              : "Whether you're looking for your dream job, searching for top-tier talent, or wanting to promote your business, we've got you covered."}
          </p>
        </div>

        {/* RIGHT — CTAs */}
        {!isLoading && (
          <div className="join-right">
            <div className="join-cta-group">

              {/* Browse Jobs — always visible for everyone */}
              <a
                href="/jobs"
                className="join-btn-primary"
                style={{ justifyContent: 'center' }}
                id="join-browse-jobs-btn"
                aria-label="Browse Jobs"
              >
                Browse Jobs <i className="bi bi-search ms-2" aria-hidden="true" />
              </a>

              {/* The 2 non-current role buttons */}
              <div className="join-cta-row">
                {showSeekerBtn && (
                  <a href="/login?role=job_seeker" className="join-btn-outline" id="join-seeker-btn">
                    Find a Job <i className="bi bi-person ms-2" aria-hidden="true" />
                  </a>
                )}
                {showEmployerBtn && (
                  <a href="/login?role=job_poster" className="join-btn-outline" id="join-employer-btn">
                    Hire Talent <i className="bi bi-building ms-2" aria-hidden="true" />
                  </a>
                )}
                {showPromoterBtn && (
                  <a href="/login?role=business_promoter" className="join-btn-outline" id="join-promoter-btn">
                    Promote Business <i className="bi bi-megaphone ms-2" aria-hidden="true" />
                  </a>
                )}
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default JoinCommunity;
