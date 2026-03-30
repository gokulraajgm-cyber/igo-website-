// ─── IGO Agritech Farms — Centralized Theme Configuration ────────────────────
// Single source of truth for all design tokens.
// Import from: import { colors, spacing, typography, theme } from '../config/theme';

// ────────────────────────────────────────────────────────────────────────────────
// COLORS
// ────────────────────────────────────────────────────────────────────────────────

export const colors = {
  /** Primary brand green — built around #1A4231 */
  green: {
    25:  '#F0FDF4',
    50:  '#E8F5E9',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#1F4529',
    800: '#1A4231',
    900: '#0D1F15',
    950: '#0A1510',
  },

  /** Neutral earth tones */
  earth: {
    15:  '#FDFDFD',
    25:  '#FAFAFA',
    50:  '#F4F8F4',
    75:  '#F8F8F8',
    100: '#F5F5F7',
    150: '#F0F0F2',
    200: '#e0ede0',
    300: '#D6D3D1',
    400: '#A8A29E',
    500: '#78716C',
    600: '#57534E',
    700: '#44403C',
    800: '#292524',
    900: '#1A1A1A',
    950: '#0A0A0A',
  },

  /** Gold accent — built around #C5A03F */
  gold: {
    50:  '#FDF8E8',
    100: '#FAF0C7',
    200: '#F5E08A',
    300: '#ECCC4D',
    400: '#D4B33F',
    500: '#C5A03F',
    600: '#B08A2E',
    700: '#8A6B1D',
    800: '#6B5216',
    900: '#4A3A10',
  },

  /** Mint accent — built around #6FD898 */
  mint: {
    50:  '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6FD898',
    400: '#6FD898',
    500: '#34D399',
    600: '#10B981',
    700: '#059669',
    800: '#047857',
    900: '#065F46',
  },

  /** Yellow — for warnings/alerts */
  yellow: {
    50:  '#FEFCE8',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },

  /** Semantic status colors */
  status: {
    success: '#22C55E',
    error:   '#EF4444',
    warning: '#F59E0B',
    info:    '#3B82F6',
  },

  /** Social brand colors */
  social: {
    whatsapp:  '#25D366',
    facebook:  '#1877F2',
    instagram: '#E4405F',
    twitter:   '#1DA1F2',
    linkedin:  '#0A66C2',
    youtube:   '#FF0000',
  },

  /** Legacy amber aliases */
  amber: {
    400: '#FBBF24',
    500: '#F59E0B',
  },
} as const;

// ────────────────────────────────────────────────────────────────────────────────
// TYPOGRAPHY
// ────────────────────────────────────────────────────────────────────────────────

export const typography = {
  fonts: {
    sans:    "'Inter', system-ui, -apple-system, sans-serif",
    display: "'Inter', system-ui, -apple-system, sans-serif",
    brand:   "'Geist', 'Inter', sans-serif",
    serif:   "Georgia, 'Times New Roman', serif",
  },

  sizes: {
    xs:   '0.75rem',    // 12px
    sm:   '0.875rem',   // 14px
    base: '1rem',       // 16px
    lg:   '1.125rem',   // 18px
    xl:   '1.25rem',    // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },

  weights: {
    light:    300,
    normal:   400,
    medium:   500,
    semibold: 600,
    bold:     700,
    black:    900,
  },

  lineHeights: {
    tight:   1.2,
    snug:    1.375,
    normal:  1.5,
    relaxed: 1.625,
    loose:   2,
  },
} as const;

// ────────────────────────────────────────────────────────────────────────────────
// SPACING (4px base unit)
// ────────────────────────────────────────────────────────────────────────────────

export const spacing = {
  0:  '0',
  1:  '0.25rem',   // 4px
  2:  '0.5rem',    // 8px
  3:  '0.75rem',   // 12px
  4:  '1rem',      // 16px
  5:  '1.25rem',   // 20px
  6:  '1.5rem',    // 24px
  8:  '2rem',      // 32px
  10: '2.5rem',    // 40px
  12: '3rem',      // 48px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
} as const;

// ────────────────────────────────────────────────────────────────────────────────
// THEME OBJECT (aggregates everything)
// ────────────────────────────────────────────────────────────────────────────────

export const theme = {
  colors,
  typography,
  spacing,

  borderRadius: {
    none: '0',
    sm:   '0.25rem',
    md:   '0.5rem',
    lg:   '0.75rem',
    xl:   '1rem',
    '2xl': '1.25rem',
    '3xl': '1.5rem',
    '4xl': '2rem',
    '5xl': '2.5rem',
    full: '9999px',
  },

  shadows: {
    xs:   '0 1px 2px rgba(0,0,0,0.05)',
    sm:   '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
    md:   '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
    lg:   '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
    xl:   '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
    '2xl': '0 25px 50px -12px rgba(0,0,0,0.25)',
  },

  zIndex: {
    hide:     -1,
    base:     0,
    docked:   10,
    dropdown: 20,
    sticky:   30,
    banner:   40,
    overlay:  50,
    modal:    60,
    popover:  70,
    tooltip:  80,
    toast:    90,
  },

  animations: {
    durations: {
      fast:   '100ms',
      base:   '200ms',
      slow:   '300ms',
      slower: '500ms',
    },

    easings: {
      linear:    'linear',
      easeIn:    'ease-in',
      easeOut:   'ease-out',
      easeInOut: 'ease-in-out',
      smooth:    'cubic-bezier(0.4, 0, 0.2, 1)',
      spring:    'cubic-bezier(0.16, 1, 0.3, 1)',
    },

    motion: {
      fadeIn: {
        initial:  { opacity: 0 },
        animate:  { opacity: 1 },
      },
      slideInUp: {
        initial:  { opacity: 0, y: 10 },
        animate:  { opacity: 1, y: 0 },
      },
      slideInLeft: {
        initial:  { opacity: 0, x: -20 },
        animate:  { opacity: 1, x: 0 },
      },
      scaleIn: {
        initial:  { opacity: 0, scale: 0.95 },
        animate:  { opacity: 1, scale: 1 },
      },
    },
  },
} as const;

// ────────────────────────────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ────────────────────────────────────────────────────────────────────────────────

type ColorPalette = keyof typeof colors;
type ColorShade<P extends ColorPalette> = keyof (typeof colors)[P];

/** Get a color value: getColor('green', 800) → '#1A4231' */
export function getColor<P extends ColorPalette>(palette: P, shade: ColorShade<P>): string {
  return (colors[palette] as Record<string | number, string>)[shade as string | number];
}

/** Get a spacing value: getSpacing(6) → '1.5rem' */
export function getSpacing(key: keyof typeof spacing): string {
  return spacing[key];
}

/** Get a font size: getFontSize('lg') → '1.125rem' */
export function getFontSize(key: keyof typeof typography.sizes): string {
  return typography.sizes[key];
}

// Default export
export default theme;
