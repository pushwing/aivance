**Select** — styled native dropdown, matches Input geometry.

```jsx
<Select label="정렬" options={['인기순','신상품순','가격 낮은순']} />
<Select label="카테고리" options={[{value:'1',label:'상의'},{value:'2',label:'하의'}]} />
```

Pass `options` (strings or `{value,label}`) or `<option>` children.
