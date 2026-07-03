# AIvance Design System

**AIvance** (AI + Advance) — AI로 업무 효율성을 높이는 실전형 소프트웨어 솔루션. 검증된 CodeIgniter 4(PHP) 백엔드 위에 실무에 바로 투입 가능한 AI 자동화를 얹어, 성형·의료 광고 / 이커머스 / 기업 홈페이지 세 영역의 솔루션을 제공합니다.

이 디자인 시스템은 AIvance **모(母) 브랜드**와 세 제품(AICura · AICopia · AICreo)의 공통 디자인 언어를 정의합니다. 실제 제품 스택(Bootstrap 5 · Bootstrap Icons · Noto Sans KR · CI4 테마 시스템)에 뿌리를 두고, "AI 시대에 맞는 혁신적" 정체성으로 끌어올렸습니다.

## 핵심 철학 (제품 전반의 톤을 결정)

- **실전 코드, 데모 아님** — PHPUnit · PHPStan · CI/CD를 갖춘 프로덕션 레벨 코드베이스.
- **AI는 도구, 핵심은 업무 자동화** — 화려한 챗봇이 아니라 리포트 작성·상품 설명·문의 분류 같은 실제 반복 업무를 대신 처리.
- **비용 최적화형 AI** — LLM은 꼭 필요한 곳에만, 나머지는 휴리스틱.
- **빠른 납품, 유지보수 가능한 구조** — 코어 재사용 + 테마(껍데기) 교체.

## 제품 라인업

| 제품 | 도메인 | 한 줄 소개 | 액센트 |
|------|--------|-----------|--------|
| **AICura** | cura.aivance.kr | AI 기반 성형·토탈 광고 솔루션 | Teal `#12B3A6` |
| **AICopia** | copia.aivance.kr | AI로 업무 효율을 높이는 쇼핑몰 솔루션 | Violet `#7C3AED` |
| **AICreo** | creo.aivance.kr | 빠른 납품형 기업 홈페이지·CMS 솔루션 | Rose `#F0568C` |

세 제품은 **AI + 라틴어 어근** 네이밍을 공유합니다 — *Cura*(돌봄), *Copia*(풍요·공급), *Creo*(창조).

## 소스 (Sources)

이 시스템은 아래 자료에서 도출했습니다. 열람 권한이 있다면 더 정밀한 작업을 위해 직접 탐색하길 권합니다.

