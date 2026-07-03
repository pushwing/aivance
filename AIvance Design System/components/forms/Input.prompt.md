**Input** — labelled text field with optional leading icon and validation state.

```jsx
<Input label="이메일" icon="envelope" placeholder="you@aivance.kr" />
<Input label="비밀번호" type="password" error="8자 이상 입력하세요" />
```

Pass `error` to show a red field + message; `hint` for helper text. `size` = sm | md | lg.
