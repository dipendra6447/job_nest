import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: "2M+", label: "Active Job Seekers" },
  { number: "50K+", label: "Companies Hiring" },
  { number: "500K+", label: "Jobs Posted" },
  { number: "98%", label: "Satisfaction Rate" },
];

const StatsStrip: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "all",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="stats-strip" ref={sectionRef} id="stats-strip">
      <div className="container">
        <div className="stats-strip-inner">
          {stats.map((s, i) => (
            <React.Fragment key={i}>
              <div className="stat-item">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
              {i < stats.length - 1 && (
                <div className="stat-divider" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsStrip;
