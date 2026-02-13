import React from 'react';
import { Surveybutton, type SurveyButtonVariant } from './Surveybutton';

export interface SurveyOption {
  /** Unique option id */
  id: string;
  /** Display label */
  label: string;
  /** Visual state variant */
  variant: SurveyButtonVariant;
  /** Whether this option is disabled */
  disabled?: boolean;
}

export interface SurveyProps {
  /** Survey options - defaults to design spec: OK (active), OK (inactive), That's Correct, That's Incorrect */
  options?: SurveyOption[];
  /** Currently selected/highlighted option id */
  selectedId?: string | null;
  /** Callback when an option is clicked */
  onOptionSelect?: (optionId: string, option: SurveyOption) => void;
  /** Callback when OK (active) is clicked */
  onOkClick?: () => void;
  /** Callback when That's Correct is clicked */
  onCorrectClick?: () => void;
  /** Callback when That's Incorrect is clicked */
  onIncorrectClick?: () => void;
  /** Callback when survey container is focused */
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
  /** Callback when survey container loses focus */
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  /** Callback when pointer enters survey */
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /** Callback when pointer leaves survey */
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /** Additional CSS classes */
  className?: string;
}

/** Default options matching Survey.pen design */
const DEFAULT_OPTIONS: SurveyOption[] = [
  { id: 'ok-active', label: 'OK', variant: 'active', disabled: false },
  { id: 'ok-inactive', label: 'OK', variant: 'inactive', disabled: true },
  { id: 'correct', label: "That's Correct", variant: 'correct', disabled: false },
  { id: 'incorrect', label: "That's Incorrect", variant: 'incorrect', disabled: false },
];

/** Radio O icon - 24x24, design-accurate from Survey.pen */
function RadioOIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04082 3.51021c2.26246 0 4.43225 0.89877 6.03205 2.49856 1.5998 1.5998 2.49856 3.76959 2.49856 6.03205 0 2.26246-0.89876 4.43225-2.49856 6.03205-1.5998 1.5998-3.76959 2.49856-6.03205 2.49856-2.26246 0-4.43225-0.89876-6.03205-2.49856-1.5998-1.5998-2.49857-3.76959-2.49857-6.03205 0-2.26246 0.89876-4.43225 2.49857-6.03205 1.5998-1.5998 3.76959-2.49857 6.03205-2.49857z m0 3.69682c-1.28201 0-2.51153 0.50922-3.41805 1.41574-0.90652 0.90652-1.41574 2.13604-1.41574 3.41805 0 1.28201 0.50922 2.51153 1.41574 3.41805 0.90652 0.90652 2.13604 1.41573 3.41805 1.41573 1.28201 0 2.51153-0.50922 3.41805-1.41573 0.90652-0.90652 1.41573-2.13604 1.41573-3.41805 0-1.28201-0.50922-2.51153-1.41573-3.41805-0.90652-0.90652-2.13604-1.41574-3.41805-1.41574z m9.95918 4.79297c0-5.52285-4.47715-10-10-10-5.52285 0-10 4.47715-10 10 0 5.52285 4.47715 10 10 10m0 2l0-2m0 2c-6.62742 0-12-5.37258-12-12 0-6.62742 5.37258-12 12-12 6.62742 0 12 5.37258 12 12 0 6.62742-5.37258 12-12 12z m0 0l0-2c5.52285 0 10-4.47715 10-10" />
    </svg>
  );
}

/** X icon - 24x24, design-accurate from Survey.pen */
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.98595 5.44586c0.73051-0.73052 1.91601-0.73052 2.64652 0 0.7304 0.73044 0.73043 1.91568 0.00016 2.6462l-3.94531 3.94826 3.94826 3.9454c0.73049 0.73052 0.73067 1.91625 0.00016 2.64676-0.73043 0.73041-1.91575 0.73049-2.64628 0.00024l-3.94826-3.94539-3.94532 3.94826c-0.73051 0.73051-1.91625 0.73066-2.64676 0.00016-0.7305-0.73052-0.73051-1.91601 0-2.64653l3.94507-3.94802-3.94818-3.94531c-0.73051-0.73051-0.73067-1.91625-0.00016-2.64677 0.73044-0.73042 1.91575-0.73051 2.64629-0.00023l3.94818 3.94531 3.94563-3.94834z m6.01405 6.55414c0-5.52285-4.47715-10-10-10-5.52285 0-10 4.47715-10 10 0 5.52285 4.47715 10 10 10m0 2l0-2m0 2l-0.30957-0.00391c-6.38147-0.16159-11.52493-5.30505-11.68652-11.68652l-0.00391-0.30957c0-6.62742 5.37258-12 12-12l0.30957 0.00391c6.48434 0.1642 11.69043 5.47218 11.69043 11.99609l-0.00391 0.30957c-0.1642 6.48434-5.47218 11.69043-11.99609 11.69043z m0 0l0-2c5.52285 0 10-4.47715 10-10" />
    </svg>
  );
}

