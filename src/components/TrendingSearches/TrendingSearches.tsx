import React from 'react';
import { TrendingItem } from '../../utils/mockOpportunities';
import './TrendingSearches.css';

interface TrendingSearchesProps {
  items: TrendingItem[];
}

const TrendingSearches: React.FC<TrendingSearchesProps> = ({ items }) => {
  return (
    <div className="mp-trending-widget" id="mp-trending-widget" aria-label="Trending searches">
      <h3 className="mp-trending-title">Trending searches</h3>
      <ul className="mp-trending-list">
        {items.map((item, idx) => (
          <li className="mp-trending-item" key={idx}>
            <a href="#" className="mp-trending-link">
              {item.label}
            </a>
            <span className="mp-trending-pct">
              <i className="bi bi-arrow-up-short" />
              {item.percentage}%
            </span>
          </li>
        ))}
      </ul>
      <a href="#" className="mp-trending-see-all" id="mp-trending-see-all">
        See all trends
      </a>
    </div>
  );
};

export default TrendingSearches;
