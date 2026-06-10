import React from "react";

const ICON_COLOR = "text-forground";

export function ViraatIcon(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <rect x="4" y="4" width="32" height="32" rx="6" stroke={ICON_COLOR} strokeWidth="1.2" opacity="0.15" />
      <line x1="15" y1="4" x2="15" y2="36" stroke={ICON_COLOR} strokeWidth="0.6" opacity="0.2" />
      <line x1="25" y1="4" x2="25" y2="36" stroke={ICON_COLOR} strokeWidth="0.6" opacity="0.2" />
      <line x1="4" y1="15" x2="36" y2="15" stroke={ICON_COLOR} strokeWidth="0.6" opacity="0.2" />
      <line x1="4" y1="25" x2="36" y2="25" stroke={ICON_COLOR} strokeWidth="0.6" opacity="0.2" />
      <rect x="10" y="14" width="8" height="14" rx="1" fill="none" stroke={ICON_COLOR} strokeWidth="1.4" />
      <rect x="22" y="10" width="10" height="18" rx="1" fill="none" stroke={ICON_COLOR} strokeWidth="1.4" />
      <rect x="12" y="17" width="2" height="2" rx="0.3" fill={ICON_COLOR} opacity="0.7" />
      <rect x="16" y="17" width="2" height="2" rx="0.3" fill={ICON_COLOR} opacity="0.7" />
      <rect x="24" y="13" width="2" height="2" rx="0.3" fill={ICON_COLOR} opacity="0.7" />
      <rect x="28" y="13" width="2" height="2" rx="0.3" fill={ICON_COLOR} opacity="0.7" />
    </svg>
  );
}

export function UniFormIcon(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <rect x="9" y="5" width="22" height="28" rx="2" fill="none" stroke={ICON_COLOR} strokeWidth="1.3" />
      <polyline
        points="9,33 11,36 13,33 15,36 17,33 19,36 21,33 23,36 25,33 27,36 31,33"
        fill="none"
        stroke={ICON_COLOR}
        strokeWidth="1.1"
        opacity="0.7"
      />
      <line x1="13" y1="11" x2="27" y2="11" stroke={ICON_COLOR} strokeWidth="1" strokeLinecap="round" opacity="0.8" />
      <line x1="13" y1="15" x2="22" y2="15" stroke={ICON_COLOR} strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />
      <line x1="13" y1="19" x2="25" y2="19" stroke={ICON_COLOR} strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />
      <line x1="13" y1="24" x2="27" y2="24" stroke={ICON_COLOR} strokeWidth="1" strokeLinecap="round" opacity="0.9" />
      <line x1="14" y1="28" x2="14" y2="31" stroke={ICON_COLOR} strokeWidth="1.2" />
      <line x1="16" y1="28" x2="16" y2="31" stroke={ICON_COLOR} strokeWidth="0.6" />
      <line x1="18" y1="28" x2="18" y2="31" stroke={ICON_COLOR} strokeWidth="1.8" />
      <line x1="20" y1="28" x2="20" y2="31" stroke={ICON_COLOR} strokeWidth="0.6" />
      <line x1="22" y1="28" x2="22" y2="31" stroke={ICON_COLOR} strokeWidth="1.2" />
      <line x1="24" y1="28" x2="24" y2="31" stroke={ICON_COLOR} strokeWidth="0.6" />
      <line x1="26" y1="28" x2="26" y2="31" stroke={ICON_COLOR} strokeWidth="1.4" />
    </svg>
  );
}

export function HeerIcon(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path d="M10 17 L12 34 L28 34 L30 17 Z" fill="none" stroke={ICON_COLOR} strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M15 17 Q15 9 20 9 Q25 9 25 17" fill="none" stroke={ICON_COLOR} strokeWidth="1.3" strokeLinecap="round" />
      <polyline
        points="21,20 19,26 21,26 19,32"
        fill="none"
        stroke={ICON_COLOR}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

export function EngravedIcon(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <polygon points="20,4 36,20 20,36 4,20" fill="none" stroke={ICON_COLOR} strokeWidth="1.3" />
      <polygon points="20,11 29,20 20,29 11,20" fill="none" stroke={ICON_COLOR} strokeWidth="0.9" opacity="0.5" />
      <line x1="20" y1="11" x2="20" y2="29" stroke={ICON_COLOR} strokeWidth="0.6" opacity="0.3" />
      <line x1="11" y1="20" x2="29" y2="20" stroke={ICON_COLOR} strokeWidth="0.6" opacity="0.3" />
      <circle cx="20" cy="20" r="2" fill={ICON_COLOR} opacity="0.9" />
      <circle cx="20" cy="4" r="1.2" fill={ICON_COLOR} opacity="0.5" />
      <circle cx="36" cy="20" r="1.2" fill={ICON_COLOR} opacity="0.5" />
      <circle cx="20" cy="36" r="1.2" fill={ICON_COLOR} opacity="0.5" />
      <circle cx="4" cy="20" r="1.2" fill={ICON_COLOR} opacity="0.5" />
    </svg>
  );
}

