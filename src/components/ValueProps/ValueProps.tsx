import React from 'react';
import './ValueProps.css';

const props = [
  {
    icon: 'bi-bullseye',
    color: '#4F46E5',
    bg: '#EEF0FF',
    title: 'Personalized for you',
    desc: 'Get recommendations based on your interests and activity.',
  },
  {
    icon: 'bi-bookmark-check-fill',
    color: '#14B87A',
    bg: '#E8FFF5',
    title: 'Save & organize',
    desc: 'Save listings and organize them in one place.',
  },
  {
    icon: 'bi-bell-fill',
    color: '#F59E0B',
    bg: '#FFF8E6',
    title: 'Never miss out',
    desc: 'Turn on notifications for new opportunities.',
  },
];

const ValueProps: React.FC = () => {
  return (
    <section className="mp-value-props" aria-label="Platform features" id="mp-value-props">
      <div className="mp-vp-grid">
        {props.map((p, idx) => (
          <div className="mp-vp-item" key={idx}>
            <div className="mp-vp-icon" style={{ background: p.bg, color: p.color }}>
              <i className={`bi ${p.icon}`} />
            </div>
            <div className="mp-vp-text">
              <h4 className="mp-vp-title">{p.title}</h4>
              <p className="mp-vp-desc">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;
