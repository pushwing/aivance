import React from 'react';
import { PriceTag } from './PriceTag.jsx';

/** Product grid card — faithful recreation of AICopia's .product-card
 *  (1:1 image, category, truncated name, price, discount/sold-out/pick badges, hover shadow). */
export function ProductCard({
  name, category, price, discountPrice = null, image,
  soldOut = false, badge, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const rate = discountPrice != null && price ? Math.round((1 - discountPrice / price) * 100) : 0;
  return (
    <a
      href="#" onClick={(e) => e.preventDefault()}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ textDecoration: 'none', color: 'inherit', display: 'block', ...style }}
      {...rest}
    >
      <div style={{
        display: 'flex', flexDirection: 'column', height: '100%',
        background: 'var(--surface-card)', border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-md)', overflow: 'hidden',
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        transition: 'box-shadow var(--dur-base)', fontFamily: 'var(--font-sans)',
      }}>
        <div style={{ position: 'relative', aspectRatio: '1', background: 'var(--surface-sunken)', overflow: 'hidden' }}>
          {image
            ? <img src={image} alt={name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-subtle)', fontSize: '2rem' }}><i className="bi bi-image" /></div>}
          {badge && (
            <span style={{ position: 'absolute', top: 8, left: 8, background: 'var(--ink)', color: '#fff',
              fontSize: 'var(--fs-xs)', fontWeight: 'var(--fw-semibold)', padding: '.2em .55em', borderRadius: 'var(--radius-xs)', letterSpacing: 'var(--ls-wide)' }}>{badge}</span>
          )}
          {discountPrice != null && !soldOut && (
            <span style={{ position: 'absolute', top: 8, right: 8, background: 'var(--danger-500)', color: '#fff',
              fontSize: 'var(--fs-xs)', fontWeight: 'var(--fw-bold)', padding: '.2em .5em', borderRadius: 'var(--radius-xs)' }}>{rate}%</span>
          )}
          {soldOut && (
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,.42)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ background: 'var(--ink)', color: '#fff', fontSize: 'var(--fs-sm)', fontWeight: 'var(--fw-semibold)', padding: '.3em .8em', borderRadius: 'var(--radius-xs)' }}>품절</span>
            </div>
          )}
        </div>
        <div style={{ padding: 'var(--space-3)' }}>
          {category && <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', marginBottom: '.2rem' }}>{category}</div>}
          <div style={{ fontSize: 'var(--fs-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</div>
          <div style={{ marginTop: '.35rem' }}>
            <PriceTag price={price} discountPrice={discountPrice} size="sm" />
          </div>
        </div>
      </div>
    </a>
  );
}
