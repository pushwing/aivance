import React from 'react';

/** Icon-only button — toolbar, cart, wishlist, close. Uses Bootstrap Icons. */
export function IconButton({
  icon,
  variant = 'outline',
  size = 'md',
  accent,
  rounded = 'md',
  disabled = false,
  label,
  style,
  ...rest
}) {
  const accentColor = accent
    ? { cura: 'var(--cura-500)', copia: 'var(--copia-500)', creo: 'var(--creo-500)' }[accent]
    : 'var(--brand)';
  const dim = { sm: 32, md: 40, lg: 48 }[size];
  const fs = { sm: '.9rem', md: '1.05rem', lg: '1.25rem' }[size];
  const [hover, setHover] = React.useState(false);

  const variants = {
    solid:   { background: accentColor, color: '#fff', borderColor: accentColor },
    outline: { background: '#fff', color: 'var(--text-body)', borderColor: 'var(--border-default)' },
    ghost:   { background: 'transparent', color: 'var(--text-muted)', borderColor: 'transparent' },
  };
  const hoverStyle = !disabled && hover
    ? (variant === 'solid'
        ? { filter: 'brightness(.93)' }
        : { background: 'var(--surface-hover)', color: accentColor, borderColor: 'var(--border-strong)' })
    : null;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: dim, height: dim,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontSize: fs,
        border: '1px solid transparent',
        borderRadius: rounded === 'pill' ? 'var(--radius-pill)' : 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.55 : 1,
        transition: 'all var(--dur-base)',
        ...variants[variant], ...hoverStyle, ...style,
      }}
      {...rest}
    >
      <i className={`bi bi-${icon}`} aria-hidden="true" />
    </button>
  );
}
