import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type BillingPeriod = "daily" | "weekly" | "monthly";

interface EmployerPlansProps {
  billing: BillingPeriod;
}

const proPrice: Record<BillingPeriod, string> = {
  daily: "₹49",
  weekly: "₹199",
  monthly: "₹599",
};
const proPeriod: Record<BillingPeriod, string> = {
  daily: "/day",
  weekly: "/week",
  monthly: "/month",
};

const EmployerPlans: React.FC<EmployerPlansProps> = ({ billing }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".emp-plan-card", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
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
    <section
      className="pricing-section"
      ref={sectionRef}
      id="employer-plans"
      style={{ background: "linear-gradient(180deg, #0d0d0d 0%, #0a0a0a 100%)" }}
    >
      <div className="container">
        <div className="pricing-section-title">
          <div className="sub-badge">For Employers</div>
          <h2 className="sub-heading">
            <span className="gold-text">Find Top Talent Faster</span>
          </h2>
          <p className="sub-subheading">
            Find top talent faster with premium hiring tools.
          </p>
        </div>

        <div className="pricing-cards-row two-col">
          {/* Starter */}
          <div className="pricing-card emp-plan-card" id="emp-starter-plan">
            <div className="card-plan-type">Employer</div>
            <div className="card-plan-name">Starter Plan</div>
            <div className="card-price">
              <span className="price-amount free-price">₹0</span>
              <span className="price-period">forever</span>
              <p className="price-desc">Post up to 3 jobs at no cost</p>
            </div>
            <div className="card-divider" />
            <ul className="feature-list">
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Post Up To 3 Jobs Free
              </li>
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Company Profile
              </li>
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Basic Applicant Management
              </li>
              <li className="feature-item">
                <span className="feature-check no">✗</span>
                Featured Job Listings
              </li>
              <li className="feature-item">
                <span className="feature-check no">✗</span>
                Unlimited Job Posts
              </li>
              <li className="feature-item">
                <span className="feature-check no">✗</span>
                Recruitment Dashboard
              </li>
            </ul>
            <a href="#" className="card-cta-btn" id="emp-starter-cta">
              Get Started
            </a>
          </div>

          {/* Professional */}
          <div className="pricing-card featured emp-plan-card" id="emp-pro-plan">
            <div className="card-badge">🏆 Recommended</div>
            <div className="card-plan-type">Employer</div>
            <div className="card-plan-name">Professional Plan</div>
            <div className="card-price">
              <span className="price-amount">{proPrice[billing]}</span>
              <span className="price-period">{proPeriod[billing]}</span>
              <p className="price-desc">Hire faster with unlimited postings</p>
            </div>
            <div className="card-divider" />
            <ul className="feature-list">
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Unlimited Job Posting
              </li>
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Featured Job Listings
              </li>
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Applicant Analytics
              </li>
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Candidate Shortlisting
              </li>
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Priority Support
              </li>
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Company Verification Badge
              </li>
              <li className="feature-item included">
                <span className="feature-check yes">✓</span>
                Recruitment Dashboard
              </li>
            </ul>
            <a href="#" className="card-cta-btn primary" id="emp-pro-cta">
              Hire Faster
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerPlans;
