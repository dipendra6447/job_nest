"use client";
import React from 'react';
import './MarketplaceHero.css';

const MarketplaceHero: React.FC = () => {
  return (
    <section className="mp-hero" aria-label="Marketplace hero" id="mp-hero">
      <div className="container">
        <h1 className="mp-hero-heading">Discover opportunities</h1>
        <p className="mp-hero-desc">
          Find jobs, gigs, businesses, services and events near you.
        </p>
      </div>
    </section>
  );
};

export default MarketplaceHero;
