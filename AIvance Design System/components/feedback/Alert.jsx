import React from 'react';

/** Dismissible alert. Mirrors the product's success/warning/danger session flashes. */
export function Alert({ children, tone = 'info', title, icon, dismissible = false, onDismiss, style, ...rest }) {
  const tones = {
    info:    ['var(--info-100)', 'var(--info-700)', 'var(--info-500)', 'info-circle-fill'],
    success: ['var(--success-100)', 'var(--success-700)', 'var(--success-500)', 'check-circle-fill'],
    warning: ['var(--warning-100)', 'var(--warning-700)', 'var(--warning-500)', 'exclamation-triangle-fill'],
    danger:  ['var(--danger-100)', 'var(--danger-700)', 'var(--danger-500)', 'x-circle-fill'],
    brand:   ['var(--brand-subtle)', 'var(--brand-active)', 'var(--brand)', 'stars'],
  };
  const [bg, fg, accent, defIcon] = tones[tone] || tones.info;
  return (
    <div role="alert" style={{
      display: 'flex', alignItems: 'flex-start', gap: '.7rem',
      padding: '.85rem 1rem', background: bg, color: fg,
      borderRadius: 'var(--radius-md)', borderLeft: `3px solid ${accent}`,
      fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-sm)', lineHeight: 'var(--lh-snug)', ...style,
    }} {...rest}>
      <i className={`bi bi-${icon || defIcon}`} aria-hidden="true" style={{ color: accent, fontSize: '1.05rem', marginTop: '.05rem' }} />
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontWeight: 'var(--fw-semibold)', marginBottom: '.15rem' }}>{title}</div>}
        <div>{children}</div>
      </div>
      {dismissible && (
        <button type="button" onClick={onDismiss} aria-label="닫기"
          style={{ background: 'none', border: 'none', color: fg, opacity: .6, cursor: 'pointer', fontSize: '1rem', lineHeight: 1, padding: 0 }}>
          <i className="bi bi-x-lg" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
