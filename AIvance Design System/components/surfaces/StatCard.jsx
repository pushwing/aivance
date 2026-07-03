import React from 'react';

/** Dashboard metric widget (admin dashboards: 매출·주문·회원·방문자). */
export function StatCard({ label, value, unit, icon, delta, tone = 'brand', style, ...rest }) {
  const toneColor = {
    brand: 'var(--brand)', cura: 'var(--cura-500)', copia: 'var(--copia-500)', creo: 'var(--creo-500)',
    success: 'var(--success-500)', warning: 'var(--warning-500)', info: 'var(--info-500)',
  }[tone] || 'var(--brand)';
  const toneBg = {
    brand: 'var(--brand-subtle)', cura: 'var(--cura-50)', copia: 'var(--copia-50)', creo: 'var(--creo-50)',
    success: 'var(--success-100)', warning: 'var(--warning-100)', info: 'var(--info-100)',
  }[tone] || 'var(--brand-subtle)';
  const up = delta != null && delta >= 0;
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '.6rem',
      padding: 'var(--space-5)', background: 'var(--surface-card)',
      border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)', fontFamily: 'var(--font-sans)', ...style,
    }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', fontWeight: 'var(--fw-medium)' }}>{label}</span>
        {icon && (
          <span style={{ width: 34, height: 34, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            background: toneBg, color: toneColor, borderRadius: 'var(--radius-sm)', fontSize: '1rem' }}>
            <i className={`bi bi-${icon}`} aria-hidden="true" />
          </span>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '.25rem' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', fontWeight: 'var(--fw-bold)', color: 'var(--text-strong)', letterSpacing: 'var(--ls-tight)' }}>{value}</span>
        {unit && <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-muted)' }}>{unit}</span>}
      </div>
      {delta != null && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '.25rem', fontSize: 'var(--fs-xs)', fontWeight: 'var(--fw-semibold)', color: up ? 'var(--success-700)' : 'var(--danger-700)' }}>
          <i className={`bi bi-arrow-${up ? 'up' : 'down'}-right`} aria-hidden="true" />
          {Math.abs(delta)}% <span style={{ color: 'var(--text-subtle)', fontWeight: 'var(--fw-regular)' }}>전일 대비</span>
        </span>
      )}
    </div>
  );
}
