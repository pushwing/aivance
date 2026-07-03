import React from 'react';

const won = (n) => new Intl.NumberFormat('ko-KR').format(n) + '원';

/** Price display with optional strikethrough original + discount rate. */
export function PriceTag({ price, discountPrice = null, size = 'md', showRate = false, style, ...rest }) {
  const has = discountPrice != null;
  const display = has ? discountPrice : price;
  const rate = has && price ? Math.round((1 - discountPrice / price) * 100) : 0;
  const fs = { sm: 'var(--fs-sm)', md: 'var(--fs-lg)', lg: 'var(--fs-h3)' }[size];
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: '.4rem', fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      {has && showRate && (
        <span style={{ color: 'var(--danger-500)', fontWeight: 'var(--fw-bold)', fontSize: fs }}>{rate}%</span>
      )}
      {has && (
        <span style={{ color: 'var(--text-subtle)', textDecoration: 'line-through', fontSize: 'var(--fs-sm)' }}>{won(price)}</span>
      )}
      <span style={{ color: has ? 'var(--danger-500)' : 'var(--text-strong)', fontWeight: 'var(--fw-bold)', fontSize: fs }}>{won(display)}</span>
    </span>
  );
}
