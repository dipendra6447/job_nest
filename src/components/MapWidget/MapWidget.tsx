"use client";
import React from 'react';
import './MapWidget.css';

const MapWidget: React.FC = () => {
  return (
    <div className="mp-map-widget" id="mp-map-widget" aria-label="Explore by map">
      <div className="mp-map-header">
        <h3 className="mp-map-title">Explore by map</h3>
        <a href="#" className="mp-map-link" id="mp-map-view-full">View full map</a>
      </div>
      <div className="mp-map-container">
        {/* CSS-based decorative map */}
        <div className="mp-map-canvas">
          {/* Roads */}
          <div className="mp-map-road mp-road-h1" />
          <div className="mp-map-road mp-road-h2" />
          <div className="mp-map-road mp-road-h3" />
          <div className="mp-map-road mp-road-v1" />
          <div className="mp-map-road mp-road-v2" />
          <div className="mp-map-road mp-road-v3" />
          <div className="mp-map-road mp-road-d1" />

          {/* Water body */}
          <div className="mp-map-water" />

          {/* Green areas */}
          <div className="mp-map-park mp-park-1" />
          <div className="mp-map-park mp-park-2" />

          {/* Pins */}
          <div className="mp-map-pin mp-pin-job mp-pin-1" title="Job">
            <i className="bi bi-briefcase-fill" />
          </div>
          <div className="mp-map-pin mp-pin-gig mp-pin-2" title="Gig">
            <i className="bi bi-lightning-fill" />
          </div>
          <div className="mp-map-pin mp-pin-business mp-pin-3" title="Business">
            <i className="bi bi-building" />
          </div>
          <div className="mp-map-pin mp-pin-event mp-pin-4" title="Event">
            <i className="bi bi-calendar-event-fill" />
          </div>
          <div className="mp-map-pin mp-pin-service mp-pin-5" title="Service">
            <i className="bi bi-tools" />
          </div>
          <div className="mp-map-pin mp-pin-job mp-pin-6" title="Job">
            <i className="bi bi-briefcase-fill" />
          </div>
        </div>

        {/* Search this area button */}
        <button className="mp-map-search-area" type="button" id="mp-map-search-area">
          Search this area
        </button>
      </div>
    </div>
  );
};

export default MapWidget;