/** Thumbs-up icon - 20x20, design-accurate from Survey.pen */
function ThumbsUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={20} height={20} viewBox="0 0 384 512" fill="currentColor">
      <path d="M171.7 38.80358c20.8-34.8 65.00001-48.8 102.50001-31.2l7.20001 3.8c34.79999 20.9 48.79999 65.1 31.19999 102.6l-14.10001 29.99999 109.70001 0 7.4 0.39999c36.29998 3.7 64.6 34.40001 64.6 71.60001 0 13.2-3.59997 25.39999-9.79999 36 6.10001 10.60001 9.69999 22.79999 9.79999 36 0 18.29999-6.89999 34.79999-18 47.5 1.29999 5.29999 2 10.79999 2 16.5 0 25.10001-12.90002 47-32.20001 59.89999-1.89999 35.5-29.39999 64.20002-64.39999 67.70002l-7.4 0.39999-104.1 0c-18 0-35.90001-3.39999-52.60001-9.89999l-7.10001-3-0.69999-0.30002-6.60001-3.19998-0.7-0.30002-12.19999-6.5c-12.30001-6.5-23.29999-14.69998-32.9-24.09998-4.1 26.9-27.3 47.4-55.3 47.4l-32 0c-30.9 0-56-25.10001-56-56l0.2-224.10001c0-30.89999 25.1-56 56-56l32 0c10.8 0 20.9 3.10001 29.5 8.5l50.1-106.49999 0.59999-1.2 2.7-5 0.60001-0.9 0-0.1z" />
    </svg>
  );
}

/** Thumbs-down icon - 20x20, design-accurate from Survey.pen */
function ThumbsDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={20} height={20} viewBox="0 0 384 512" fill="currentColor">
      <path d="M360.10001 0l7.39999 0.4c35 3.6 62.5 32.2 64.39999 67.7 17.79999 11.8 30.10001 31.4 32 53.9l0.20002 6c0 5.7-0.70002 11.2-2 16.5 10.20001 11.5 16.79998 26.3 17.79998 42.7l0.20002 4.8c0 13.2-3.59998 25.39999-9.79999 36 4.89999 8.39999 8.19998 17.89999 9.29999 28l0.39999 8c0 37.29999-28.30002 67.89999-64.60001 71.60001l-7.39999 0.39999-109.69998 0 14.09997 30 3.10001 7.60001c12.5 35.70001-1.79999 75.5-34.19998 95l-7.20001 3.89999c-37.5 17.60001-81.70002 3.59998-102.60001-31.20001l-0.59999-0.9-2.7-5-0.6-1.19998-30.10001-64c-9.39999 17.79999-28 29.9-49.5 29.9l-32 0c-30.9 0-56-25.10001-56-56l0.1-224.10001c0-30.9 25.1-56 56-56l32 0c12.4 0 23.89999 4.1 33.2 11 13.2-21.4 32-39.4 55-51.6l12.2-6.5 0.70001-0.3 6.59999-3.2 0.7-0.3 7.10001-3c16.69999-6.6 34.5-9.9 52.6-9.9l103.9-0.2z" />
    </svg>
  );
}

function getIconForOption(option: SurveyOption): React.ReactNode | undefined {
  switch (option.variant) {
    case 'active':
    case 'inactive':
      return <RadioOIcon />;
    case 'correct':
      return (
        <span className="flex items-center gap-2">
          <RadioOIcon />
          <ThumbsUpIcon />
        </span>
      );
    case 'incorrect':
      return (
        <span className="flex items-center gap-2">
          <ThumbsDownIcon />
          <XIcon />
        </span>
      );
    default:
      return undefined;
  }
}

/**
 * Survey – 100% design fidelity to Survey.pen.
 * Container: w 383px, h 324px, rounded 5px, border #9747ff 1px.
 * Padding 20px, gap 20px between options.
 * Options: 4 buttons (OK active, OK inactive, That's Correct, That's Incorrect).
 */
export function Survey({
  options = DEFAULT_OPTIONS,
  selectedId = null,
  onOptionSelect,
  onOkClick,
  onCorrectClick,
  onIncorrectClick,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
  className = '',
}: SurveyProps) {
  const handleOptionClick = (option: SurveyOption) => {
    onOptionSelect?.(option.id, option);
    if (option.id === 'ok-active') onOkClick?.();
    if (option.id === 'correct') onCorrectClick?.();
    if (option.id === 'incorrect') onIncorrectClick?.();
  };

  return (
    <div
      role="group"
      aria-label="Survey"
      tabIndex={0}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        w-[383px] overflow-hidden rounded-[5px] border p-5
        border-[#9747ff] bg-white
        flex flex-col gap-5
        outline-none focus:ring-2 focus:ring-[#9747ff] focus:ring-offset-2
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      style={{ minHeight: 324 }}
    >
      {options.map((option) => {
        const icon = getIconForOption(option);
        return (
          <Surveybutton
            key={option.id}
            variant={option.variant}
            disabled={option.disabled}
            icon={icon}
            iconPosition="left"
            buttonStyle="outline"
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </Surveybutton>
        );
      })}
    </div>
  );
}
