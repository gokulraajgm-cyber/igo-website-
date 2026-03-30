// ─── CSS Variable Injection ──────────────────────────────────────────────────
// Reads from theme.ts and injects CSS custom properties on :root.
// Called once in main.tsx at app boot.

import { colors, spacing, typography, theme } from '../config/theme';

/**
 * Injects all theme tokens as CSS custom properties on :root.
 * This makes theme values available for use in stylesheets:
 *   color: var(--color-green-800);
 *   padding: var(--spacing-4);
 *   font-size: var(--font-size-lg);
 */
export function injectCSSVariables(): void {
  const root = document.documentElement;

  // ── Colors ──
  const colorPalettes: Record<string, Record<string | number, string>> = {
    green: colors.green,
    earth: colors.earth,
    gold:  colors.gold,
    mint:  colors.mint,
    yellow: colors.yellow,
  };

  for (const [palette, shades] of Object.entries(colorPalettes)) {
    for (const [shade, value] of Object.entries(shades)) {
      root.style.setProperty(`--color-${palette}-${shade}`, value);
    }
  }

  // Status colors
  for (const [key, value] of Object.entries(colors.status)) {
    root.style.setProperty(`--color-status-${key}`, value);
  }

  // Social colors
  for (const [key, value] of Object.entries(colors.social)) {
    root.style.setProperty(`--color-social-${key}`, value);
  }

  // ── Spacing ──
  for (const [key, value] of Object.entries(spacing)) {
    root.style.setProperty(`--spacing-${key}`, value);
  }

  // ── Typography ──
  for (const [key, value] of Object.entries(typography.sizes)) {
    root.style.setProperty(`--font-size-${key}`, value);
  }

  for (const [key, value] of Object.entries(typography.weights)) {
    root.style.setProperty(`--font-weight-${key}`, String(value));
  }

  for (const [key, value] of Object.entries(typography.lineHeights)) {
    root.style.setProperty(`--line-height-${key}`, String(value));
  }

  for (const [key, value] of Object.entries(typography.fonts)) {
    root.style.setProperty(`--font-${key}`, value);
  }

  // ── Border Radius ──
  for (const [key, value] of Object.entries(theme.borderRadius)) {
    root.style.setProperty(`--radius-${key}`, value);
  }

  // ── Shadows ──
  for (const [key, value] of Object.entries(theme.shadows)) {
    root.style.setProperty(`--shadow-${key}`, value);
  }

  // ── Z-Index ──
  for (const [key, value] of Object.entries(theme.zIndex)) {
    root.style.setProperty(`--z-${key}`, String(value));
  }

  // ── Animation Durations ──
  for (const [key, value] of Object.entries(theme.animations.durations)) {
    root.style.setProperty(`--duration-${key}`, value);
  }
}
