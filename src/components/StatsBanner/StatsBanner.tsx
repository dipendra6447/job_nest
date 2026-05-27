import React, { useEffect, useRef, useState } from 'react';
import './StatsBanner.css';

const stats = [
  { icon: 'bi-building', value: 85000, label: 'Hiring Companies', suffix: '+' },
  { icon: 'bi-people-fill', value: 2400000, label: 'Active Users', suffix: '+' },
  { icon: 'bi-bar-chart-fill', value: 98, label: 'Success Rate', suffix: '%' },
  { icon: 'bi-briefcase-fill', value: 120000, label: 'Open Jobs', suffix: '+' },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

const StatItem: React.FC<{ icon: string; value: number; label: string; suffix: string; started: boolean }> = ({
  icon, value, label, suffix, started,
}) => {
  const count = useCountUp(value, 2000, started);

  const formatNumber = (n: number) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
    if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
    return n.toString();
  };

  return (
    <div className="stat-item">
      <div className="stat-icon">
        <i className={`bi ${icon}`}></i>
      </div>
      <div className="stat-number">{formatNumber(count)}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const StatsBanner: React.FC = () => {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-banner section-padding-sm" id="stats" ref={ref} aria-label="Statistics">
      <div className="container">
        <div className="stats-card">
          <div className="stats-bg-glow"></div>
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <React.Fragment key={stat.label}>
                <StatItem {...stat} started={started} />
                {i < stats.length - 1 && <div className="stats-divider"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
