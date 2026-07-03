**ProductCard** — the shop grid tile (AICopia). 1:1 image, category, name, price, discount/sold-out/badge.

```jsx
<ProductCard name="베이직 코튼 티셔츠" category="상의" price={29000}
  discountPrice={19900} image="/img/tee.jpg" badge="NEW" />
```

Composes `PriceTag`. Prices are plain numbers in KRW; formatting (₩ / 원) is handled internally.
