import React, { useState } from 'react';
import { RecentItem } from '../../utils/mockOpportunities';
import './RecentlyPosted.css';

interface RecentlyPostedProps {
  items: RecentItem[];
}

const RecentlyPosted: React.FC<RecentlyPostedProps> = ({ items }) => {
  const [bookmarks, setBookmarks] = useState<Set<number>>(new Set());

  const toggleBookmark = (id: number) => {
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="mp-recently-posted" aria-label="Recently posted" id="mp-recently-posted">
      <div className="mp-rp-header">
        <h2 className="mp-rp-title">Recently posted</h2>
        <a href="#" className="mp-view-all" id="mp-rp-view-all">View all</a>
      </div>

      <div className="mp-rp-grid">
        {items.map((item) => (
          <div
            className="mp-rp-item"
            key={item.id}
            id={`rp-item-${item.id}`}
          >
            <div
              className="mp-rp-avatar"
              style={{ background: item.avatarBg, color: item.avatarColor }}
            >
              {item.avatarInitials}
            </div>
            <div className="mp-rp-info">
              <h4 className="mp-rp-item-title">{item.title}</h4>
              <p className="mp-rp-item-meta">
                {item.company}
                <span className="mp-rp-dot">&bull;</span>
                {item.category}
                <span className="mp-rp-dot">&bull;</span>
                {item.location}
              </p>
            </div>
            <span className="mp-rp-time">{item.postedTime}</span>
            <button
              className={`mp-rp-bookmark ${bookmarks.has(item.id) ? 'mp-rp-bookmarked' : ''}`}
              onClick={() => toggleBookmark(item.id)}
              aria-label={bookmarks.has(item.id) ? `Unbookmark ${item.title}` : `Bookmark ${item.title}`}
              type="button"
            >
              <i className={`bi ${bookmarks.has(item.id) ? 'bi-bookmark-fill' : 'bi-bookmark'}`} />
            </button>
          </div>
        ))}
      </div>

      <div className="mp-rp-load-more-wrapper">
        <button className="mp-rp-load-more" type="button" id="mp-load-more">
          Load More
        </button>
      </div>
    </section>
  );
};

export default RecentlyPosted;
