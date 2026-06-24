import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type BillingPeriod = "daily" | "weekly" | "monthly";

interface JobSeekerPlansProps {
  billing: BillingPeriod;
}

const premiumPrice: Record<BillingPeriod, string> = {
  daily: "₹29",
  weekly: "₹99",
  monthly: "₹299",
};

const premiumPeriod: Record<BillingPeriod, string> = {
  daily: "/day",
  weekly: "/week",
  monthly: "/month",
};

const JobSeekerPlans: React.FC<JobSeekerPlansProps> = ({ billing }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".js-plan-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 60,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
        clearProps: "all",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="pricing-section" ref={sectionRef} id="plans">
      <div className="container">
        <div className="pricing-section-title">
          <div className="sub-badge">For Job Seekers</div>
          <h2 className="sub-heading">
            <span className="gold-text">Apply Without Limitations</span>
          </h2>
          <p className="sub-subheading">
            Apply for jobs without limitations and boost your career.
          </p>
        </div>

        <div className="pricing-cards-row two-col">
          {/* Free Plan */}
          <div className="pricing-card js-plan-card" id="js-free-plan">
            <div className="card-plan-type">Job Seeker</div>
            <div className="card-plan-name">Free Plan</div>
            <div className="card-price">
              <span className="price-amount free-price">₹0</span>
              <span className="price-period">forever</span>
              <p className="price-desc">Start applying today, no card needed</p>
            </div>
            <div className="card-divider" />
            <ul className="feature-list">
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Search Unlimited Jobs
              </li>
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                First 3 Applications Free
              </li>
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Basic Profile
              </li>
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Apply Tracking
              </li>
              <li className="feature-item">
                <span className="feature-check no">✗</span>
                Unlimited Applications
              </li>
              <li className="feature-item">
                <span className="feature-check no">✗</span>
                Premium Support
              </li>
              <li className="feature-item">
                <span className="feature-check no">✗</span>
                Featured Profile
              </li>
            </ul>
            <a href="#" className="card-cta-btn" id="js-free-cta">
              Current Plan
            </a>
          </div>

          {/* Premium Plan */}
          <div className="pricing-card featured js-plan-card" id="js-premium-plan">
            <div className="card-badge">⭐ Most Popular</div>
            <div className="card-plan-type">Job Seeker</div>
            <div className="card-plan-name">Premium Plan</div>
            <div className="card-price">
              <span className="price-amount">{premiumPrice[billing]}</span>
              <span className="price-period">{premiumPeriod[billing]}</span>
              <p className="price-desc">Unlock unlimited job applications</p>
            </div>
            <div className="card-divider" />
            <ul className="feature-list">
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Unlimited Job Applications
              </li>
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Priority Profile Visibility
              </li>
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Featured Candidate Badge
              </li>
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Application Analytics
              </li>
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Premium Support
              </li>
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Resume Enhancement
              </li>
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Early Access Jobs
              </li>
            </ul>
            <a href="#" className="card-cta-btn primary" id="js-premium-cta">
              Upgrade Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSeekerPlans;
