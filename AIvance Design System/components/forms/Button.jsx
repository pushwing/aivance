import React from 'react';

/**
 * AIvance Button — the primary action primitive.
 * Variants map to the real Bootstrap-based product (solid brand, outline, ghost, subtle)
 * plus per-product accent theming.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  accent,            // 'cura' | 'copia' | 'creo' — overrides brand hue
  pill = false,
  block = false,
  disabled = false,
  iconLeft,
  iconRight,
  style,
  ...rest
}) {
  const accentColor = accent
    ? { cura: 'var(--cura-500)', copia: 'var(--copia-500)', creo: 'var(--creo-500)' }[accent]
    : 'var(--brand)';
  const accentHover = accent
    ? { cura: 'var(--cura-600)', copia: 'var(--copia-600)', creo: 'var(--creo-600)' }[accent]
    : 'var(--brand-hover)';

  const sizes = {
    sm: { padding: '.35rem .8rem', font: 'var(--fs-sm)', gap: '.35rem' },
    md: { padding: '.55rem 1.15rem', font: 'var(--fs-base)', gap: '.5rem' },
    lg: { padding: '.8rem 1.6rem', font: 'var(--fs-lg)', gap: '.55rem' },
  }[size];

  const base = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes.gap,
    padding: sizes.padding,
    fontFamily: 'var(--font-sans)',
    fontSize: sizes.font,
    fontWeight: 'var(--fw-semibold)',
    lineHeight: 1.2,
    borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.55 : 1,
    transition: 'background var(--dur-base), color var(--dur-base), border-color var(--dur-base), box-shadow var(--dur-base)',
    whiteSpace: 'nowrap',
  };

  const variants = {
    primary: { background: accentColor, color: '#fff', borderColor: accentColor },
    outline: { background: 'transparent', color: accentColor, borderColor: 'currentColor' },
    ghost:   { background: 'transparent', color: 'var(--text-body)', borderColor: 'transparent' },
    subtle:  { background: 'var(--brand-subtle)', color: accentHover, borderColor: 'transparent' },
    dark:    { background: 'var(--ink)', color: '#fff', borderColor: 'var(--ink)' },
  };

  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover
    ? (variant === 'primary'
        ? { background: accentHover, borderColor: accentHover }
        : variant === 'outline'
          ? { background: accentColor, color: '#fff' }
          : variant === 'ghost'
            ? { background: 'var(--surface-hover)' }
            : variant === 'dark'
              ? { background: 'var(--slate-800)' }
              : { background: 'var(--aiv-blue-100)' })
    : null;

  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...hoverStyle, ...style }}
      {...rest}
    >
      {iconLeft && <i className={`bi bi-${iconLeft}`} aria-hidden="true" />}
      {children}
      {iconRight && <i className={`bi bi-${iconRight}`} aria-hidden="true" />}
    </button>
  );
}
