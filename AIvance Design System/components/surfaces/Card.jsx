import React from 'react';

/** Generic surface card — the base container (.card, radius .75rem, soft shadow, hover lift). */
export function Card({ children, padding = 'md', interactive = false, accent, header, footer, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const pad = { none: 0, sm: 'var(--space-4)', md: 'var(--space-6)', lg: 'var(--space-8)' }[padding];
  const accentBar = accent
    ? { cura: 'var(--cura-500)', copia: 'var(--copia-500)', creo: 'var(--creo-500)' }[accent]
    : null;
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        background: 'var(--surface-card)', border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-md)', overflow: 'hidden',
        boxShadow: interactive && hover ? 'var(--shadow-lg)' : 'var(--shadow-card)',
        transform: interactive && hover ? 'var(--lift)' : 'none',
        transition: 'box-shadow var(--dur-base), transform var(--dur-base)',
        borderTop: accentBar ? `3px solid ${accentBar}` : undefined,
        fontFamily: 'var(--font-sans)', ...style,
      }}
      {...rest}
    >
      {header && <div style={{ padding: 'var(--space-4) var(--space-6)', borderBottom: '1px solid var(--border-subtle)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>{header}</div>}
      <div style={{ padding: pad, color: 'var(--text-body)', flex: 1 }}>{children}</div>
      {footer && <div style={{ padding: 'var(--space-4) var(--space-6)', borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-sunken)' }}>{footer}</div>}
    </div>
  );
}
