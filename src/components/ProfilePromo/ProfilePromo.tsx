"use client";
import React from 'react';
import './ProfilePromo.css';

const ProfilePromo: React.FC = () => {
  return (
    <div className="mp-promo-widget" id="mp-promo-widget" aria-label="Complete your profile">
      <div className="mp-promo-icon-wrap">
        <i className="bi bi-person-badge" />
      </div>
      <h3 className="mp-promo-heading">Stand out. Get discovered.</h3>
      <p className="mp-promo-desc">
        Complete your profile and start getting matched with the right opportunities.
      </p>
      <a href="#" className="mp-promo-cta" id="mp-promo-complete-profile">
        Complete Profile
      </a>
      <div className="mp-promo-social-proof">
        <div className="mp-promo-avatars">
          <span className="mp-promo-av" style={{ background: '#4F46E5' }}>A</span>
          <span className="mp-promo-av" style={{ background: '#7B3EFF' }}>B</span>
          <span className="mp-promo-av" style={{ background: '#2454FF' }}>C</span>
          <span className="mp-promo-av" style={{ background: '#14B87A' }}>D</span>
        </div>
        <span className="mp-promo-members">Join 10K+ active members</span>
      </div>
    </div>
  );
};

export default ProfilePromo;
