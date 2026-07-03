import React from 'react';

/** Rounded-pill chip — category filters, tags, removable selections. */
export function Tag({ children, active = false, accent, removable = false, onRemove, icon, as = 'span', style, ...rest }) {
  const color = accent
    ? { cura: 'var(--cura-500)', copia: 'var(--copia-500)', creo: 'var(--creo-500)' }[accent]
    : 'var(--brand)';
  const [hover, setHover] = React.useState(false);
  const El = as;
  const skin = active
    ? { background: color, color: '#fff', borderColor: color }
    : { background: '#fff', color: 'var(--text-body)', borderColor: hover ? 'var(--border-strong)' : 'var(--border-default)' };
  return (
    <El
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '.35rem',
        padding: '.3rem .85rem', fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-sm)',
        fontWeight: 'var(--fw-medium)', border: '1px solid transparent', borderRadius: 'var(--radius-pill)',
        cursor: (as === 'button' || as === 'a') ? 'pointer' : 'default', whiteSpace: 'nowrap',
        transition: 'all var(--dur-base)', textDecoration: 'none', ...skin, ...style,
      }}
      {...rest}
    >
      {icon && <i className={`bi bi-${icon}`} aria-hidden="true" />}
      {children}
      {removable && (
        <i className="bi bi-x" aria-hidden="true"
           onClick={(e) => { e.stopPropagation(); onRemove && onRemove(); }}
           style={{ marginRight: '-.2rem', opacity: .7, cursor: 'pointer' }} />
      )}
    </El>
  );
}