- **GitHub — [pushwing/aivance](https://github.com/pushwing/aivance)** : 회사 홈페이지 저장소 (탐색 시점 기준 **비어 있음** → 로고/브랜드 에셋 없음).
- **GitHub — [pushwing/AICopia](https://github.com/pushwing/AICopia)** : AI 쇼핑몰 솔루션 (CI4). `app/Views/shop/`, `public/themes/default/css/style.css` 참고.
- **GitHub — [pushwing/AICreo](https://github.com/pushwing/AICreo)** : 기업 홈페이지 보일러플레이트 (CI4). 테마 시스템·샘플 테마(dark/violet/spring) 참고.
- **문서 — `uploads/AIvance_회사소개서.md`** : 회사 개요·제품 상세·기술 스택·톤.

> **로고**: 제공된 소스에 로고가 없어, AIvance용 **오리지널 로고를 신규 디자인**했습니다 — *Signal Path* 마크(우상향 데이터 노드, AI·데이터·성장 은유) + Space Grotesk 워드마크(`AI`만 브랜드 컬러). 에셋: `assets/logo-mark.svg`(2톤 블루), `assets/logo-mark-white.svg`(다크 배경용), `assets/logo-mark-mono.svg`(currentColor — 제품 액센트 틴트용). 제품 서피스에서는 마크를 각 제품 액센트로 틴트해 사용합니다.

---

## CONTENT FUNDAMENTALS — 카피는 이렇게 씁니다

- **언어**: 한국어(존댓말·해요/합니다체). UI 라벨은 간결한 명사형(“장바구니”, “주문내역”, “전체보기”). 제품/기술 고유명사는 영문 그대로(CodeIgniter 4, TinyMCE, PG).
- **인칭**: 사용자를 직접 “당신”이라 부르지 않음. 시스템이 사용자를 위해 **대신 처리**한다는 서술형("매일 AI가 요약해 드립니다", "재고 소진이 임박한 상품에 발주를 제안합니다").
- **톤**: 신뢰·실무·구체성. 과장·환상 금지. 숫자와 기간으로 말한다("3~5일 납품", "전일 대비 18% 증가", "7종 PG"). "혁신"은 결과(빠름·자동화·안정성)로 증명하지, 형용사로 외치지 않는다.
- **케이싱**: 한글 본문은 문장형. 영문 라벨/에이브로우는 대문자 + 넓은 자간(`LABEL`, `NEW`, `SALE`, `PICK`). 제품명은 카멜식 `AICopia`(AI 대문자 강조).
- **이모지**: **사용하지 않음**. 아이콘은 Bootstrap Icons로 대체.
- **배지 언어**: 상태는 짧은 한글 또는 영문 관용어 — `NEW`·`SALE`·`PICK`(마케팅), `결제완료`·`배송준비`·`품절`(주문 상태).

**예시** (do): "취향을 아는 쇼핑, 운영은 AI가 대신합니다." · "코어는 재사용하고 디자인만 교체." · "뷰티풀 의원의 광고비가 94% 소진되어 재충전이 필요합니다."
**금지** (don't): "세상을 바꾸는 혁신적 AI ✨" · "🚀 게임체인징 차세대 솔루션" · "놀라운 마법 같은 경험!"

자세한 대비는 Design System 탭 → **Brand › Voice & Tone** 카드 참고.

---

## VISUAL FOUNDATIONS

- **컬러 vibe**: 신뢰감 있는 슬레이트 뉴트럴 위에 채도 높은 **Advance Blue**(`#2563EB`)를 액션에 사용. AI 관련 강조에는 **Signal Indigo**(`#6D5EF6`). 각 제품은 고유 액센트(teal/violet/rose)로 구분하되, 뉴트럴·타이포·간격 시스템은 공유. 실제 제품의 primary(`#0d6efd`)와 ink(`#1e2a38`)를 계승·정제.
- **타이포그래피**: 본문·UI는 **Noto Sans KR**(400/500/700/900). 워드마크·헤드라인·숫자는 **Space Grotesk**(라틴 어근 네이밍과 호응하는 기하학적 산세리프). 코드/설정 값은 **JetBrains Mono**. 스케일 12→56px, 헤드라인은 음의 자간(`-0.02em`).
- **배경**: 페이지는 `--slate-50`(#F8FAFC), 카드/네비/컨텐츠는 흰색. 제품 히어로는 **브랜드 컬러 그라디언트**(예: AICopia 딥 퍼플 `135deg`, AICreo 연한 로즈 틴트). 반복 패턴·텍스처·손그림 없음. 이미지는 밝고 깔끔한 상업 사진(warm-neutral), 그레인/흑백 필터 없음.
- **코너 반경**: 카드 **12px**(`--radius-md`, 실제 `--bs-card-border-radius: .75rem` 계승), 버튼/인풋 6px, 칩·아바타·배지 pill(999px), 큰 배너/CTA 24px.
- **카드**: 흰 배경 + `1px` `--slate-200` 보더 + 부드러운 슬레이트 그림자(`--shadow-card`). 클릭 가능한 카드는 hover 시 `translateY(-3px)` + `--shadow-lg`(실제 `.promotion-card:hover` 계승). 제품 강조 카드는 상단 3px 액센트 바.
- **그림자 시스템**: 슬레이트 틴트, 낮은 확산. xs→card→md→lg→xl. 컬러 그림자 없음(실제 violet/spring 테마의 컬러 hover 그림자는 의도적으로 뉴트럴화).
- **보더**: 헤어라인은 `--border-subtle`(#F0F0F0, 실제 navbar 보더). 일반 구분선 `--slate-200`.
- **버튼 상태**: hover = 더 진한 컬러(primary는 `-600`), outline은 hover 시 채워짐(fill). ghost는 hover 시 `--slate-50` 배경. press 시 색 변화(스케일 축소 없음). disabled = opacity .55.
- **애니메이션**: `--dur-base .15s`(실제 transition 계승), easing `cubic-bezier(.16,1,.3,1)`. 카드 lift, 드로어 슬라이드, 페이드가 전부 — 바운스/무한 루프 없음. `prefers-reduced-motion` 존중.
- **투명도·블러**: 스티키 네비는 `rgba(255,255,255,.9)` + `backdrop-filter: blur(8px)`. 모달/드로어 오버레이는 `rgba(15,23,42,.4)`. 그 외 유리 효과 남용 금지.
- **레이아웃**: 중앙 정렬 컨테이너 `max 1140px`(Bootstrap 계승), 24px 거터. 섹션 리듬 `py` 44~80px. 4px 베이스 간격 그리드. 스티키 상단 네비.

---

## ICONOGRAPHY

- **시스템**: **Bootstrap Icons 1.11** — 실제 세 제품 전부가 사용하는 아이콘 폰트. CDN 링크로 로드합니다(에셋 복사 불필요):
  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
  ```
  사용: `<i class="bi bi-cart2"></i>`. 컴포넌트 API는 접두사 없는 이름을 받습니다(`icon="cart2"`).
- **실제 제품 매핑**(그대로 채택): 장바구니 `cart2`/`cart-plus`, 사용자 `person`/`person-gear`, 주문 `bag`/`bag-check`, 쿠폰 `ticket-perforated`, 포인트 `star`, 주소 `geo-alt`, 연락 `telephone`/`envelope`, SNS `instagram`/`youtube`/`rss`/`chat-fill`, 이미지 플레이스홀더 `image`, 로그아웃 `box-arrow-right`, 이동 `chevron-right`/`arrow-right`, 알림 `bell`, AI/강조 `stars`/`lightning-charge`.
- **스타일**: 선 굵기 균일한 아웃라인(일부 `-fill` 채움 변형은 상태 강조·SNS에만). 스트로크 스타일 통일. 커스텀 SVG를 손으로 그리지 않음.
- **이모지·유니코드 아이콘**: 사용하지 않음. 모든 픽토그램은 Bootstrap Icons.
- **substitution 플래그**: 없음 — 실제 아이콘 시스템(Bootstrap Icons)을 그대로 사용합니다.

---

## Components (컴포넌트 인덱스)

`window.AIvanceDesignSystem_2cbb92`에서 접근. 각 디렉토리에 `.jsx` + `.d.ts` + `.prompt.md` + `@dsCard` HTML.

**forms/** — `Button` · `IconButton` · `Input` · `Select` · `Checkbox`
**feedback/** — `Badge` · `Alert` · `Tag`
**surfaces/** — `Card` · `StatCard`
**commerce/** — `ProductCard` · `PriceTag`

모든 컴포넌트는 `accent="cura|copia|creo"`로 제품 색상 리테마를 지원(해당되는 경우). 인라인 스타일 + CSS 토큰만 사용, npm 의존성 없음.

> **의도적 추가(Intentional additions)**: 소스가 Bootstrap 컴포넌트를 커스텀 없이 사용하므로, 위 목록은 실제 뷰에서 반복 등장하는 UI를 브랜드 토큰으로 정제한 프리미티브입니다. `StatCard`(관리자 대시보드 위젯), `ProductCard`/`PriceTag`(AICopia `.product-card`), `Tag`(rounded-pill 카테고리 칩)는 실제 화면에서 직접 도출했습니다.

## UI Kits

- **ui_kits/aicopia/** — AI 커머스 스토어프론트 (홈 · 상품상세 · 장바구니 드로어). 액센트 violet.
- **ui_kits/aicreo/** — 기업 홈페이지 (히어로 · 서비스 · 공지 · 문의 CTA). 액센트 rose.
- **ui_kits/aicura/** — 광고 관리 대시보드. 운영자·병원(광고주)·광고대행사 역할별 전용 페이지, iOS·Android 앱 개발 포함. 액센트 teal.

## Foundations (Design System 탭 카드)

- **Colors** — Brand(Advance Blue + Signal) · Neutrals(Slate) · Semantic · Product Accents
- **Type** — Display(Space Grotesk) · Type Scale · Body & Mono
- **Spacing** — Spacing Scale · Radius & Elevation
- **Brand** — Wordmark & Product Lockups · Voice & Tone

## 파일 맵 (manifest)

```
styles.css              # @import 엔트리 (consumers는 이 파일만 링크)
tokens/                 # fonts · colors · typography · spacing · effects
components/             # forms · feedback · surfaces · commerce
templates/             # aivance-home · aicopia-storefront · aicreo-corporate · aicura-dashboard (.dc.html)
ui_kits/               # aicopia · aicreo · aicura (interactive demos)
guidelines/             # foundation @dsCard specimen 카드
readme.md · SKILL.md
```

## 사용법 (Consumers)

```html
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
<script src="_ds_bundle.js"></script>
<script>const { Button, ProductCard } = window.AIvanceDesignSystem_2cbb92;</script>
```

## Templates (소비 프로젝트 시작점)

`templates/<slug>/<Slug>.dc.html` — 디자인 시스템을 소비하는 Design Component. 소비 프로젝트의 Templates 피커에 노출되며, 복제해서 바로 편집합니다. 각 폴더의 `ds-base.js`가 토큰·번들을 로드합니다.

- **templates/aivance-home/** — AIvance 모 브랜드 원페이지 홈 (히어로 · 3제품 · 철학 · 기술 · CTA).
- **templates/aicopia-storefront/** — AICopia 커머스 스토어프론트 (히어로 · 카테고리 · 상품 그리드).
- **templates/aicreo-corporate/** — AICreo 기업 홈페이지 (히어로 · 서비스 · 공지 · 문의 CTA).
- **templates/aicura-dashboard/** — AICura 광고 대시보드 (운영자·병원(광고주)·대행사 역할별 페이지 · KPI · 매출 차트 · AI 리포트 · 병원 소진 · iOS·Android 앱 포함).

## Confirmed brand decisions (확정값)

- **폰트** (확정): Noto Sans KR(본문/UI) · Space Grotesk(워드마크/헤드라인/숫자) · JetBrains Mono(코드). Google Fonts에서 로드. Space Grotesk / JetBrains Mono는 실제 제품 대비 신규 도입이지만 **AIvance 브랜드 표준으로 확정**했습니다. 다른 폰트로 바꾸려면 `tokens/fonts.css`만 교체.
- **제품 액센트** (확정): AICura = teal `#12B3A6` · AICopia = violet `#7C3AED` · AICreo = rose `#F0568C` · 모 브랜드 AIvance = Advance Blue `#2563EB`. `tokens/colors.css`에 반영됨.

## Caveat (남은 항목)

- **로고** (확정) — *Signal Path* 마크 + Space Grotesk 워드마크. 오리지널 신규 디자인이며 `assets/logo-mark*.svg`로 제공됩니다. 브랜드 카드·4개 템플릿·3개 UI 킷의 네비/푸터에 적용 완료. 별도 로고 요구가 있으면 마크만 교체하면 됩니다.
