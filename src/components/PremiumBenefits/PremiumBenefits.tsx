"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: "🚀",
    title: "Faster Hiring",
    desc: "Connect with top candidates instantly with priority placement and smart matching.",
  },
  {
    icon: "💼",
    title: "Better Opportunities",
    desc: "Access exclusive job listings before they go public with early-access features.",
  },
  {
    icon: "📈",
    title: "Growth Analytics",
    desc: "Track applications, profile views, and hiring metrics in real-time dashboards.",
  },
  {
    icon: "⭐",
    title: "Priority Visibility",
    desc: "Your profile or listing appears at the top of search results for maximum exposure.",
  },
  {
    icon: "🔒",
    title: "Verified Profiles",
    desc: "Build trust with a verified badge that signals credibility to employers and candidates.",
  },
  {
    icon: "🎯",
    title: "Better Reach",
    desc: "Promote your business across the platform and attract the right audience efficiently.",
  },
];

const PremiumBenefits: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".benefit-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "all",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="benefits-section" ref={sectionRef} id="benefits">
      <div className="container">
        <div className="text-center">
          <div className="sub-badge">Why Go Premium</div>
          <h2 className="sub-heading">
            <span className="gold-text">Premium Benefits</span>
          </h2>
          <p className="sub-subheading mx-auto">
            Unlock powerful tools that give you a competitive edge in hiring or job seeking.
          </p>
        </div>
        <div className="benefit-cards-grid">
          {benefits.map((b, i) => (
            <div className="benefit-card" key={i} id={`benefit-${i + 1}`}>
              <span className="benefit-icon" role="img" aria-label={b.title}>
                {b.icon}
              </span>
              <div className="benefit-title">{b.title}</div>
              <p className="benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumBenefits;
