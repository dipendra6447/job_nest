"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type BillingPeriod = "daily" | "weekly" | "monthly";

interface BillingToggleProps {
  active: BillingPeriod;
  onChange: (period: BillingPeriod) => void;
}

const options: { label: string; value: BillingPeriod }[] = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
];

const BillingToggle: React.FC<BillingToggleProps> = ({ active, onChange }) => {
  const sliderRef = useRef<HTMLSpanElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const idx = options.findIndex((o) => o.value === active);
    const buttons = wrapperRef.current?.querySelectorAll<HTMLButtonElement>(".billing-btn");
    if (!buttons || !sliderRef.current) return;
    const btn = buttons[idx];
    if (!btn) return;
    gsap.to(sliderRef.current, {
      left: btn.offsetLeft,
      width: btn.offsetWidth,
      duration: 0.35,
      ease: "power2.inOut",
    });
  }, [active]);

  return (
    <div className="billing-toggle-section" id="billing-toggle">
      <div className="billing-toggle-wrapper" ref={wrapperRef}>
        <span className="billing-toggle-slider" ref={sliderRef} aria-hidden="true" />
        {options.map((opt) => (
          <button
            key={opt.value}
            className={`billing-btn${active === opt.value ? " active" : ""}`}
            onClick={() => onChange(opt.value)}
            id={`billing-${opt.value}-btn`}
            aria-pressed={active === opt.value}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BillingToggle;
