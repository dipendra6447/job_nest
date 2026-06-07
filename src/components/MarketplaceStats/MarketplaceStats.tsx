import React, { useState, useEffect, useRef } from 'react';
import { marketplaceStats } from '../../utils/mockOpportunities';
import './MarketplaceStats.css';

const MarketplaceStats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(marketplaceStats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [visible]);

  useEffect(() => {
    if (!visible) return;

    const duration = 1500;
    const frameRate = 60;
    const totalFrames = Math.round(duration / (1000 / frameRate));
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts(
        marketplaceStats.map((stat) => Math.round(stat.value * easeOut))
      );

      if (frame >= totalFrames) clearInterval(timer);
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [visible]);

  return (
    <section
      className="mp-stats-section"
      ref={sectionRef}
      aria-label="Platform statistics"
      id="mp-stats"
    >
      <div className="container">
        <div className="mp-stats-grid">
          {marketplaceStats.map((stat, idx) => (
            <div className="mp-stat-card" key={idx}>
              <div className="mp-stat-icon-wrap">
                <i className={`bi ${stat.icon}`} />
              </div>
              <div className="mp-stat-value">
                {counts[idx]}{stat.suffix}
              </div>
              <div className="mp-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplaceStats;
