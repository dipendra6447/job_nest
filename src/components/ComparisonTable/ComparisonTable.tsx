import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const rows = [
  {
    feature: "Job Applications",
    free: "3 only",
    jsP: "✓ Unlimited",
    empP: "—",
    bizP: "—",
  },
  {
    feature: "Unlimited Applications",
    free: "✗",
    jsP: "✓",
    empP: "—",
    bizP: "—",
  },
  {
    feature: "Job Posting",
    free: "Up to 3",
    jsP: "—",
    empP: "✓ Unlimited",
    bizP: "—",
  },
  {
    feature: "Featured Listing",
    free: "✗",
    jsP: "✓",
    empP: "✓",
    bizP: "✓",
  },
  {
    feature: "Business Promotion",
    free: "✗",
    jsP: "✗",
    empP: "✗",
    bizP: "✓",
  },
  {
    feature: "Analytics",
    free: "✗",
    jsP: "✓",
    empP: "✓",
    bizP: "✓",
  },
  {
    feature: "Priority Support",
    free: "✗",
    jsP: "✓",
    empP: "✓",
    bizP: "✓",
  },
  {
    feature: "Verification Badge",
    free: "✗",
    jsP: "✗",
    empP: "✓",
    bizP: "—",
  },
  {
    feature: "Premium Visibility",
    free: "✗",
    jsP: "✓",
    empP: "✓",
    bizP: "✓",
  },
];

const renderCell = (val: string) => {
  if (val === "✓")
    return <span className="check-icon">✓</span>;
  if (val === "✗")
    return <span className="cross-icon">✗</span>;
  if (val.startsWith("✓"))
    return (
      <span style={{ color: "#D4AF37", fontWeight: 600, fontSize: "13px" }}>
        {val}
      </span>
    );
  if (val === "—")
    return <span style={{ color: "#333" }}>—</span>;
  return <span style={{ fontSize: "13px", color: "#B0B0B0" }}>{val}</span>;
};

const ComparisonTable: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("tbody tr", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -20,
        duration: 0.4,
        stagger: 0.07,
        ease: "power2.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="comparison-section" ref={sectionRef} id="comparison">
      <div className="container">
        <div className="text-center mb-5">
          <div className="sub-badge">Compare Plans</div>
          <h2 className="sub-heading">
            <span className="gold-text">Feature Comparison</span>
          </h2>
          <p className="sub-subheading">
            Find the right plan for your needs.
          </p>
        </div>

        <div className="comparison-table-wrapper">
          <table className="comparison-table" role="table" aria-label="Plan comparison">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">Free</th>
                <th scope="col" className="gold-header">
                  <div className="table-plan-label">Job Seeker</div>
                  Premium
                </th>
                <th scope="col" className="gold-header">
                  <div className="table-plan-label">Employer</div>
                  Premium
                </th>
                <th scope="col" className="gold-header">
                  <div className="table-plan-label">Business</div>
                  Promotion
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>{renderCell(row.free)}</td>
                  <td>{renderCell(row.jsP)}</td>
                  <td>{renderCell(row.empP)}</td>
                  <td>{renderCell(row.bizP)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
