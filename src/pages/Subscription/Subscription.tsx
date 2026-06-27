"use client";
import React, { useState } from "react";
import "../../styles/subscription.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PricingHero from "../../components/PricingHero/PricingHero";
import BillingToggle from "../../components/BillingToggle/BillingToggle";
import JobSeekerPlans from "../../components/JobSeekerPlans/JobSeekerPlans";
import EmployerPlans from "../../components/EmployerPlans/EmployerPlans";
import BusinessPromotionPlans from "../../components/BusinessPromotionPlans/BusinessPromotionPlans";
import ComparisonTable from "../../components/ComparisonTable/ComparisonTable";
import PremiumBenefits from "../../components/PremiumBenefits/PremiumBenefits";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import SubscriptionCTA from "../../components/SubscriptionCTA/SubscriptionCTA";
import StatsStrip from "../../components/StatsStrip/StatsStrip";

type BillingPeriod = "daily" | "weekly" | "monthly";

const Subscription: React.FC = () => {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  return (
    <div className="subscription-page">
      {/* SEO Meta */}
      <title>JobNest Premium — Subscription &amp; Pricing Plans</title>

      {/* Sticky Navbar */}
      <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <Navbar />
      </div>

      <main style={{ paddingTop: "0" }}>
        {/* 1. Hero */}
        <PricingHero />

        {/* Stats Strip */}
        <StatsStrip />

        {/* 2. Billing Toggle */}
        <BillingToggle active={billing} onChange={setBilling} />

        {/* Section Divider */}
        <div className="sub-section-divider" />

        {/* 3. Job Seeker Plans */}
        <JobSeekerPlans billing={billing} />

        {/* Section Divider */}
        <div className="sub-section-divider" />

        {/* 4. Employer Plans */}
        <EmployerPlans billing={billing} />

        {/* Section Divider */}
        <div className="sub-section-divider" />

        {/* 5. Business Promotion */}
        <BusinessPromotionPlans billing={billing} />

        {/* Section Divider */}
        <div className="sub-section-divider" />

        {/* 6. Comparison Table */}
        <ComparisonTable />

        {/* Section Divider */}
        <div className="sub-section-divider" />

        {/* 7. Premium Benefits */}
        <PremiumBenefits />

        {/* Section Divider */}
        <div className="sub-section-divider" />

        {/* 8. Testimonials */}
        <Testimonials />

        {/* Section Divider */}
        <div className="sub-section-divider" />

        {/* 9. FAQ */}
        <FAQ />

        {/* Section Divider */}
        <div className="sub-section-divider" />

        {/* 10. CTA */}
        <SubscriptionCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Subscription;
