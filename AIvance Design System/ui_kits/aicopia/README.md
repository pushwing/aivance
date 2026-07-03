# AICopia — Storefront UI Kit

AI 커머스 솔루션의 고객 대면 스토어프론트를 재현한 인터랙티브 click-through입니다.

- **index.html** — 진입점. `styles.css` + `_ds_bundle.js`를 로드하고 `app.jsx`를 마운트합니다.
- **app.jsx** — Navbar · Hero · 카테고리 필터 · 상품 섹션(기획전/신상품/할인) · 상품 상세 · 슬라이드 장바구니 드로어.

**Interactions**: 카테고리 칩으로 필터, 상품 클릭 → 상세, 수량 조절 + 장바구니 담기, 우상단 카트 → 드로어.

**Components used**: Button, IconButton, Badge, Tag, ProductCard, PriceTag, Input, Alert. 브랜드 액센트는 `copia`(violet).

원본: [pushwing/AICopia](https://github.com/pushwing/AICopia) `app/Views/shop/`.