export function MevenviroIcon(props) {
  return (
    <svg viewBox="0 0 40 40" width="20" height="20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 28 A14 14 0 0 1 32 28" fill="none" stroke={ICON_COLOR} strokeWidth="1.3" strokeLinecap="round" opacity="0.35" />
      <path d="M8 28 A14 14 0 0 1 24 11" fill="none" stroke={ICON_COLOR} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="8" y1="28" x2="9.4" y2="25.6" stroke={ICON_COLOR} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="20" y1="14" x2="20" y2="16.6" stroke={ICON_COLOR} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="32" y1="28" x2="30.6" y2="25.6" stroke={ICON_COLOR} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="20" y1="28" x2="24" y2="11" stroke={ICON_COLOR} strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="20" cy="28" r="2.2" fill="none" stroke={ICON_COLOR} strokeWidth="1.3" />
      <circle cx="20" cy="28" r="0.9" fill={ICON_COLOR} />
      <circle cx="12" cy="34" r="1.2" fill={ICON_COLOR} opacity="0.4" />
      <circle cx="20" cy="36" r="1.2" fill={ICON_COLOR} opacity="0.65" />
      <circle cx="28" cy="34" r="1.2" fill={ICON_COLOR} opacity="0.4" />
    </svg>
  );
}

export function TorrentIcon(props) {
  return (
    <svg viewBox="0 0 40 40" width="20" height="20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <line x1="20" y1="20" x2="8" y2="10" stroke={ICON_COLOR} strokeWidth="0.8" opacity="0.4" />
      <line x1="20" y1="20" x2="32" y2="10" stroke={ICON_COLOR} strokeWidth="0.8" opacity="0.4" />
      <line x1="20" y1="20" x2="8" y2="32" stroke={ICON_COLOR} strokeWidth="0.8" opacity="0.4" />
      <line x1="20" y1="20" x2="32" y2="32" stroke={ICON_COLOR} strokeWidth="0.8" opacity="0.4" />
      <line x1="8" y1="10" x2="32" y2="10" stroke={ICON_COLOR} strokeWidth="0.6" opacity="0.25" />
      <line x1="8" y1="32" x2="32" y2="32" stroke={ICON_COLOR} strokeWidth="0.6" opacity="0.25" />
      <line x1="8" y1="10" x2="8" y2="32" stroke={ICON_COLOR} strokeWidth="0.6" opacity="0.25" />
      <line x1="32" y1="10" x2="32" y2="32" stroke={ICON_COLOR} strokeWidth="0.6" opacity="0.25" />
      <circle cx="8" cy="10" r="3.5" fill="none" stroke={ICON_COLOR} strokeWidth="1.2" opacity="0.7" />
      <circle cx="32" cy="10" r="3.5" fill="none" stroke={ICON_COLOR} strokeWidth="1.2" opacity="0.7" />
      <circle cx="8" cy="32" r="3.5" fill="none" stroke={ICON_COLOR} strokeWidth="1.2" opacity="0.7" />
      <circle cx="32" cy="32" r="3.5" fill="none" stroke={ICON_COLOR} strokeWidth="1.2" opacity="0.7" />
      <circle cx="20" cy="20" r="5" fill="none" stroke={ICON_COLOR} strokeWidth="1.5" />
      <circle cx="20" cy="20" r="2" fill={ICON_COLOR} />
      <rect x="13" y="14" width="3.5" height="3.5" rx="0.8" fill={ICON_COLOR} opacity="0.8" />
    </svg>
  );
}