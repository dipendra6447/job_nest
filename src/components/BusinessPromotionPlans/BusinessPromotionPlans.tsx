"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type BillingPeriod = "daily" | "weekly" | "monthly";

interface BusinessPromotionPlansProps {
  billing: BillingPeriod;
}

const price: Record<BillingPeriod, string> = {
  daily: "₹99",
  weekly: "₹499",
  monthly: "₹1499",
};
const period: Record<BillingPeriod, string> = {
  daily: "/day",
  weekly: "/week",
  monthly: "/month",
};

const BusinessPromotionPlans: React.FC<BusinessPromotionPlansProps> = ({ billing }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".biz-promo-card", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
        opacity: 0,
        scale: 0.9,
        y: 40,
        duration: 0.8,
        ease: "back.out(1.2)",
        clearProps: "all",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="pricing-section" ref={sectionRef} id="business-plans">
      <div className="container">
        <div className="pricing-section-title">
          <div className="sub-badge">Promote Your Business</div>
          <h2 className="sub-heading">
            <span className="gold-text">Reach Thousands of Professionals</span>
          </h2>
          <p className="sub-subheading">
            Increase visibility and generate leads with premium business promotion.
          </p>
        </div>

        <div className="pricing-cards-row one-col">
          <div
            className="pricing-card featured biz-promo-card"
            id="biz-promo-plan"
            style={{
              background:
                "linear-gradient(145deg, #141400, #1a1800)",
              boxShadow:
                "0 0 60px rgba(212,175,55,0.25), 0 30px 80px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="card-badge"
              style={{
                background: "linear-gradient(135deg, #D4AF37, #F5E27C)",
              }}
            >
              ✨ Business Promotion
            </div>
            <div className="card-plan-name" style={{ fontSize: "28px" }}>
              Business Promotion Plan
            </div>
            <div className="card-price">
              <span className="price-amount">{price[billing]}</span>
              <span className="price-period">{period[billing]}</span>
              <p className="price-desc">
                Admin-managed promotion duration • Auto-expires when period ends
              </p>
            </div>
            <div className="card-divider" />
            <ul className="feature-list" style={{ columnCount: 2, gap: "12px" }}>
              {[
                "Business Listing Promotion",
                "Homepage Featured Placement",
                "Search Priority Ranking",
                "Dedicated Promotion Banner",
                "Analytics Dashboard",
                "Click Tracking",
                "Lead Generation Support",
              ].map((f) => (
                <li key={f} className="feature-item included" style={{ breakInside: "avoid" }}>
                  <span className="feature-check yes">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#" className="card-cta-btn primary" id="biz-promo-cta" style={{ marginTop: "8px" }}>
              Promote Business
            </a>
            <p className="admin-note">
              <span>🔐</span> Promotion duration configured &amp; managed by Admin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPromotionPlans;
