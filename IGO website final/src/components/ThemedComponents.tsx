// ─── Pre-built Themed Components ─────────────────────────────────────────────
// Reusable, consistently-styled components using the centralized theme.
// Import: import { ThemedCard, ThemedButtonPrimary, ... } from '../components/ThemedComponents';

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { colors, spacing, typography, theme } from '../config/theme';

// ────────────────────────────────────────────────────────────────────────────────
// ThemedCard
// ────────────────────────────────────────────────────────────────────────────────
interface ThemedCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

export const ThemedCard: React.FC<ThemedCardProps> = ({
  children,
  className = '',
  hover = true,
  style,
}) => (
  <div
    className={`bg-agri-earth-50 border border-agri-earth-200 rounded-[2rem] transition-all duration-500
      ${hover ? 'hover:shadow-xl hover:-translate-y-1' : ''}
      ${className}`}
    style={{ padding: spacing[6], ...style }}
  >
    {children}
  </div>
);

// ────────────────────────────────────────────────────────────────────────────────
// ThemedButtonPrimary — #1A4231 green CTA
// ────────────────────────────────────────────────────────────────────────────────
interface ThemedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const ThemedButtonPrimary: React.FC<ThemedButtonProps> = ({
  children,
  onClick,
  href,
  className = '',
  type = 'button',
  disabled,
}) => {
  const baseClasses = `inline-flex items-center justify-center gap-3 px-10 py-4 
    bg-agri-green-800 text-white text-[10px] font-bold rounded-full 
    hover:bg-black transition-all uppercase tracking-[0.2em] 
    shadow-lg shadow-agri-green-800/20 disabled:opacity-50 disabled:cursor-not-allowed ${className}`;

  if (href) {
    return (
      <Link to={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {children}
    </button>
  );
};

// ────────────────────────────────────────────────────────────────────────────────
// ThemedButtonGold — #C5A03F gold accent CTA
// ────────────────────────────────────────────────────────────────────────────────
export const ThemedButtonGold: React.FC<ThemedButtonProps> = ({
  children,
  onClick,
  href,
  className = '',
  type = 'button',
  disabled,
}) => {
  const baseClasses = `inline-flex items-center justify-center gap-3 px-10 py-4 
    bg-agri-gold-500 text-white text-[10px] font-bold rounded-full 
    hover:bg-white hover:text-agri-green-800 transition-all uppercase tracking-widest 
    shadow-xl shadow-agri-gold-500/30 disabled:opacity-50 disabled:cursor-not-allowed ${className}`;

  if (href) {
    return (
      <Link to={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {children}
    </button>
  );
};

// ────────────────────────────────────────────────────────────────────────────────
// ThemedButtonSecondary — outlined/ghost
// ────────────────────────────────────────────────────────────────────────────────
export const ThemedButtonSecondary: React.FC<ThemedButtonProps> = ({
  children,
  onClick,
  href,
  className = '',
  type = 'button',
  disabled,
}) => {
  const baseClasses = `inline-flex items-center justify-center gap-2 px-8 py-3.5 
    border-2 border-black text-sm font-bold rounded-full 
    hover:bg-black hover:text-white transition-all ${className}`;

  if (href) {
    return (
      <Link to={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {children}
    </button>
  );
};

// ────────────────────────────────────────────────────────────────────────────────
// ThemedBadge — small label/tag
// ────────────────────────────────────────────────────────────────────────────────
interface ThemedBadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'gold' | 'mint' | 'earth';
  className?: string;
}

export const ThemedBadge: React.FC<ThemedBadgeProps> = ({
  children,
  variant = 'green',
  className = '',
}) => {
  const variants: Record<string, string> = {
    green: 'bg-agri-green-50 text-agri-green-800 border-agri-green-100',
    gold:  'bg-agri-gold-50 text-agri-gold-600 border-agri-gold-200',
    mint:  'bg-agri-mint-50 text-agri-mint-800 border-agri-mint-200',
    earth: 'bg-agri-earth-100 text-agri-earth-600 border-agri-earth-200',
  };

  return (
    <span className={`inline-block text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

// ────────────────────────────────────────────────────────────────────────────────
// ThemedSectionHeader — gold-line / heading / dot pattern
// ────────────────────────────────────────────────────────────────────────────────
interface ThemedSectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export const ThemedSectionHeader: React.FC<ThemedSectionHeaderProps> = ({
  label,
  title,
  subtitle,
  center = true,
  className = '',
}) => (
  <div className={`flex flex-col ${center ? 'items-center text-center' : 'items-start'} gap-4 mb-20 ${className}`}>
    <div className={`flex items-center gap-4 text-agri-gold-500 font-bold text-[10px] sm:text-xs uppercase tracking-[0.3em]`}>
      <div className="w-6 sm:w-10 h-[1px] bg-agri-gold-500" />
      {label}
      <div className="w-6 sm:w-10 h-[1px] bg-agri-gold-500" />
    </div>
    <h2 className="text-4xl md:text-5xl font-black text-agri-earth-900 tracking-tight">
      {title}
    </h2>
    <div className="flex gap-1.5 mt-2">
      <div className="w-12 h-1.5 bg-agri-green-700 rounded-full" />
      <div className="w-4 h-1.5 bg-agri-gold-500 rounded-full" />
    </div>
    {subtitle && (
      <p className="text-black/45 text-lg font-light max-w-xl leading-relaxed mt-2">
        {subtitle}
      </p>
    )}
  </div>
);

// ────────────────────────────────────────────────────────────────────────────────
// ThemedAlert — success/error/warning/info
// ────────────────────────────────────────────────────────────────────────────────
interface ThemedAlertProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  children: React.ReactNode;
  className?: string;
}

export const ThemedAlert: React.FC<ThemedAlertProps> = ({
  type = 'info',
  children,
  className = '',
}) => {
  const config: Record<string, { bg: string; text: string; border: string }> = {
    success: { bg: 'bg-green-50',  text: 'text-green-900',  border: 'border-green-200' },
    error:   { bg: 'bg-red-50',    text: 'text-red-900',    border: 'border-red-200' },
    warning: { bg: 'bg-yellow-50', text: 'text-yellow-900', border: 'border-yellow-200' },
    info:    { bg: 'bg-blue-50',   text: 'text-blue-900',   border: 'border-blue-200' },
  };

  const c = config[type];

  return (
    <div className={`${c.bg} ${c.text} ${c.border} border rounded-lg p-4 text-sm font-semibold ${className}`}>
      {children}
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────────
// ThemedGoldDivider — decorative gold line with text
// ────────────────────────────────────────────────────────────────────────────────
interface ThemedGoldDividerProps {
  width?: string;
  className?: string;
}

export const ThemedGoldDivider: React.FC<ThemedGoldDividerProps> = ({
  width = '3rem',
  className = '',
}) => (
  <div className={`h-[1px] bg-agri-gold-500 ${className}`} style={{ width }} />
);
