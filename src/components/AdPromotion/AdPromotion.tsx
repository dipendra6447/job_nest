import React, { useState } from 'react';
import './AdPromotion.css';

interface AdPromotionProps {
  bannerVisible?: boolean;
  onBannerClose?: () => void;
}

const AdPromotion: React.FC<AdPromotionProps> = ({
  bannerVisible = true,
  onBannerClose,
}) => {
  const [floatingVisible, setFloatingVisible] = useState(true);

  return (
    <>
      {/* ── Sticky Top Banner ── */}
      {bannerVisible && (
        <div className="ad-top-banner" role="banner" aria-label="Promotion banner" id="ad-top-banner">
          <div className="ad-top-inner">
            <span className="ad-top-emoji">🎯</span>
            <p className="ad-top-text">
              <strong>Promote Your Business to 2.4 Lakh+</strong> Professionals on&nbsp;
              <span className="ad-top-brand">JobNest</span>
            </p>
            <div className="ad-top-actions">
              <a href="#" className="ad-tag-pill" id="ad-top-free-list">Free to List</a>
              <a href="#" className="ad-tag-pill ad-tag-outline" id="ad-top-any-industry">Any Industry</a>
              <a href="#" className="ad-top-cta-btn" id="ad-top-promote-now">
                Promote Now →
              </a>
            </div>
          </div>
          <button
            className="ad-close-btn"
            onClick={onBannerClose}
            aria-label="Close promotion banner"
            id="ad-top-close-btn"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
      )}

      {/* ── Floating Bottom-Right Popup ── */}
      {floatingVisible && (
        <div className="ad-float-popup" role="complementary" aria-label="Floating advertisement" id="ad-float-popup">
          <button
            className="ad-float-close"
            onClick={() => setFloatingVisible(false)}
            aria-label="Close floating ad"
            id="ad-float-close-btn"
          >
            <i className="bi bi-x-lg"></i>
          </button>

          {/* Thumbnail image area */}
          <div className="ad-float-img-wrap">
            <div className="ad-float-img-bg">
              <i className="bi bi-laptop ad-float-main-icon"></i>
              <div className="ad-float-badge">
                <i className="bi bi-stars me-1"></i> Online Courses
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="ad-float-body">
            <h4 className="ad-float-title">DataWise Academy</h4>
            <p className="ad-float-desc">
              Python, SQL &amp; ML for career switchers. 1,200+ students placed.
            </p>

            <div className="ad-float-meta">
              <span className="ad-float-trial">
                <i className="bi bi-lightning-charge-fill me-1"></i> 7-Day Free Trial
              </span>
            </div>

            <a href="#" className="ad-float-cta" id="ad-float-cta-btn">
              Start Learning Free
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default AdPromotion;
