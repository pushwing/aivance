import React from 'react';

/** Native select styled to match AIvance inputs. */
export function Select({ label, hint, error, size = 'md', options = [], id, children, style, ...rest }) {
  const autoId = React.useId();
  const selId = id || autoId;
  const [focus, setFocus] = React.useState(false);
  const pad = { sm: '.4rem .7rem', md: '.6rem .85rem', lg: '.75rem 1rem' }[size];
  const fs = { sm: 'var(--fs-sm)', md: 'var(--fs-base)', lg: 'var(--fs-lg)' }[size];
  const borderColor = error ? 'var(--danger-500)' : focus ? 'var(--border-focus)' : 'var(--border-default)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '.35rem', fontFamily: 'var(--font-sans)' }}>
      {label && (
        <label htmlFor={selId} style={{ fontSize: 'var(--fs-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--text-body)' }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <select
          id={selId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: '100%', padding: pad, paddingRight: '2.2rem',
            fontFamily: 'var(--font-sans)', fontSize: fs, color: 'var(--text-strong)',
            background: '#fff', border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-sm)',
            appearance: 'none', outline: 'none', cursor: 'pointer',
            boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
            transition: 'border-color var(--dur-base), box-shadow var(--dur-base)', ...style,
          }}
          {...rest}
        >
          {children || options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lbl = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lbl}</option>;
          })}
        </select>
        <i className="bi bi-chevron-down" aria-hidden="true"
           style={{ position: 'absolute', right: '.85rem', color: 'var(--text-subtle)', fontSize: '.8rem', pointerEvents: 'none' }} />
      </div>
      {(error || hint) && (
        <span style={{ fontSize: 'var(--fs-xs)', color: error ? 'var(--danger-500)' : 'var(--text-muted)' }}>{error || hint}</span>
      )}
    </div>
  );
}
