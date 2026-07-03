**StatCard** — a single KPI widget for admin dashboards.

```jsx
<StatCard label="오늘 매출" value="₩3,240,000" icon="graph-up-arrow" delta={12} />
<StatCard label="미읽음 문의" value={7} unit="건" tone="warning" icon="envelope" />
```

`delta` sign picks the up/down arrow and success/danger color.
