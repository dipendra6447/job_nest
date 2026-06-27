"use client";
import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="newsletter-section section-padding-sm" id="newsletter" aria-label="Newsletter subscription">
      <div className="container">
        <div className="newsletter-card">
          <div className="newsletter-glow"></div>

          <div className="row align-items-center g-5 position-relative" style={{ zIndex: 1 }}>
            <div className="col-lg-6">
              <div className="newsletter-left">
                <div className="newsletter-icon">
                  <i className="bi bi-envelope-open-fill"></i>
                </div>
                <h2 className="newsletter-title">
                  Get the Best Jobs<br />
                  Delivered to Your Inbox
                </h2>
                <p className="newsletter-text">
                  Subscribe to our weekly job digest. We curate the top opportunities from 500+
                  companies and deliver them straight to your inbox every Monday morning.
                </p>
                <div className="newsletter-features d-flex flex-wrap gap-4 mt-3">
                  <span className="nl-feature">
                    <i className="bi bi-check-circle-fill"></i> Curated weekly
                  </span>
                  <span className="nl-feature">
                    <i className="bi bi-check-circle-fill"></i> No spam, ever
                  </span>
                  <span className="nl-feature">
                    <i className="bi bi-check-circle-fill"></i> Unsubscribe anytime
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="newsletter-form-wrap">
                {submitted ? (
                  <div className="newsletter-success">
                    <div className="ns-icon">🎉</div>
                    <h3>You're subscribed!</h3>
                    <p>Check your inbox every Monday for curated job listings.</p>
                    <button className="ns-back-btn" onClick={() => setSubmitted(false)} id="newsletter-back-btn">
                      Subscribe another email
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="form-title">Join 450,000+ subscribers</h3>
                    <p className="form-sub">Get weekly job alerts straight to your inbox</p>

                    <form onSubmit={handleSubmit} className="nl-form" id="newsletter-form">
                      <div className="nl-input-wrap">
                        <i className="bi bi-envelope nl-input-icon"></i>
                        <input
                          type="email"
                          className="nl-input"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          aria-label="Email address"
                          id="newsletter-email-input"
                        />
                        <button type="submit" className="nl-submit-btn" id="newsletter-submit-btn">
                          Subscribe <i className="bi bi-arrow-right ms-1 d-none d-sm-inline"></i>
                        </button>
                      </div>
                    </form>

                    <div className="nl-category-tags">
                      <span>Interests:</span>
                      {['Tech', 'Design', 'Finance', 'Marketing', 'Remote'].map(tag => (
                        <button key={tag} className="nl-cat-tag" id={`nl-tag-${tag.toLowerCase()}`}>{tag}</button>
                      ))}
                    </div>

                    <p className="nl-privacy">
                      <i className="bi bi-lock-fill me-1"></i>
                      Your privacy is protected. We never share your email.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
