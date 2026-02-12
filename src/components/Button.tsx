import React from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

/**
 * Primary Purple button – matches design system values exactly.
 * Colors and padding from .pen: fill #38539a, padding [9, 16], cornerRadius 32.
 */
export function Button({
  label,
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center gap-2
        h-9 w-[343px]
        py-[9px] px-4
        rounded-[32px]
        bg-[#38539a]
        text-[#ffffff]
        text-[14px] font-bold leading-[1.286]
        font-['GT_Walsheim_Pro',system-ui,sans-serif]
        transition-opacity
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:opacity-90 active:opacity-95
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {label}
    </button>
  );
}
