"use client";
import React, { useEffect } from "react";

export type UserRole = "jobseeker" | "employer" | "business";

interface RoleSwitcherModalProps {
  currentRole: UserRole;
  targetRole: UserRole;
  onConfirm: () => void;
  onCancel: () => void;
  isLight?: boolean;
}

const roleDetails: Record<UserRole, { icon: string; label: string; color: string; sectionId: string; desc: string }> = {
  jobseeker: {
    icon: "🔍",
    label: "Job Seeker",
    color: "#4A90E2",
    sectionId: "plans",
    desc: "Search and apply for unlimited jobs with Silver, Gold & Platinum plans.",
  },
  employer: {
    icon: "🏢",
    label: "Employer",
    color: "#2454FF",
    sectionId: "employer-plans",
    desc: "Post unlimited jobs and manage your entire recruitment pipeline.",
  },
  business: {
    icon: "📣",
    label: "Business Promoter",
    color: "#C97B2A",
    sectionId: "business-plans",
    desc: "Boost your brand visibility and reach thousands of professionals.",
  },
};

const RoleSwitcherModal: React.FC<RoleSwitcherModalProps> = ({
  currentRole,
  targetRole,
  onConfirm,
  onCancel,
  isLight = false,
}) => {
  const from = roleDetails[currentRole];
  const to = roleDetails[targetRole];
  const themeClass = isLight ? " role-modal--light" : "";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onCancel(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onCancel]);

  const handleConfirm = () => {
    onConfirm();
    setTimeout(() => {
      const el = document.getElementById(to.sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className={`role-modal-overlay${themeClass}`} onClick={onCancel} id="role-switcher-modal">
      <div
        className={`role-modal-box${themeClass}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="role-modal-title"
      >
        {/* Top accent line */}
        <div className="role-modal-accent" />

        <div className="role-modal-header">
          <h3 className="role-modal-title" id="role-modal-title">Switch Your Role</h3>
          <button className="compare-modal-close" onClick={onCancel} id="role-modal-close" aria-label="Close">✕</button>
        </div>

        <p className="role-modal-subtitle">
          You are switching from <strong>{from.label}</strong> to <strong>{to.label}</strong> plans.
        </p>

        {/* Role transition visual */}
        <div className="role-transition-row">
          <div className="role-card-chip" style={{ borderColor: from.color }}>
            <span className="role-chip-icon">{from.icon}</span>
            <div>
              <div className="role-chip-label">Current</div>
              <div className="role-chip-name" style={{ color: from.color }}>{from.label}</div>
            </div>
          </div>

          <div className="role-arrow">
            <div className="role-arrow-line" />
            <div className="role-arrow-head">→</div>
          </div>

          <div className="role-card-chip role-card-chip--target" style={{ borderColor: to.color }}>
            <span className="role-chip-icon">{to.icon}</span>
            <div>
              <div className="role-chip-label">Switching To</div>
              <div className="role-chip-name" style={{ color: to.color }}>{to.label}</div>
            </div>
          </div>
        </div>

        {/* Target role description */}
        <div className="role-modal-desc-box" style={{ borderColor: `${to.color}40` }}>
          <div className="role-modal-desc-icon" style={{ background: `${to.color}20`, color: to.color }}>
            {to.icon}
          </div>
          <p className="role-modal-desc-text">{to.desc}</p>
        </div>

        {/* All roles quick switch */}
        <div className="role-all-roles">
          <div className="role-all-label">Or jump to any role:</div>
          <div className="role-all-chips">
            {(Object.entries(roleDetails) as [UserRole, typeof roleDetails[UserRole]][])
              .filter(([key]) => key !== currentRole)
              .map(([key, val]) => (
                <button
                  key={key}
                  className="role-all-chip"
                  style={{ borderColor: key === targetRole ? val.color : undefined, color: key === targetRole ? val.color : undefined }}
                  onClick={() => {
                    onConfirm();
                    setTimeout(() => {
                      const el = document.getElementById(roleDetails[key].sectionId);
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                  }}
                  id={`role-quick-${key}`}
                >
                  {val.icon} {val.label}
                </button>
              ))}
          </div>
        </div>

        {/* Actions */}
        <div className="role-modal-actions">
          <button className="role-btn-cancel" onClick={onCancel} id="role-modal-cancel">
            Stay Here
          </button>
          <button
            className="role-btn-confirm"
            style={{ background: `linear-gradient(135deg, ${to.color}, ${to.color}bb)` }}
            onClick={handleConfirm}
            id="role-modal-confirm"
          >
            {to.icon} Switch to {to.label}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSwitcherModal;
