**Tag** — rounded-pill chip for category filters and removable selections.

```jsx
<Tag as="a" href="/shop" active>전체</Tag>
<Tag as="button" accent="copia">아우터</Tag>
<Tag removable onRemove={fn}>무료배송</Tag>
```

`active` fills it; `as="button"|"a"` makes it interactive.
