"use client";
import React, { useState } from 'react';
import './MobileBottomNav.css';

interface NavItem {
  key: string;
  label: string;
  icon: string;
  iconActive: string;
  badge?: number;
}

const navItems: NavItem[] = [
  { key: 'home', label: 'Home', icon: 'bi-house', iconActive: 'bi-house-fill' },
  { key: 'search', label: 'Search', icon: 'bi-search', iconActive: 'bi-search' },
  { key: 'saved', label: 'Saved', icon: 'bi-bookmark', iconActive: 'bi-bookmark-fill' },
  { key: 'notifications', label: 'Alerts', icon: 'bi-bell', iconActive: 'bi-bell-fill', badge: 3 },
  { key: 'profile', label: 'Profile', icon: 'bi-person', iconActive: 'bi-person-fill' },
];

const MobileBottomNav: React.FC = () => {
  const [active, setActive] = useState('home');

  return (
    <nav className="mp-bottom-nav" aria-label="Mobile navigation" id="mp-bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.key}
          className={`mp-bn-item ${active === item.key ? 'mp-bn-active' : ''}`}
          onClick={() => setActive(item.key)}
          aria-label={item.label}
          type="button"
          id={`mp-bn-${item.key}`}
        >
          <span className="mp-bn-icon-wrap">
            <i className={`bi ${active === item.key ? item.iconActive : item.icon}`} />
            {item.badge && item.badge > 0 && (
              <span className="mp-bn-badge">{item.badge}</span>
            )}
          </span>
          <span className="mp-bn-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default MobileBottomNav;
