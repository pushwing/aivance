**PriceTag** — KRW price with optional discount strikethrough and rate.

```jsx
<PriceTag price={29000} />
<PriceTag price={29000} discountPrice={19900} showRate size="lg" />
```

Numbers are formatted `ko-KR` with a trailing 원. Discounted price renders red with the original struck through.
