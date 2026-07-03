import React from 'react';

/** Checkbox with label. Also renders a radio when type="radio". */
export function Checkbox({ label, checked, defaultChecked, onChange, disabled, type = 'checkbox', accent, style, ...rest }) {
  const color = accent
    ? { cura: 'var(--cura-500)', copia: 'var(--copia-500)', creo: 'var(--creo-500)' }[accent]
    : 'var(--brand)';
  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: '.5rem',
      fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-sm)', color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.55 : 1, ...style,
    }}>
      <input
        type={type} checked={checked} defaultChecked={defaultChecked}
        onChange={onChange} disabled={disabled}
        style={{ width: 17, height: 17, accentColor: color, cursor: 'inherit', margin: 0 }}
        {...rest}
      />
      {label}
    </label>
  );
}
