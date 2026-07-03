**Alert** — inline feedback banner mirroring the product's session flash messages.

```jsx
<Alert tone="success">주문이 완료되었습니다.</Alert>
<Alert tone="danger" title="결제 실패" dismissible onDismiss={fn}>잠시 후 다시 시도해 주세요.</Alert>
```

Tones: `info | success | warning | danger | brand`. Each has a default icon; override with `icon`.
