import React, { useState, useRef } from "react";
import gsap from "gsap";

const faqs = [
  {
    q: "How many free applications can I make?",
    a: "As a Job Seeker, your first 3 job applications are completely free. From the 4th application onwards, a JobNest Premium subscription is required to continue applying.",
  },
  {
    q: "How many jobs can companies post for free?",
    a: "Employers can post up to 3 job listings for free on JobNest. Once you reach the 3-job limit, you'll need to upgrade to the Professional Plan to post unlimited jobs.",
  },
  {
    q: "What happens after free limits are exhausted?",
    a: "Once your free limits are used, you'll be prompted to choose a subscription plan. Your existing applications or postings remain active, but new ones require an active premium subscription.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, you can cancel your subscription at any time from your account settings. Your premium access continues until the end of your current billing period — no hidden fees.",
  },
  {
    q: "How does business promotion work?",
    a: "Business Promotion gives your business premium placement on the homepage, featured search rankings, and a dedicated banner. You purchase a plan (daily/weekly/monthly) and your promotion goes live immediately with priority visibility.",
  },
  {
    q: "Who manages promotion duration?",
    a: "Promotion duration is configured and managed by the JobNest Admin. Once the promotion period ends, your listing automatically loses featured visibility until renewed.",
  },
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (idx: number) => {
    const isOpen = openIdx === idx;
    const answer = itemRefs.current[idx]?.querySelector<HTMLDivElement>(".faq-answer");
    const icon = itemRefs.current[idx]?.querySelector(".faq-icon");

    if (answer) {
      if (isOpen) {
        gsap.to(answer, { maxHeight: 0, padding: "0 28px", duration: 0.35, ease: "power2.in" });
      } else {
        gsap.to(answer, { maxHeight: 200, padding: "0 28px 22px", duration: 0.4, ease: "power2.out" });
      }
    }
    if (icon) {
      gsap.to(icon, { rotation: isOpen ? 0 : 45, duration: 0.3, ease: "power2.inOut" });
    }
    setOpenIdx(isOpen ? null : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="text-center">
          <div className="sub-badge">Got Questions?</div>
          <h2 className="sub-heading">
            <span className="gold-text">Frequently Asked Questions</span>
          </h2>
          <p className="sub-subheading mx-auto">
            Everything you need to know about JobNest Premium plans.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className={`faq-item${openIdx === idx ? " open" : ""}`}
              ref={(el) => { itemRefs.current[idx] = el; }}
              id={`faq-item-${idx + 1}`}
            >
              <div
                className="faq-question"
                onClick={() => toggle(idx)}
                role="button"
                tabIndex={0}
                aria-expanded={openIdx === idx}
                onKeyDown={(e) => e.key === "Enter" && toggle(idx)}
              >
                <span className="faq-question-text">{item.q}</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </div>
              <div
                className="faq-answer"
                style={{ maxHeight: 0, padding: "0 28px" }}
              >
                <p className="faq-answer-text">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
