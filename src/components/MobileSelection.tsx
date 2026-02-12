import React from 'react';

export type MobileSelectionVariant = 'purple' | 'blue';

export interface MobileSelectionProps {
  /** Main text content (e.g. "Your selection text here") */
  label: string;
  /** Visual variant: purple (selected purple) or blue (selected blue) */
  variant?: MobileSelectionVariant;
  /** Optional click handler */
  onClick?: () => void;
  className?: string;
}

const variantStyles = {
  purple: {
    bg: 'bg-[#f1f2ff]',
    border: 'border-[#38539a]',
    text: 'text-[#38539a]',
  },
  blue: {
    bg: 'bg-[#e5fdff]',
    border: 'border-[#00857f]',
    text: 'text-[#2c2c2c]',
  },
};

/**
 * Mobile selection frame – matches design system values exactly.
 * Purple: bg #f1f2ff, border #38539a 2px, text #38539a, padding [12, 16], cornerRadius 12.
 * Blue: bg #e5fdff, border #00857f 2px, text #2c2c2c, padding [12, 16], cornerRadius 12.
 */
export function MobileSelection({
  label,
  variant = 'purple',
  onClick,
  className = '',
}: MobileSelectionProps) {
  const styles = variantStyles[variant];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex flex-row items-center gap-3
        w-full max-w-[343px] min-w-[343px]
        py-3 px-4
        rounded-[12px]
        border-2 text-left
        ${styles.bg}
        ${styles.border}
        ${styles.text}
        text-[14px] font-medium leading-[1.286]
        font-['GT_Walsheim_Pro',system-ui,sans-serif]
        transition-colors
        hover:opacity-90 active:opacity-95
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      <span className="flex-1 min-w-0 h-5 leading-5 truncate">
        {label}
      </span>
      <span
        className="flex shrink-0 items-center justify-center"
        aria-hidden
      >
        {/* Chevron-right icon – matches Font Awesome 6 Pro */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 320 512"
          fill="currentColor"
        >
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
      </span>
    </button>
  );
}
