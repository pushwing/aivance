import React from 'react';

/** Text input with label, optional leading icon, and validation state. */
export function Input({
  label,
  hint,
  error,
  icon,
  size = 'md',
  id,
  style,
  ...rest
}) {
  const autoId = React.useId();
  const inputId = id || autoId;
  const [focus, setFocus] = React.useState(false);
  const pad = { sm: '.4rem .7rem', md: '.6rem .85rem', lg: '.75rem 1rem' }[size];
  const fs = { sm: 'var(--fs-sm)', md: 'var(--fs-base)', lg: 'var(--fs-lg)' }[size];
  const borderColor = error ? 'var(--danger-500)' : focus ? 'var(--border-focus)' : 'var(--border-default)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '.35rem', fontFamily: 'var(--font-sans)' }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: 'var(--fs-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--text-body)' }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {icon && (
          <i className={`bi bi-${icon}`} aria-hidden="true"
             style={{ position: 'absolute', left: '.8rem', color: 'var(--text-subtle)', fontSize: '1rem', pointerEvents: 'none' }} />
        )}
        <input
          id={inputId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: '100%',
            padding: pad,
            paddingLeft: icon ? '2.4rem' : undefined,
            fontFamily: 'var(--font-sans)',
            fontSize: fs,
            color: 'var(--text-strong)',
            background: '#fff',
            border: `1px solid ${borderColor}`,
            borderRadius: 'var(--radius-sm)',
            outline: 'none',
            boxShadow: focus && !error ? 'var(--shadow-focus)' : error ? '0 0 0 3px var(--danger-100)' : 'none',
            transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
            ...style,
          }}
          {...rest}
        />
      </div>
      {(error || hint) && (
        <span style={{ fontSize: 'var(--fs-xs)', color: error ? 'var(--danger-500)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
