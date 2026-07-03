import React from 'react';

/** Small status/label badge. Mirrors the real product's badge system (SALE/NEW/PICK, grades). */
export function Badge({ children, tone = 'neutral', variant = 'solid', pill = true, icon, style, ...rest }) {
  const tones = {
    brand:   ['var(--brand)', 'var(--brand-subtle)', 'var(--brand-hover)'],
    neutral: ['var(--slate-600)', 'var(--slate-100)', 'var(--slate-700)'],
    ink:     ['var(--ink)', 'var(--slate-200)', 'var(--slate-800)'],
    success: ['var(--success-500)', 'var(--success-100)', 'var(--success-700)'],
    warning: ['var(--warning-500)', 'var(--warning-100)', 'var(--warning-700)'],
    danger:  ['var(--danger-500)', 'var(--danger-100)', 'var(--danger-700)'],
    info:    ['var(--info-500)', 'var(--info-100)', 'var(--info-700)'],
    cura:    ['var(--cura-500)', 'var(--cura-50)', 'var(--cura-600)'],
    copia:   ['var(--copia-500)', 'var(--copia-50)', 'var(--copia-600)'],
    creo:    ['var(--creo-500)', 'var(--creo-50)', 'var(--creo-600)'],
  };
  const [solid, subtleBg, subtleFg] = tones[tone] || tones.neutral;
  const skin = variant === 'solid'
    ? { background: solid, color: '#fff' }
    : variant === 'soft'
      ? { background: subtleBg, color: subtleFg }
      : { background: 'transparent', color: solid, border: `1px solid ${solid}` };

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '.3rem',
      padding: '.2em .6em', fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-semibold)', lineHeight: 1.4, letterSpacing: 'var(--ls-wide)',
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-xs)', whiteSpace: 'nowrap',
      ...skin, ...style,
    }} {...rest}>
      {icon && <i className={`bi bi-${icon}`} aria-hidden="true" />}
      {children}
    </span>
  );
}
